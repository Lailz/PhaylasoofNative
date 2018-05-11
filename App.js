import { observer } from "mobx-react";
import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Button, Container, Content, Root, Text, Toast } from 'native-base';

import FeedPage from './Components/FeedPage.js';
import HeaderStyle from './Components/HeaderStyle.js';
import FooterStyle from './Components/FooterStyle.js';

import SigninPage from './Components/Authentication/SigninPage.js';
import SignupPage from './Components/Authentication/SignupPage.js';
import ProfilePage from './Components/Authentication/ProfilePage.js';

import QuestionList from './Components/Question/QuestionList.js';
import QuestionDetail from './Components/Question/QuestionDetail.js';

import AskQuestionCard from './Components/Question/Cards/AskQuestionCard.js';
import AnswerQuestionCard from './Components/Answer/AnswerQuestionCard.js';

import CategoryList from './Components/Category/CategoryList.js';
import CategoryDetail from './Components/Category/CategoryDetail.js';
import CategoryFollowersList from './Components/Category/Followers/CategoryFollowersList.js';

I18nManager.forceRTL(true);

export default observer(class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <NativeRouter>
        <Root>
          <Container>
            <HeaderStyle />
            <Switch>
              <Route exact path='/' component={FeedPage} />

              <Route path='/signin' component={SigninPage} />
              <Route path='/signup' component={SignupPage} />
              <Route path='/profile' component={ProfilePage} />

              <Route path='/questionlist' component={QuestionList} />
              <Route path='/questiondetail/:questionID' component={QuestionDetail} />

              <Route path='/askquestion' component={AskQuestionCard} />
              <Route path='/answerquestion/:questionID' component={AnswerQuestionCard} />

              <Route path='/categorylist' component={CategoryList} />
              <Route path='/categorydetail/:categoryID' component={CategoryDetail} />
              <Route path='/categoryfollowerslist/:categoryID' component={CategoryFollowersList} />
            </Switch>
            <FooterStyle />
          </Container>
        </Root>
      </NativeRouter>
    );
  }
})
