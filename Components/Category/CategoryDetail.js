import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {observer} from 'mobx-react';
import { Body, Button, Card, CardItem, Container, Content, Left, Right, Thumbnail, Text, List } from "native-base";

import Store from '../Store/Store.js';
import QuestionCard from '../Question/Cards/QuestionCard.js';

export default observer(class CategoryDetail extends Component {
  render() {
    const categoryID = this.props.match.params.categoryID;
    const category = Store.getCategoryByID(categoryID);
    const questions = typeof category.questions === 'string' ? [] : category.questions.slice();
    return (
      <Container>
        <Content padder >
              <Body>
                {/* <Thumbnail bordered source={{uri: this.state.category.image}}/> */}
                <Text style={styles.title}>{category.category_title}</Text>
                <Text  style = {{color: '#528D95'}}>
                  {category.category_description}
                  {"\n"}
                </Text>
                <Button small style={styles.card}><Text> تابع </Text></Button>
                <List dataArray = {questions}
                      renderRow = {(question) => <QuestionCard question={question} />}
                />
              </Body>
        </Content>
      </Container>
    );
  }
})

const styles = StyleSheet.create({
  title: {
    textAlign: 'right',
    color: '#528D95',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#B4A298',
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
