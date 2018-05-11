import {observer} from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Button, Title } from 'native-base';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class SigninPage extends Component {
  render() {
    return (
      <View style={styles.authcontainer}>
        <Text style={styles.authtitle}>تسجيل الدخول</Text>
        <TextInput style={styles.authtextinput} placeholder="اسم المستخدم" placeholderTextColor='#A6AEC1'
                   value={Store.username}
                   onChangeText={(e) => {Store.username = e}}/>
        <TextInput style={styles.authtextinput} placeholder="كلمة السر" placeholderTextColor='#A6AEC1' secureTextEntry={true}
                   value={Store.password}
                   onChangeText={(e) => {Store.password = e}}/>
        <TouchableOpacity style={styles.authbuttonstyle} onPress={() => Store.signin()}>
          <Text style={styles.authbuttontext}>سجل دخولك</Text>
        </TouchableOpacity>
        <Link to='/signup' component={Button} transparent>
          <Text style={styles.authother}>
            ألا تمتلك حساباً؟ سجل الآن!
          </Text>
        </Link>
      </View>
    );
  }
})
