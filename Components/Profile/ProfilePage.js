import React, { Component } from 'react';
import { Link } from 'react-router-native';
import {observer} from 'mobx-react';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Title } from 'native-base';

import SigninPage from '../Authentication/SigninPage.js';
import UserProfile from './UserProfile.js';
import Store from '../Store/Store.js';

export default observer(class ProfilePage extends Component {
  render() {
    console.log(Store.isLoggedIn);
    return Store.isLoggedIn ?
      <UserProfile />
    :
      <SigninPage />
  }
})
