import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';
import Store from '../Store/Store.js';


export default observer(class SigninPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>تسجيل الدخول</Text>
        <TextInput style={styles.textinput} placeholder="اسم المستخدم" placeholderTextColor='#739B93'
                   value={Store.username}
                   onChangeText={(e) => {Store.username = e}}/>
        <TextInput style={styles.textinput} placeholder="كلمة السر" placeholderTextColor='#739B93' secureTextEntry={true}
                   value={Store.password}
                   onChangeText={(e) => {Store.password = e}}/>
        <TouchableOpacity style={styles.buttonstyle} onPress={() => Store.signin()}>
          <Text style={styles.buttontext}>سجل دخولك</Text>
        </TouchableOpacity>
        <Link to='/signup' component={Button} transparent>
          <Text style={styles.register}>
            ألا تمتلك حساباً؟ سجل الآن!
          </Text>
        </Link>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingRight: 60,
    paddingLeft: 60,
  },

  title: {
    color: '#528D95',
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: '#528D95',
  },

  textinput: {
    alignSelf: 'stretch',
    textAlign: 'right',
    height: 40,
    marginBottom: 30,
    color: '#528D95',
    borderBottomColor: '#528D95',
    borderBottomWidth: 1,
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

  register: {
    color: '#528D95',
    marginTop: 15,
  },
  }
)
