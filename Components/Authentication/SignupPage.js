import {observer} from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { Button, Title } from 'native-base';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class SignupPage extends Component {
  render() {
    return (
        <View style={styles.authcontainer}>
          <Text style={styles.authtitle}>إنشاء حساب جديد</Text>
          <TextInput style={styles.authtextinput} placeholder="اسم المستخدم" placeholderTextColor='#A6AEC1'
                     value={Store.username}
                     onChangeText={(e) => {Store.username = e}}/>
          <TextInput style={styles.authtextinput} placeholder="الاسم الأول (اختياري)" placeholderTextColor='#A6AEC1'
                     value={Store.firstname}
                     onChangeText={(e) => {Store.firstname = e}} />
          <TextInput style={styles.authtextinput} placeholder="اسم العائلة (اختياري)" placeholderTextColor='#A6AEC1'
                     value={Store.lastname}
                     onChangeText={(e) => {Store.lastname = e}} />
          <TextInput style={styles.authtextinput} placeholder="البريد الإلكتروني (اختياري)" placeholderTextColor='#A6AEC1'
                     value={Store.email}
                     onChangeText={(e) => {Store.email = e}} />
          <TextInput style={styles.authtextinput} placeholder="كلمة السر" placeholderTextColor='#A6AEC1' secureTextEntry={true}
                     value={Store.password}
                     onChangeText={(e) => {Store.password = e}} />
          <TouchableOpacity style={styles.authbuttonstyle} onPress={() => Store.register()}>
            <Text style={styles.authbuttontext}>أنشئ حسابك</Text>
          </TouchableOpacity>
          <Link to='./signin' component={Button} transparent>
            <Text style={styles.authother}>
              ألديك حساب؟ سجل دخولك!
            </Text>
          </Link>
        </View>
    );
  }
})
