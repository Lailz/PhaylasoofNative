import { observer } from "mobx-react";
import React, { Component } from 'react';
import Timestamp from 'react-timestamp';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Text, List } from "native-base";
import Store from '../Store/Store.js';

export default observer(class AnswerCard extends Component {

  render() {
    const answer = this.props.answer;
    return (
          <Card>
            <CardItem>
              <Text style = {styles.answer}>{answer.answer_content}</Text>
            </CardItem>
            <CardItem>
              <Text style = {styles.user}>{answer.user.username}</Text>
            </CardItem>
            <CardItem>
              <Timestamp style={styles.time} time={answer.timestamp} component={Text} />
            </CardItem>
          </Card>
    );
  }
})

const styles = StyleSheet.create({
  answer: {
    textAlign: 'right',
    color: '#6C788E',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#A6AEC1',
  },
  time: {
    color: '#739B93',
    fontSize: 12,
  },
  user: {
    color: '#739B93',
    fontSize: 13,
  }
})
