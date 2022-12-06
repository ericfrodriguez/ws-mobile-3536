import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginForm(props) {


  const handleSubmit = () => {
    let user = {
      name: 'Eric',
      lastName: 'Rodriguez',
      email: 'feric.rodriguez@gmail.com'
    }

    console.log('Ingresando...');

    AsyncStorage.setItem('user', JSON.stringify(user))
      .catch(err => console.log(err))
  }

  const navigateCounter = () => {
    props.navigation.navigate('Counter')
  }


  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Contraseña' />
      <Button onPress={handleSubmit} title='Enviar' />
      <Button onPress={navigateCounter} title='To Counter' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})