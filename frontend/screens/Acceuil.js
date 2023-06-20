import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DetailsPost from './DetailsPost';
import Icon from 'react-native-vector-icons/Ionicons';
import link from '../link';

export default function Home({ route }) {
  const { user } = route.params;
  console.log(user.id)
  console.log('Welcome to home');
  const image = require('../assets/1686060014784.png');
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(`${link}/post/`)
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => <DetailsPost CurrentuserID={user.id} data={item}  />;

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/HD-wallpaper-iphoney-929-apple-blur-color-cool-iphone-live-new.jpg')} resizeMode="cover" style={styles.image} blurRadius={70} >
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.header}>
            <Text style={styles.title}>VALERIA</Text>
            <TouchableOpacity style={styles.notificationIcon}>
              <Icon name="notifications" size={30} color="#A47E53" />
            </TouchableOpacity>
          </View>
          <Text style={styles.feed}>Feed</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
        <View style={styles.bottomBar} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  safeArea: {
    flex: 1, 
    top:60
  },
  bottomBar: {
    height: 60, 
    backgroundColor: 'transparent', 
  },
  header: {
    height: 50,
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10, // Add some padding at the top if needed
    backgroundColor: 'transparent', // Make the header background transparent

  },
  title: {
    color: '#A47E53',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    marginRight: 'auto',
  },
  feed: {
    color: '#A47E53',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    marginLeft: 25,
    left:150
  },
  notificationIcon: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  image: {
    flex: 1,
    borderRadius: 0,
    overflow: 'hidden',
  },
});
