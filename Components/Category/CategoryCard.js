import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Left, Right, Text, Thumbnail } from "native-base";

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class CategoryCard extends Component {
  render() {
    const category = this.props.category;
    Store.categoryid = category.id;
    console.log(category);
    return (
          <Card>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
                <Right>
                  <Thumbnail bordered source={{uri:category.image}}/>
                </Right>
                <Left>
                  <Text style={styles.cardtitle}>{category.category_title}</Text>
              </Left>
            </Link>
            <CardItem>
              <Link to={`/categorydetail/${category.id}`} component={Text} button>
                <Text style={styles.counting}>{category.questions_number} سؤال</Text>
              </Link>
                <Text>{"\t"}</Text>
              <Link to={`/categoryfollowerslist/${category.id}`} component={Text} button>
                <Text style={styles.counting}>{category.followers_number} متابع</Text>
              </Link>
            </CardItem>
            <CardItem button>
              <Button bordered onPress={() => Store.storeCategoryFollower()} small style={styles.borderedbutton}>
                <Text style={styles.borderedbuttontext}> تابع </Text>
              </Button>
            </CardItem>
          </Card>
    );
  }
})
