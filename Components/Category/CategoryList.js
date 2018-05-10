import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, Text } from "native-base";

import CategoryCard from './CategoryCard.js';
import Store from '../Store/Store.js';


export default observer(class CategoryList extends Component {
  render() {
    // console.log(Store.categories);
    return (
      <Container>
        <Text style={styles.intro}>أهلاً بك في عالم المتفلسفين</Text>
          <Content padder>
            <List dataArray={Store.categories.slice()}
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
