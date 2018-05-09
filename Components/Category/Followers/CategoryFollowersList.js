import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, Text } from "native-base";

import Store from '../../Store/Store.js';


export default observer(class CategoryFollowersList extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.intro}>المتابعون</Text>
          <Content padder>
            <List
              dataArray={Store.categoryFollowers.slice()}
              renderRow={(follower) => {
                return (
                  <Text>{follower.id}</Text>
                )
              }}
            />
          </Content>
      </Container>
    );
  }
});

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
