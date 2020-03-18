import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import User from '../components/User'
import * as firebase from 'firebase';
import { API_KEY } from 'react-native-dotenv'
import { AUTH_DOMAIN } from 'react-native-dotenv'
import { DATABASE_URL } from 'react-native-dotenv'
import { PROJECT_ID } from 'react-native-dotenv'
import { STORAGE_BUCKET } from 'react-native-dotenv'
import { MESSAGING_SENDER_ID } from 'react-native-dotenv'
import { APP_ID } from 'react-native-dotenv'
import { MEASUREMENT_ID } from 'react-native-dotenv'

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'Home' : 'Login');
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID,
      appId: APP_ID, 
      measurementId: MEASUREMENT_ID
    };
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default Auth
