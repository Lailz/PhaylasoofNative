import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Container, Content, List, Text } from "native-base";

import styles from '../../styles.js';
import Store from '../Store/Store.js';


export default observer(class QuestionFollowersList extends Component {
  constructor(props) {
    super(props);
    const questionID = this.props.match.params.questionID;
    const question = Store.getQuestionByID(questionID);
    this.state = {
      followers : [],
      question: question,
    }
  }

  componentDidMount () {
    Store.fetchQuestionFollowers(this.state.question.followers);
    this.state.question = Store.questionFollowers;
  }

  render() {
    console.log('Hi, this is me', this.state.question.followers);
    return (
      <Container>
        <Text style={styles.maintitle}>المتابعون</Text>
        <Content padder>
          <List dataArray={Store.questionFollowers.slice()}
                renderRow={(question) => {
                  return (
                    <Card style={styles.followerslist}>
                      <Text>{question.follower.username}</Text>
                    </Card>
                  )
                }}
          />
        </Content>
      </Container>
    );
  }
});
