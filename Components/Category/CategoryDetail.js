import {observer} from 'mobx-react';
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Container, Content, Left, List, Right, Thumbnail, Text } from "native-base";

import styles from '../../styles.js';
import Store from '../Store/Store.js';
import QuestionCard from '../Question/Cards/QuestionCard.js';

export default observer(class CategoryDetail extends Component {

  render() {
    const categoryID = this.props.match.params.categoryID;
    const category = Store.getCategoryByID(categoryID);
    const questions = typeof category.questions === 'string' ? [] : category.questions.slice();
    console.log(questions);

    return (
      <Container>
        <Content padder>
          <Right>
            <Thumbnail bordered source={{uri: category.image}}/>
          </Right>
          <Left>
            <Text style={styles.maintitle}>{category.category_title}</Text>
          </Left>
          <Body>
            <Text style = {styles.content}> {category.category_description} {"\n"}</Text>
            <Text style={styles.counting}>{category.questions_number} سؤال</Text>
              <Text>{"\t"}</Text>
              <Link to={`/categoryfollowerslist/${category.id}`} component={Text} button>
                <Text style={styles.counting}>{category.followers_number} متابع</Text>
              </Link>
            <Button small bordered style={styles.borderedbutton}>
              <Text style={styles.borderedbuttontext}> تابع </Text>
            </Button>
            <List dataArray = {questions}
                  renderRow = {(question) => <QuestionCard question={question} />}
            />
          </Body>
        </Content>
      </Container>
    );
  }
})
