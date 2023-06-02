import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text colo>welcome </Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/qq.png')}/>
    </View>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
