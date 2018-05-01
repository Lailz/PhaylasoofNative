import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Textarea, Body, Left, Right, IconNB, Picker, Form } from "native-base";

export default class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }

  onValueChange2(category: string) {
    this.setState({ selected2: category });
  }

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
                      placeholder = "اكتب سؤالك هنا"
                      placeholderTextColor = "#B4A298"
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
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                        >
                        <Picker.Item label="علوم البحار" value="key0" />
                        <Picker.Item label="البيولوجيا" value="key1" />
                        <Picker.Item label="الرياضيات" value="key2" />
                        <Picker.Item label="الهندسة" value="key3" />
                        <Picker.Item label="الفيزياء النووية" value="key4" />
                </Picker>
              </Form>
            </CardItem>
            <CardItem button>
              <Button small style={styles.card} onPress={() => alert("تم حفظ السؤال")}><Text> اسأل </Text> </Button>
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
