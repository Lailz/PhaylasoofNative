import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Container, Content, List, Text, Thumbnail } from "native-base";

import CategoryCard from './CategoryCard.js';
import Store from '../Store/Store.js';


export default observer(class CategoryList extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: {},
    }
    this.ChooseCategory = this.ChooseCategory.bind(this)
  }

  ChooseCategory(cat){
    Store.category = cat;
    // console.log(Store.category);
  }

  render() {
    return (
      <Container>
        <Text style={styles.intro}>أهلاً بك في عالم المتفلسفين</Text>
          <Content padder>
            <List
              dataArray={Store.categories.slice()}
              renderRow={(category) => <CategoryCard category={category} />}
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
