import React, { Component } from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Auth from '../../screens/Auth';
import Chat from '../../screens/Chat';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Profile from '../../screens/Profile';
import MyTabs from './BottomNavigators';

const Stack = createStackNavigator();
const MainNavigators = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Home" component={MyTabs} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Chat" component={Chat} options={({ route }) => ({ title: route.params.name })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigators