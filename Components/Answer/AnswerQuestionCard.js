import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, TextInput } from 'react-native';
import { Body, Button, Card, CardItem, CheckBox, Container, Content, Form, Icon, Picker, Text, Textarea } from "native-base";

import Store from '../Store/Store.js';

export default class AskQuestion extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                  <Text style = {{color: '#528D95'}}>اسأل مجرباً ولا تسأل حكيماً</Text>
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
                      placeholderTextColor = "#B4A298"
                      value = {Store.answer}
                      onChangeText={(e) => {Store.answer = e}}
                    />
              </Body>
            </CardItem>
            <CardItem button>
              <Button small style={styles.card} onPress={() => Store.storeAnswer()}><Text> جاوب </Text> </Button>
              <Text>  </Text>
              <Button small style={styles.cancel}><Text> إلغاء </Text> </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  cancel: {
    backgroundColor: '#FCE5C5',
  },
  anonymous: {
    color: '#528D95',
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
  textarea: {
    height: 75,
    width: 325,
    borderColor: '#B4A298',
    textAlign: 'right'
  },
})
