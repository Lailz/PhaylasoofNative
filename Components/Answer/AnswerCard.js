import { observer } from "mobx-react";
import Timestamp from 'react-timestamp';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Icon, Left, List, Right, Text } from "native-base";

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class AnswerCard extends Component {
  render() {
    const answer = this.props.answer;
    return (
          <Card>
            <CardItem>
              <Text style={styles.cardtitle}>{answer.answer_content}</Text>
            </CardItem>
            <CardItem>
              <Text style = {styles.content}>{answer.user.username}</Text>
            </CardItem>
            <CardItem>
                <Text style={styles.votetext}><Icon style={styles.voteicon} type="FontAwesome" name="thumbs-up" />{answer.upvotes}</Text>
                <Text style={styles.votetext}><Icon style={styles.voteicon} type="FontAwesome" name="thumbs-down" />{answer.downvotes}{'        '}</Text>
                <Text>{'            '}</Text>
                <Timestamp style={styles.counting} time={answer.timestamp} component={Text} />
            </CardItem>
          </Card>
    );
  }
})
