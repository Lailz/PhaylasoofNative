import axios from 'axios';
import { extendObservable } from "mobx";
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

class myStore {
  constructor() {
    extendObservable(this, {
      currentUser : "",
      token : "",
      error : [],

      username : "",
      password : "",
      firstname: "",
      lastname : "",
      email : "",
      user : "",

      category : "",
      question : "",
      questionid : "",
      answer : "",

      categories : [],
      answers: [],
      get questions() {
        let flatQuestions = [];
        this.categories.forEach(category => {
          if(typeof category.questions !== 'string') {
            category.questions.forEach(question => flatQuestions.push(question));
          }
        });
        return flatQuestions;
      },

      categoryFollowers : [],
      userFollowers : [],
      userFollowing : [],
    })
  }


  register() {
    console.log(this.username);
    return axios.post('http://127.0.0.1:8000/api/register/', {
      username: this.username,
      first_name: this.firstname,
      last_name: this.lastname,
      email: this.email,
      password: this.password,
    })
    .then(res => res.data)
    .then(() => {
      this.resetForm();
    })
    .catch(err => {
      console.log(err.response.data)
      });
  }

  signin() {
    return axios.post('http://127.0.0.1:8000/api/login/', {
      username: this.username,
      password: this.password,
    })
    .then(res => res.data)
    .then(({username, token}) => {
      AsyncStorage.setItem("currentUser", username);
      AsyncStorage.setItem("token", token);
      this.currentUser = username;
      this.token = token;
      this.user = jwt_decode(token);
      this.resetForm();
      console.log(this.token);
      console.log('User is', this.user.user_id);
    })
    .catch(err => {
      console.log(err.response.data)
      });
  }

  logout() {
    AsyncStorage.removeItem("currentUser");
    AsyncStorage.removeItem("token");
    this.currentUser = null;
    this.token = null;
  }

  resetForm() {
    this.error = [];
    this.username = "";
    this.firstname = "";
    this.lastname = "";
    this.password = "";
    this.question = "";
    this.category = "";
    this.answer = "";
  }

  get isLoggedIn() {
    return !!this.token;
  }

  fetchCategories() {
    return axios.get('http://127.0.0.1:8000/api/category/list/')
      .then(res => res.data)
      .then(categories => {
        this.categories = categories;
      })
      .catch(err => console.error(err));
      }

  getCategoryByID(id) {
    const categoryIndex = this.categories.findIndex(category => category.id == id);
    console.log(this.categories)
    if(typeof this.categories[categoryIndex].questions === 'string') {
      this.fetchQuestions(this.categories[categoryIndex].questions)
        .then(questions => this.categories[categoryIndex].questions = questions)
      }
      return this.categories[categoryIndex];
    }

  // fetchCategories() {
  //   return axios.get('http://127.0.0.1:8000/api/category_list/')
  //   .then(res => res.data)
  //   .then(categories => {
  //     this.categories = categories;
  //   })
  //     return axios.all(categories.map(category => this.fetchQuestions(category.questions)))
  //   })
  //   .then(questionsArray => questionsArray.forEach((questionList, idx) => {
  //     this.categories[idx].questions = questionList;
  //   }))
  //   .catch(err => console.error(err));
  // }

  fetchQuestions(questionsUrl) {
    return axios.get(questionsUrl)
      .then(res => res.data)
      .catch(err => console.error(err));
    }

  storeQuestion() {
    const ask = { question_content: this.question,
      user: this.user.user_id,
      category: this.category }
      console.log(ask);
    return axios.post('http://127.0.0.1:8000/api/question/create/',
      ask,
      {headers: {Authorization: `JWT ${this.token}`}},
    )
      .then(res => res.data)
      .then(question_content => {
        this.questions.push(ask);
        this.resetForm();
      })
      .catch(err => console.error(err));
  }

  getQuestionByID(id) {
    return this.questions.find(question => question.id == id);
  }

  fetchAnswers(answersUrl) {
    if(typeof answersUrl === 'string') {
      return axios.get(answersUrl)
        .then(res => res.data)
        .then(answers => {
          this.answers = answers;
        })
        .catch(err => console.error(err));
      }
    }

  storeAnswer() {
    const answer = {
      answer_content: this.answer,
      user: this.user.user_id,
      question: this.question }
    console.log(answer);
    return axios.post('http://127.0.0.1:8000/api/answer/create/',
      answer,
      {headers: {Authorization: `JWT ${this.token}`}},
    )
      .then(res => res.data)
      .then(answer_content => {
        this.answers.push(answer);
        this.resetForm();
      })
      .catch(err => console.error(err));
    }

  fetchCategoryFollowers(categoryFollowersUrl) {
    return axios.get(categoryFollowersUrl)
      .then(res => res.data)
      .then(followers => {
        this.categoryFollowers = followers;
      })
      .catch(err => console.error(err));
  }

  getFollowersByCategoryID(id) {
    return this.categoryFollowers.find(follower => follower.category == id);
  }
  }



  const Store =  new myStore()
  Store.fetchCategories()

  export default Store;
