import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import User from '../components/User'
import * as firebase from 'firebase';

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
      apiKey: "AIzaSyAVbn4Mk7pxxWtVZU7WkXjCNLKTRnzh4MM",
      authDomain: "app-chat-project.firebaseapp.com",
      databaseURL: "https://app-chat-project.firebaseio.com",
      projectId: "app-chat-project",
      storageBucket: "app-chat-project.appspot.com",
      messagingSenderId: "285883566045",
      appId: "1:285883566045:web:e3847f3e890ad0eb605834",
      measurementId: "G-5TEQ03THR1"
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
