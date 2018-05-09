import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';

import Store from '../Store/Store.js';

export default observer(class UserProfile extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>حسابك</Text>
          <Text style={styles.text}>اسم المستخدم: {Store.currentUser}</Text>
          <TouchableOpacity style={styles.buttonstyle} onPress={() => Store.logout()}>
            <Text style={styles.buttontext}>سجل خروجك</Text>
          </TouchableOpacity>
        </View>
      )
    }
  })


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: 'white',
      paddingRight: 60,
      paddingLeft: 60,
    },

    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },

    title: {
      color: '#528D95',
      fontSize: 24,
      borderBottomColor: '#528D95',
      marginBottom: 10,
    },

    text: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#528D95',
    },

    buttonstyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#528D95',
      marginTop: 30,
    },

    buttontext: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },

    signin: {
      color: '#528D95',
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 15,
    },
    }
  )
