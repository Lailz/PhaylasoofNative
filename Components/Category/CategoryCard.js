import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Text, Thumbnail } from "native-base";

import Store from '../Store/Store.js';

export default observer(class CategoryCard extends Component {

  componentDidMount() {
    Store.fetchCategoryFollowers(this.props.category.followers)
  }

  render() {
    const {category} = this.props;
    console.log(Store.categoryFollowers.length);
    return (
          <Card>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
              <Body>
                  {/* <Thumbnail bordered source={category.image}/> */}
                  <Text style={styles.title}>{category.category_title}</Text>
              </Body>
            </Link>
            <CardItem>
              <Link to={`/categorydetail/${category.id}`} component={Text} button>
                <Text style={styles.numberofquestions}> سؤال</Text>
              </Link>
                <Text>{"\t"}</Text>
              <Link to='/categoryfollowerslist' component={Text} button>
                <Text style={styles.numberofquestions}>{Store.categoryFollowers.length} متابع</Text>
              </Link>
            </CardItem>
            <CardItem button>
              <Button small style={styles.card}><Text> تابع </Text> </Button>
            </CardItem>
          </Card>
    );
  }
})

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B4A298',
  },
  category: {
    textAlign: 'right',
    color: '#528D95',
    fontSize: 14,
  },
  later: {
    color: '#C9BDA7',
    fontSize: 12,
  },
  numberofquestions: {
    color: '#C9BDA7',
    fontSize: 14,
  },
  title: {
    color: '#528D95',
  },
})
