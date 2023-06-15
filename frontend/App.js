import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePost from './screens/Create';
import Login from './screens/login/login';
import SignUp from './screens/signup/signUp';
import SignUp2 from './screens/signup/signup2';
import  Home from './screens/Acceuil'
import TabNav from './navigation/TabNav'
// import Comments from './screens/Comments';
import W1 from './screens/welcomeScreens/Welcome1';
import W2 from './screens/welcomeScreens/Welcome2';
import W3 from './screens/welcomeScreens/Welcome3';
import Conversations from './screens/conversations';
import Chat from './screens/Chat';
import Onepost from './screens/Onepost';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
// 
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome', headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUp} options={{ title: 'SignUp',headerShown: false  }} />
        <Stack.Screen name="W1" component={W1} options={{ title: 'welcome',headerShown: false  }} />
        <Stack.Screen name="W2" component={W2} options={{ title: 'welcome',headerShown: false  }} />
        <Stack.Screen name="W3" component={W3} options={{ title: 'welcome',headerShown: false  }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login',headerShown: false }} />
        <Stack.Screen name="SignUp2" component={SignUp2} options={{ title: 'SignUp2',headerShown: false }} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{ title: 'ProfileComponent',headerShown: false }} />
        <Stack.Screen name="conversations" component={Conversations} options={{ title: 'conversations',headerShown: false  }} />
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false  }} />
        <Stack.Screen name="Acceuil" component={Home} options={{ title: 'Acceuil',headerShown: false  }} />
        {/* <Stack.Screen name="Comments" component={Comments} /> */}
        <Stack.Screen name="Chat" component={Chat} options={{ title: 'Acceuil',headerShown: false  }} />
        <Stack.Screen name="OnePost" component={Onepost} options={{ title: '',headerShown: true , }} />

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
      <Image style={styles.img} source={require('./assets/qq.png')} />
      {/* <Button  title="Welcole " onPress={() => navigation.navigate('CreatePost')} style={styles.button} /> */}

      <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('W1')} >
        <Text style={styles.buttonText2}>Welcome</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>© Valeria 2023</Text>
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
  },
  buttonText2: {
    fontSize: 20,
    color: '#FFFFFF',
    left: 110,
    top: 5,
  },
button2: {
    backgroundColor: '#B4966A',
    padding: 10,
    borderRadius: 55,
    marginTop: 50,
    width: 327,
    height: 55,
    top: 130,
  },  
  footer: {
    
    fontSize: 13,
    color: '#A47E53',
    top: 200,
  },
  img:{
    width:250,
    height:90
  }
});