import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Icon, List, Text } from "native-base";

import Store from '../../Store/Store.js';
import styles from '../../../styles.js';


export default observer(class QuestionCard extends Component {

  render() {
    const question = this.props.question;
    return (
        <Content padder>
          <Card>
            <Link to={`/categorydetail/${question.category.id}`} component={CardItem} button>
              <Body>
                <Text style={styles.cardtitle}>{question.category.category_title}</Text>
              </Body>
            </Link>
            <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
              <Body>
                  <Text style = {styles.content}>
                    {question.question_content}
                  </Text>
              </Body>
            </Link>
            <CardItem>
              <Link to={`/questiondetail/${question.id}`} component={CardItem} button>
                  <Text style={styles.counting}>{question.answers_number} جواب</Text>
              </Link>
              <Link to={`/categoryfollowerslist/${question.category.id}`} component={CardItem} button>
                <Text style={styles.counting}>{question.followers_number} متابع</Text>
              </Link>
                <Text style={styles.votetext}><Icon style={styles.voteicon} type="FontAwesome" name="thumbs-up" />{question.upvotes}{'    '}</Text>
                <Text style={styles.votetext}><Icon style={styles.voteicon} type="FontAwesome" name="thumbs-down" />{question.downvotes}{'     '}</Text>
            </CardItem>

            <CardItem>
              <Link to={`/answerquestion/${question.id}`} component={Button} small bordered style={styles.borderedbutton}>
                <Text style={styles.borderedbuttontext}> جاوب </Text>
              </Link>
              <Text>    </Text>
              <Text style={styles.followquestion}> تابع السؤال </Text>
            </CardItem>
          </Card>
        </Content>
    );
  }
})
