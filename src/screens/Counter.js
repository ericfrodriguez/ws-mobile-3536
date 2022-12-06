import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text ,View } from 'react-native';

export default function Counter() {
    const [counter, setCounter] = useState(0)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewText}>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
        <Text style={{fontSize: 50, color: '#fff'}}>Holis</Text>
      </View>
      <StatusBar style="auto" />
      <Text style={{fontSize: 20}}>{counter}</Text>
      <Button onPress={() => setCounter(counter + 1)} title='Sumar'/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    viewText: {
      display: 'flex',
      backgroundColor: 'red',
      height: 'auto',
      justifyContent: 'center'
    }
  });