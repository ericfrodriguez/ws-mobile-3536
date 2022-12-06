import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from '../screens/LoginForm';
import Counter from '../screens/Counter';


const StackNav = createNativeStackNavigator();

export default function Stack() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen name="Login" component={LoginForm} />
            <StackNav.Screen name="Counter" component={Counter} />
        </StackNav.Navigator>
    )
}