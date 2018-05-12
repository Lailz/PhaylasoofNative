import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';
import { AsyncStorage, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Thumbnail, Title } from 'native-base';

import styles from '../../styles.js';
import Store from '../Store/Store.js';

export default observer(class UserProfile extends Component {
  render() {
    console.log(Store.profile);
    return (
        <View style={styles.authcontainer}>
          <Text style={styles.authtitle}>حسابك</Text>
          <Image source={{uri: Store.profile.image}} style={styles.profileimage}/>
          <Text style={styles.profiletext}>اسم المستخدم: {Store.currentUser}</Text>
          <Text style={styles.profiletext}>الاسم: {Store.profile.first_name} {Store.profile.last_name}</Text>
          <Text style={styles.profiletext}>البريد الإلكتروني: {Store.profile.email}</Text>
          <Text style={styles.profiletext}>السيرة الذاتية: {Store.profile.biography}</Text>
          <Text style={styles.follow}>{Store.profile.followers_number}  اللي يتابعوني</Text>
          <Text style={styles.follow}>{Store.profile.followings_number}  اللي أتابعهم</Text>

          <TouchableOpacity style={styles.authbuttonstyle} onPress={() => Store.logout()}>
            <Text style={styles.authbuttontext}>سجل خروجك</Text>
          </TouchableOpacity>
        </View>
      )
    }
  })
