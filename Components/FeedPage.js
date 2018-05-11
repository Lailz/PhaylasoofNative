import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, List } from 'native-base';

import QuestionCard from './Question/Cards/QuestionCard.js';
import styles from '../styles.js';
import Store from './Store/Store.js';

export default observer(class FeedPage extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.maintitle}>أهلاً بك في عالم المتفلسفين</Text>
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
