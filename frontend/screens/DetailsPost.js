import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function DetailsPost({ data, index }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View key={index} style={styles.post}>
          <ImageBackground source={{ uri: data.pic }} style={styles.image} resizeMode="stretch">
            <View style={styles.postHeader}>
              <Icon name="person-circle-outline" size={30} color="#fff" />
              <View style={styles.user}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.date}>{data.date_time}</Text>
              </View>
              <Icon name="placeholder" size={30} color="#fff" />
            </View>
            <View style={styles.postFooter}>
              <Text style={styles.desc}>{data.description}</Text>
              <View style={styles.likecom}>
                <View style={styles.like}>
                  <Icon name="heart-outline" size={30} color="#fff" />
                  <Text style={styles.desc}>{data.likes}</Text>
                </View>
                <View style={styles.com}>
                  <Icon name="chatbox-outline" size={30} color="#fff" />
                  <Text style={styles.desc}>{data.comments}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  user: {
    position: 'absolute',
    width: 150.47,
    height: 70.94,
    left: 13.12,
    top: 13.58,
  },
  name: {
    color: '#fff',
  },
  date: {
    color: '#fff',
  },
  desc: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
  },
  postFooter: {
    padding: 9,
    position: 'absolute',
    width: 262.4,
    height: 32.98,
    left: 13,
    top: 103.09,
  },
  likecom: {
    flexDirection: 'row',
    marginBottom: -2,
    top: 12,
  },
  like: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  com: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});
