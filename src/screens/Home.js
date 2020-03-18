import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import User from '../components/User'
import styles from '../public/styles/styles'
import firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler'

export default class Home extends Component {

    state = {
        users: [],
        dbRef: firebase.database().ref('users'),
    }

    componentDidMount() {       
        this.state.dbRef.on('child_added', (val) => {
            let person = val.val();
            person.phone = val.key;
            if (person.phone === User.phone) {
                User.name = person.name
            } else {
                this.setState((prevState) => {
                    return {
                        users: [...prevState.users, person]
                    }
                })
            }         
        })
    }

    componentWillUnmount() {
        this.state.dbRef.off()
    }

    renderRow = ({item}) => {
        return (
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chat', item)}
            style={{padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1}}>
               <Text style={{fontSize: 20}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView> 
                <FlatList 
                    data={this.state.users}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.phone}
                >

                </FlatList>
            </SafeAreaView>
        )
    }
}