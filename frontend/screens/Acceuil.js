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

export default function Home() {
  console.log('Welcome to home');
  const image = { uri: 'https://i.pinimg.com/originals/50/b3/f3/50b3f3520f8c37cc54e7dd245b5ecf6d.jpg' };
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(`${link}/post/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => <DetailsPost data={item} />;

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView>
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
      </ImageBackground>
    </View>
  );
}

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
    flexDirection: 'row',
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
  },
  notificationIcon: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
