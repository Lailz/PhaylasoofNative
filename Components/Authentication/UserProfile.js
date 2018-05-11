import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class UserProfile extends Component {
  render() {
    return (
        <View style={styles.authcontainer}>
          <Text style={styles.authtitle}>حسابك</Text>
          <Text style={styles.content}>اسم المستخدم: {Store.currentUser}</Text>
          <TouchableOpacity style={styles.authbuttonstyle} onPress={() => Store.logout()}>
            <Text style={styles.authbuttontext}>سجل خروجك</Text>
          </TouchableOpacity>
        </View>
      )
    }
  })
