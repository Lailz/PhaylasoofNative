import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Text, List } from "native-base";
import Store from '../../Store/Store.js';

export default observer(class QuestionCard extends Component {

  render() {
    const question = this.props.question;
    console.log(question.answers);
    if(question.answers){
      const answers = Store.fetchAnswers(question.answers);
      console.log(answers);
    }
    // const answers = Store.fetchAnswers(question.answers)

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
              <Button small style={styles.card}><Text> جاوب </Text></Button>
              <Text>    </Text>
              <Text style={styles.later}> جاوب لاحقاً </Text>
            </CardItem>
            {/* <CardItem > */}
              {/* <List
                  dataArray={answers}
                  renderRow={(answer) => {return (
                    <Text> {answer.answer_content}</Text>
                  )}}
              />
            </CardItem> */}
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
