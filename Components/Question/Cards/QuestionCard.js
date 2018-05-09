import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Text, List } from "native-base";
import Store from '../../Store/Store.js';

export default observer(class QuestionCard extends Component {

  render() {

    const question = this.props.question;
    
    return (
        <Content padder>
          <Card>
            <Link to={`/categorydetail/${question.category}`} component={CardItem} button>
              <Body>
                <Text style={styles.category}>{question.category}</Text>
              </Body>
            </Link>
            <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
              <Body>
                  <Text  style = {{color: '#528D95'}}>
                    {question.question_content}
                  </Text>
              </Body>
            </Link>
            <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
                <Text style={styles.numberofanswers}>{question.numberOfAnswers} أجوبة</Text>
            </Link>
            <CardItem button>
              <Link to={'/answerquestion'} component={Button} small style={styles.card}><Text> جاوب </Text></Link>
              <Text>    </Text>
              <Text style={styles.later}> جاوب لاحقاً </Text>
            </CardItem>
          </Card>
        </Content>
    );
  }
})

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  category: {
    textAlign: 'right',
    color: '#528D95',
    fontSize: 14,
  },
  numberofanswers: {
    color: '#C9BDA7',
    fontSize: 14,
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
})
