import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Container, Content, List, Text, Thumbnail } from "native-base";

import styles from '../../../styles.js';
import Store from '../../Store/Store.js';


export default observer(class CategoryFollowersList extends Component {
  constructor(props) {
    super(props);
    const categoryID = this.props.match.params.categoryID;
    const category = Store.getCategoryByID(categoryID);
    this.state = {
      followers : [],
      category: category,
    }
  }

  componentDidMount () {
    Store.fetchCategoryFollowers(this.state.category.followers);
    this.state.followers = Store.categoryFollowers;
  }

  render() {
    console.log('FOLLOWERS LIST: ', Store.categoryFollowers);
    return (
      <Container>
        <Text style={styles.maintitle}>المتابعون</Text>
        <Content padder>
          <List dataArray={Store.categoryFollowers.slice()}
                renderRow={(follower) => {
                  return (
                    <Card style={styles.followerslist}>
                      <Thumbnail bordered source={{uri: follower.follower.image}}/>
                      <Text>{follower.follower.username}</Text>
                    </Card>
                  )
                }}
          />
        </Content>
      </Container>
    );
  }
});
