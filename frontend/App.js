import React from 'react';
import ProfileComponent from './screens/profile/profile';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/login';
import SignUp from './screens/signup/signUp';
import SignUp2 from './screens/signup/signup2';



export default function App() {
  return (
    <View style={styles.container}>
    <Text color="black">profile Screen</Text>
<ProfileComponent/>
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
