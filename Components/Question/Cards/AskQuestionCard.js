import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, TextInput } from 'react-native';
import { Body, Button, Card, CardItem, CheckBox, Container, Content, Form, Icon, Picker, Text, Textarea } from "native-base";

import styles from '../../../styles.js';
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
          <Body>
              <Text style = {styles.maintitle}>اسأل مجرباً ولا تسأل حكيماً</Text>
          </Body>
          <Card>
            <CardItem>
              <Body>
                  <Textarea bordered
                      style = {styles.textarea}
                      editable = {true}
                      maxLength = {500}
                      numberOfLines = {5}
                      multiline = {true}
                      placeholder = "اكتب سؤالك هنا"
                      placeholderTextColor = "#A6AEC1"
                      color = "#6C788E"
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
                        headerBackButtonText={<Icon name='arrow-forward' />}
                        placeholder="اختر مجال سؤالك"
                        placeholderTextColor = "#A6AEC1"
                        placeholderIconColor="#A6AEC1"
                        selectedValue={this.state.category}
                        onValueChange={this.ChooseCategory}
                        >
                        <Picker.Item label="الرياضيات"        value="1" />
                        <Picker.Item label="الفلسفة"          value="2" />
                        <Picker.Item label="علوم البحار"      value="3" />
                        <Picker.Item label="البيولوجيا"       value="4" />
                        <Picker.Item label="الهندسة"          value="5" />
                        <Picker.Item label="الفيزياء النووية"  value="6" />
                </Picker>
              </Form>
            </CardItem>
            <CardItem button>
              <Link onPress={() => this.SaveQuestion()} component={Button} bordered small style={styles.borderedbutton} ><Text style={styles.borderedbuttontext}> اسأل </Text> </Link>
              <Text>  </Text>
              <Button small onPress={() => this.props.history.goBack()} bordered style={styles.borderedbutton}><Text style={styles.borderedbuttontext}> إلغاء </Text> </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
