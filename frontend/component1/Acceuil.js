import React from 'react';
import {ImageBackground,
  SafeAreaView,
   ScrollView,
    StatusBar,
     StyleSheet, 
     Text,
      Image,
       View,
       TouchableOpacity} from 'react-native';

const image={uri:'https://i.pinimg.com/originals/50/b3/f3/50b3f3520f8c37cc54e7dd245b5ecf6d.jpg'}

const Home = () => {
  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>VALERIA</Text>
      </View>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  title: {
    color:'#A47E53',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight:24
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
 
});

export default Home
