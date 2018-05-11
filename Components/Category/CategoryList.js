import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, Text } from "native-base";

import CategoryCard from './CategoryCard.js';
import styles from '../../styles.js';
import Store from '../Store/Store.js';


export default observer(class CategoryList extends Component {
  render() {
    // console.log(Store.categories);
    return (
      <Container>
        <Text style={styles.maintitle}>المجالات</Text>
          <Content padder>
            <List dataArray={Store.categories.slice()}
                  renderRow={(category) => <CategoryCard category={category} />}
            />
          </Content>
      </Container>
    );
  }
});
