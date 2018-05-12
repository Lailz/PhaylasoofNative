import { observer } from "mobx-react";
import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, TextInput } from 'react-native';
import { Body, Button, Card, CardItem, CheckBox, Container, Content, Form, Icon, Picker, Text, Textarea } from "native-base";

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class AskQuestion extends Component {
  constructor(props) {
    super(props);
    const questionID = this.props.match.params.categoryID;
    this.state = {
      questionID : questionID,
    }
  }

  SaveAnswer() {
    Store.questionid = this.state.questionID;
    Store.storeAnswer().then(
      () => this.props.history.push('/questionlist')
    );
  }

  render() {
    console.log('The question id in AnswerQuestion is: ', this.state.questionID);
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                  <Text style = {styles.maintitle}>اسأل مجرباً ولا تسأل حكيماً</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Textarea bordered
                          style = {styles.textarea}
                          editable = {true}
                          maxLength = {500}
                          numberOfLines = {5}
                          multiline = {true}
                          placeholder = "اكتب جوابك هنا"
                          placeholderTextColor = "#A6AEC1"
                          value = {Store.answer}
                          onChangeText={(e) => {Store.answer = e}}
                  />
              </Body>
            </CardItem>
            <CardItem button>
              <Button small bordered style={styles.borderedbutton} onPress={() => {this.SaveAnswer()}}>
                <Text style={styles.borderedbuttontext}> جاوب </Text>
              </Button>
              <Text>  </Text>
              <Button small bordered style={styles.borderedbutton} onPress={() => this.props.history.goBack()}>
                <Text style={styles.borderedbuttontext}> إلغاء </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
})
