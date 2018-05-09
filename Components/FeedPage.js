import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, List } from 'native-base';

import AnsweredQuestionCard from './Question/Cards/AnsweredQuestionCard.js';
import QuestionCard from './Question/Cards/QuestionCard.js';
import AskQuestionCard from './Question/Cards/AskQuestionCard.js';
import Store from './Store/Store.js';

export default observer(class FeedPage extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.intro}>أهلاً بك في عالم المتفلسفين</Text>
        <Content>
          <List
            dataArray={Store.questions.slice()}
            renderRow={(question) => <QuestionCard question={question}/>}
          />
        </Content>
      </Container>
    );
  }
})

const styles = StyleSheet.create({
  intro: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#528D95',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
  },
});
