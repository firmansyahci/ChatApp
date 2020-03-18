import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Location from '../../screens/Location';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={Home} options={{
                tabBarLabel: 'Chats',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="comment-alt" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Location" component={Location} options={{
                tabBarLabel: 'Location',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="map-marker-alt" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user-circle" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default MyTabs;