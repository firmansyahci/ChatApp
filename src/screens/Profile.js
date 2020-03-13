import React, { Component } from 'react'
import { Text, View, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import User from '../components/User'
import * as firebase from 'firebase';
import styles from '../public/styles/styles';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
    state = {
        name: User.name
    }

    changeName = async () => {
        if (this.state.name.length < 3) {
            Alert.alert('Error', 'Please enter valid name');
        } else if (User.name !== this.state.name) {
            firebase.database().ref('users').child(User.phone).set({name: this.state.name})
            User.name = this.state.name;
            Alert.alert('Success', 'Name changed successful.')
        }
    }

    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
      }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize: 20}}>
                    {User.phone}
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleChange('name')}
                />
                <TouchableOpacity onPress={this.changeName}>
                    <Text style={styles.btnText}>Change Name</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.logout}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}