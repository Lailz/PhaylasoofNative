import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, TextInput } from 'react-native';
import { Body, Button, Card, CardItem, CheckBox, Container, Content, Form, Icon, Picker, Text, Textarea } from "native-base";

import Store from '../../Store/Store.js';

export default class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    }
    this.ChooseCategory = this.ChooseCategory.bind(this);
    this.SaveQuestion = this.SaveQuestion.bind(this);
  }

  ChooseCategory(categoryName: string) {
    this.setState({ category: categoryName });
  }

  SaveQuestion() {
    Store.category = this.state.category;
    Store.storeQuestion().then(
      () => this.props.history.push(`/categorydetail/${this.state.category}`)
    )
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                  <Text style = {styles.title}>اسأل مجرباً ولا تسأل حكيماً</Text>
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
                      placeholder = "اكتب سؤالك هنا"
                      placeholderTextColor = "#B4A298"
                      value = {Store.question}
                      onChangeText={(e) => {Store.question = e}}
                    />
              </Body>
            </CardItem>
            <CardItem>
              <Form>
                <Picker mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        iosHeader="المجال"
                        headerBackButtonText="العودة"
                        headerBackButtonColor="#C9BDA7"
                        placeholder="اختر مجال سؤالك"
                        placeholderTextColor = "#B4A298"
                        placeholderIconColor="#B4A298"
                        selectedValue={this.state.category}
                        onValueChange={this.ChooseCategory}
                        >
                        <Picker.Item label="الرياضيات"        value="1" />
                        <Picker.Item label="الفلسفة"          value="2" />
                        <Picker.Item label="علوم البحار"      value="key0" />
                        <Picker.Item label="البيولوجيا"       value="key1" />
                        <Picker.Item label="الهندسة"          value="key3" />
                        <Picker.Item label="الفيزياء النووية"  value="key4" />
                </Picker>
              </Form>
            </CardItem>
            <CardItem button>
              <Link onPress={() => this.SaveQuestion()} component={Button} small style={styles.card} ><Text> اسأل </Text> </Link>
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
  anonymous: {
    color: '#528D95',
  },
  card: {
    backgroundColor: '#B4A298',
  },
  cancel: {
    backgroundColor: '#FCE5C5',
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
  title: {
    color: '#528D95',
  },
})
