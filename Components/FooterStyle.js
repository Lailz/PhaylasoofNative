import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { Badge, Button, Footer, FooterTab, Icon, Text } from 'native-base';
import Store from './Store/Store.js';


export default class FooterStyle extends Component {
  render() {
    return (
        <Footer style={styles.headerstyle}>
          <FooterTab>
            <Link to='/' component={Button} vertical>
              <Icon name="home" style={styles.icon} />
              <Text style={styles.icontext}>الرئيسية</Text>
            </Link>
            <Link to='/categorylist' component={Button} transparent vertical>
              <Icon name="paper" style={styles.icon} />
              <Text style={styles.icontext}>المجالات</Text>
            </Link>
            <Link to='/askquestion' component={Button} vertical>
              <Icon name="add" style={styles.askicon}/>
              <Text style={styles.icontext}>اسأل</Text>
            </Link>
            <Button vertical badge>
              <Badge ><Text>5</Text></Badge>
              <Icon active name="notifications" style={styles.icon} />
              <Text style={styles.icontext}>إشعارات</Text>
            </Button>
            <Link to='/profile' component={Button} vertical>
              <Icon name="person" style={styles.icon} />
              <Text style={styles.icontext}>حسابك</Text>
            </Link>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
  headerstyle: {
    backgroundColor: '#528D95',
  },

  askiconbg: {
    backgroundColor: 'white',
  },

  askicon: {
        color: 'white',
        fontSize: 40,
  },

  askicontext: {
  color: '#528D95',
  fontSize: 12,
  },

  icon: {
  color: 'white',
  },

  icontext: {
  color: 'white',
  fontSize: 12,
  },

});
