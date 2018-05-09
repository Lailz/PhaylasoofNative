import { observer } from "mobx-react";
import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';

import QuestionCard from './Cards/QuestionCard.js';
import Store from '../Store/Store.js'


export default observer(class QuestionList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={Store.questions.slice()}
            renderRow={(question) => <QuestionCard question={question} />}
          />
        </Content>
      </Container>
    );
  }
})
