import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Toast } from 'native-base';
import profiledefault from '../../images/Portrait.png';
import { extendObservable } from "mobx";
import { AsyncStorage } from 'react-native';


class myStore {
  constructor() {
    extendObservable(this, {
      currentUser : {
        username : '',
        firstname : '',
        lastname : '',
      },
      token : '',
      error : [],

      username : "",
      password : "",
      firstname: "",
      lastname : "",
      email : "",
      user : "",
      profile : {},

      category : "",
      categoryid : "",
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
      questionFollowers : [],
      userFollowers : [],
      userFollowing : [],
    })
  }

  register() {
    return axios.post('http://127.0.0.1:8000/api/register/', {
      username: this.username,
      first_name: this.firstname,
      last_name: this.lastname,
      email: this.email,
      password: this.password,
    })
    .then(res => {
      res.data;
      return res.data
    })
    .then((res) => {
      // AsyncStorage.setItem("currentUser", res.username);
      this.currentUser = res.username;
      this.token = res.token;
      this.user = jwt_decode(res.token);
      this.fetchProfile(this.user.user_id);
      this.resetForm();
    })
    .catch(err => Toast.show({
      text: "عذراً.. حاول مرة أخرى",
      buttonText: "Okay",
      position: "bottom"
    }));
  }

  signin() {
    return axios.post('http://127.0.0.1:8000/api/login/', {
      username: this.username,
      password: this.password,
    })
    .then(res => {
      res.data;
      return res.data
    })
    .then((res) => {
      // AsyncStorage.setItem("currentUser", res.username);
      this.currentUser = res.username;
      this.token = res.token;
      this.user = jwt_decode(res.token);
      this.fetchProfile(this.user.user_id);
      this.resetForm();
    })
    .catch(err => Toast.show({
      text: "عذراً.. حاول مرة أخرى",
      buttonText: "Okay",
      position: "bottom"
    }));
  }

  fetchProfile(userID) {
    return axios.get(`http://127.0.0.1:8000/api/profile/${userID}`)
      .then(res => res.data)
      .then(profile => {
        this.profile = profile;
      })
      .then(() => {
        (this.profile.image == null) ? this.profile.image = profiledefault;
      })
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
    }

  // getProfileByID(id) {
  //   return this.profile.find(profile => profile.id == id);
  // }

  logout() {
    // AsyncStorage.removeItem("currentUser");
    // AsyncStorage.removeItem("token");
    this.currentUser = null;
    this.token = null;
    this.profile = {};
  }

  resetForm() {
    this.error = [];
    this.username = "";
    this.firstname = "";
    this.lastname = "";
    this.email = "";
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
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
      }

  getCategoryByID(id) {
    const categoryIndex = this.categories.findIndex(category => category.id == id);
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
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
    }

  storeQuestion() {
    const ask = { question_content: this.question,
      user: this.user.user_id,
      category: this.category }
      // console.log(ask);
    return axios.post('http://127.0.0.1:8000/api/question/create/',
      ask,
      {headers: {Authorization: `JWT ${this.token}`}},
    )
      .then(res => res.data)
      .then(question_content => {
        this.questions.push(ask);
        this.resetForm();
      })
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
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
        .catch(err => Toast.show({
          text: "عذراً.. حاول مرة أخرى",
          buttonText: "Okay",
          position: "bottom"
        }));
      }
    }

  storeAnswer() {
    const answer = {
      answer_content: this.answer,
      user: this.user.user_id,
      question: this.questionid }
    return axios.post('http://127.0.0.1:8000/api/answer/create/',
      answer,
      {headers: {Authorization: `JWT ${this.token}`}},
    )
      .then(res => res.data)
      .then(answer_content => {
        this.answers.push(answer);
        this.resetForm();
      })
      .then(() => {
        this.getQuestionByID(this.questionid).answers_number += 1;
      })
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
    }

  fetchCategoryFollowers(categoryFollowersUrl) {
    return axios.get(categoryFollowersUrl)
      .then(res => res.data)
      .then(followers => {
        this.categoryFollowers = followers;
      })
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
  }

  storeCategoryFollower() {
    const category = {category: this.categoryid}
    return axios.post('http://127.0.0.1:8000/api/follow/category/',
      {category: this.categoryid},
      {headers: {Authorization: `JWT ${this.token}`}},
    )
      .then(res => res.data)
      .then( follower => {
        console.log(this.currentUser);
        this.categoryFollowers.push(this.user);
        console.log('followers', follower);
        this.resetForm();
      })
      .then(() => {
        this.getCategoryByID(this.categoryid).followers_number += 1;
      })
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
  }

  fetchQuestionFollowers(questionFollowersUrl) {
    return axios.get(questionFollowersUrl)
      .then(res => res.data)
      .then(followers => {
        this.questionFollowers = followers;
      })
      .catch(err => Toast.show({
        text: "عذراً.. حاول مرة أخرى",
        buttonText: "Okay",
        position: "bottom"
      }));
  }

  getFollowersByCategoryID(id) {
    return this.categoryFollowers.find(follower => follower.category == id);
  }
}
  const Store =  new myStore()
  Store.fetchCategories()

  export default Store;
