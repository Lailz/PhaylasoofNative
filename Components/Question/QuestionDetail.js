import { observer } from "mobx-react";
import {StyleSheet} from 'react-native';
import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Container, Content, Left, List, Right, Text, Thumbnail } from "native-base";

import Store from '../Store/Store.js';
import AnswerCard from '../Answer/AnswerCard.js';

export default observer(class QuestionDetail extends Component {
  constructor(props) {
    super(props);
    const questionID = this.props.match.params.questionID;
    const question = Store.getQuestionByID(questionID);
    const category = Store.getCategoryByID(question.category);
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
    Store.question = question.id;
    return (
      <Container>
        <Content padder>
              <Body>
                <Text style = {styles.title}>{category.category_title}</Text>
                <Text  style = {styles.question}>
                  {question.question_content}
                  {"\n"}
                </Text>
                <Link to='/answerquestion' component={Button} small style={styles.card}>
                  <Text> جاوب </Text>
                </Link>
                <Text style={styles.later}> جاوب لاحقاً </Text>
                </Body>
                <Body>
                  <List
                    dataArray={Store.answers.slice()}
                    renderRow={(answer) => <AnswerCard answer={answer} />}
                  />
                </Body>
        </Content>
      </Container>
    );
  }
})

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  title: {
    textAlign: 'right',
    color: '#528D95',
  },
  question: {
    color: '#528D95',
    marginBottom: 10,
  },
  answerprofile: {
    color: '#739B93',
    fontSize: 14,
  },
  bestanswer: {
    color: '#739B93',
    fontSize: 18,
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
})
