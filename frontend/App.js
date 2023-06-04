import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ProfileComponent from './components/profile/profile';



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
