import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { Body, Button, Header, Icon, Title } from 'native-base';

import styles from '../styles.js';

export default withRouter(class HeaderStyle extends Component {
  render() {
    return (
        <Header style={styles.headerstyle}>
            <Button onPress={() => this.props.history.goBack()} transparent >
              <Icon style={styles.headerfootericon} name='arrow-forward' />
            </Button>
            <Body>
              <Link to='/' component={Button} transparent>
                <Title style={styles.headerfootericon}>فيلسوف</Title>
              </Link>
            </Body>
          <Button transparent >
            <Icon style={styles.headerfootericon} name='search' />
          </Button>
        </Header>
    );
  }
})
