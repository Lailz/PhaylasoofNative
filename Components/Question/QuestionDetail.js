import { observer } from "mobx-react";
import {StyleSheet} from 'react-native';
import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Container, Content, Left, List, Right, Text, Thumbnail } from "native-base";

import styles from '../../styles.js';
import Store from '../Store/Store.js';
import AnswerCard from '../Answer/AnswerCard.js';

export default observer(class QuestionDetail extends Component {
  constructor(props) {
    super(props);
    const questionID = this.props.match.params.questionID;
    const question = Store.getQuestionByID(questionID);
    const category = Store.getCategoryByID(question.category.id);
    this.state = {
      question : question,
      category : category,
    }
  }

  componentDidMount () {
    Store.fetchAnswers(this.state.question.answers);
  }

  render() {
    const {question, category} = this.state;
    Store.questionid = question.id;
    return (
      <Container>
        <Content padder>
          <Body>            
            <Text  style = {styles.question}>
              {question.question_content}
              {"\n"}
            </Text>
            <Text style = {styles.categorytitle}>{category.category_title}</Text>
            <Link to={`/answerquestion/${question.id}`} component={Button} small bordered style={styles.borderedbutton}>
              <Text style={styles.borderedbuttontext}> جاوب </Text>
            </Link>
            <Text style={styles.followquestion}> تابع السؤال </Text>
          </Body>
          <Body>
            <List dataArray={Store.answers.slice()}
                  renderRow={(answer) => <AnswerCard answer={answer} />}
            />
          </Body>
        </Content>
      </Container>
    );
  }
})
