import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';
import Store from '../Store/Store.js';

export default observer(class SignupPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>أنشئ حساباً جديداً</Text>
          <TextInput style={styles.textinput} placeholder="اسم المستخدم" placeholderTextColor='#739B93'
                     value={Store.username}
                     onChangeText={(e) => {Store.username = e}}/>
          <TextInput style={styles.textinput} placeholder="الاسم الأول (اختياري)" placeholderTextColor='#739B93'
                     value={Store.firstname}
                     onChangeText={(e) => {Store.firstname = e}} />
          <TextInput style={styles.textinput} placeholder="اسم العائلة (اختياري)" placeholderTextColor='#739B93'
                     value={Store.lastname}
                     onChangeText={(e) => {Store.lastname = e}} />
          <TextInput style={styles.textinput} placeholder="البريد الإلكتروني (اختياري)" placeholderTextColor='#739B93'
                     value={Store.email}
                     onChangeText={(e) => {Store.email = e}} />
          <TextInput style={styles.textinput} placeholder="كلمة السر" placeholderTextColor='#739B93' secureTextEntry={true}
                     value={Store.password}
                     onChangeText={(e) => {Store.password = e}} />
          <TouchableOpacity style={styles.buttonstyle} onPress={() => Store.register()}>
            <Text style={styles.buttontext}>سجل</Text>
          </TouchableOpacity>
          <Link to='./signin' component={Button} transparent>
            <Text style={styles.signin}>
              ألديك حساب؟ سجل دخولك!
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
    backgroundColor: 'white',
    alignItems: 'center',
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
    marginBottom: 20,
  },

  textinput: {
    alignSelf: 'stretch',
    textAlign: 'right',
    height: 40,
    marginBottom: 25,
    color: '#528D95',
    borderBottomColor: '#528D95',
    borderBottomWidth: 1,
  },

  buttonstyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#528D95',
    marginTop: 25,
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
    textAlign: 'center',
    marginTop: 15,
  },
  }
)
