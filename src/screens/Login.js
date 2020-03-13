import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import User from '../components/User'
import styles from '../public/styles/styles'
import * as firebase from 'firebase';

export default class Login extends Component {
    state = {
      phone: '',
      name: '',
    }
  
    handleChange = key => val => {
      this.setState({ [key]: val })
    }
  
    submitForm = async () => {
      if (this.state.phone.length < 10) {
        Alert.alert('Error', 'Wrong phone number')
      } else if (this.state.name.length < 3) {
        Alert.alert('Error', 'Wrong name')
      } else {
        await AsyncStorage.setItem('userPhone', this.state.phone);
        User.phone = this.state.phone;
        firebase.database().ref('users/' + User.phone).set({name: this.state.name})
        this.props.navigation.navigate('Home');
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          <TextInput
            placeholder="Phone number"
            style={styles.input}
            value={this.state.phone}
            onChangeText={this.handleChange('phone')}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={this.state.name}
            onChangeText={this.handleChange('name')}
          />
          <TouchableOpacity onPress={this.submitForm}>
            <Text style={styles.btnText}>Enter</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }