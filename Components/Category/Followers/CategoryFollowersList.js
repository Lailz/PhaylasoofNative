import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, Text } from "native-base";

import Store from '../../Store/Store.js';


export default observer(class CategoryFollowersList extends Component {
  constructor(props) {
    super(props);
    const followers = Store.categoryFollowers;
    this.state = {
      followers : followers,
    }
  }

  render() {
    // console.log(this.state.followers);
    return (
      <Container>
        <Text style={styles.intro}>المتابعون</Text>
        <Content padder>
          <List dataArray={this.state.followers}
                renderRow={(follower) => {
                  return (
                    <Text>{follower.follower.email}</Text>
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
