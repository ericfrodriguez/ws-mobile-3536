import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import Drawer from './src/navigation/Drawer';




export default function App() {

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}

