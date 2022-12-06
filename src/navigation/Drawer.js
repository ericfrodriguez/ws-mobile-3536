import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginForm from '../screens/LoginForm';
import Counter from '../screens/Counter';
import User from '../screens/User';

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNav.Navigator>
            <DrawerNav.Screen name="Login" component={LoginForm} />
            <DrawerNav.Screen name="Counter" component={Counter} />
            <DrawerNav.Screen name="User" component={User} />
        </DrawerNav.Navigator>
    );
}