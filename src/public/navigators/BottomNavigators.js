import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Location from '../../screens/Location';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chats" component={Home} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default MyTabs;