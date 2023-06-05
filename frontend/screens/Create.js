import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

export default function Create() {
  return (
    <View style={styles.container}>
     <Text>add new post here </Text>
    </View>
   )
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F0EDE4',
     alignItems: 'center',
     justifyContent: 'center',
   },
 })