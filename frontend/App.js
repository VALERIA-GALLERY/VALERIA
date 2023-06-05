import React from 'react';
import ProfileComponent from './screens/profile/profile';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./screens/profile1"

import Login from './screens/login/login';
import SignUp from './screens/signup/signUp';
import SignUp2 from './screens/signup/signup2';
import Tabs from './navigation/TabNav';
import  Home from './screens/Acceuil'
import TabNav from './navigation/TabNav'


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (

    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Signup" component={SignUp} options={{ title: 'SignUp',headerShown: false  }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login',headerShown: false }} />
        <Stack.Screen name="SignUp2" component={SignUp2} options={{ title: 'SignUp2',headerShown: false }} />
        {/* <Stack.Screen name="ProfileComponent" component={Profile} options={{ title: 'ProfileComponent',headerShown: false }} /> */}
  
        <Stack.Screen name="Acceuil" component={Home} options={{ title: 'Acceuil',headerShown: false  }} />
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false  }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text color="black">Hello, world!</Text> */}
      <StatusBar styles="auto" />
      <Image source={require('./assets/qq.png')} />
      <Button  title="Acceuil " onPress={() => navigation.navigate('TabNav')} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  button:{
    color:'#5B3D00'
  }
});