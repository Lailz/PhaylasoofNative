import { observer } from "mobx-react";
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Body, Button, Card, CardItem, Content, Text, Thumbnail } from "native-base";

export default observer(class CategoryCard extends Component {

  render() {
    const category = this.props.category;

    return (
          <Card>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
              <Body>
                  {/* <Thumbnail bordered source={category.image}/> */}
                  <Text style={styles.title}>{category.category_title}</Text>
              </Body>
            </Link>
            <Link to={`/categorydetail/${category.id}`} component={CardItem} button >
                <Text style={styles.numberofquestions}> سؤال</Text>
                <Text>{"\t"}</Text>
                <Text style={styles.numberofquestions}> متابع</Text>
            </Link>
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
