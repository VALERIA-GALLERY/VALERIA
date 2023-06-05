import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './screens/login/login';
import SignUp from './screens/signup/signUp';
import SignUp2 from './screens/signup/signup2';
import  Acceuil from './screens/Acceuil'
import TabNav from './navigation/TabNav'
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <>
      {/* <Text colo>hello world!</Text> */}
      {/* <StatusBar style="auto" />
      <Image source={require('./assets/qq.png')}/> */}
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Acceuil" component={Acceuil} options={{ title: 'Acceuil',headerShown: false  }} />
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false  }} />

      </Stack.Navigator>
    </NavigationContainer>
     
   
    </>
  );
}
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text color="black">Hello, world!</Text> */}
      <StatusBar styles="auto" />
      <Image source={require('./assets/qq.png')} />
      <Button  title="Acceuil " onPress={() => navigation.navigate('TabNav',{name:'Acceuil'})} style={styles.button} />
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
