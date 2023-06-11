import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Comments from './Comments';


export default function DetailsPost({ data, index }) {
  const navigation = useNavigation();
  const [likes, setLikes] = useState(data.likes);
  const [comments, setComments] = useState(data.comments);

  const handleLike = () => {
    // Increment the number of likes by 1
    setLikes(likes + 1);
  };

  const handleComment = () => {
    // You can navigate to the comment section or implement your own logic for handling comments
   
    navigation.navigate('Comments', { postId: 3 });
  };

  
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
              <Icon  size={30} color="#fff" />
            </View>
            <View style={styles.postFooter}>
              <Text style={styles.desc}>{data.description}</Text>
              
            </View>
          </ImageBackground>
          <View style={styles.likecom}>
                <TouchableOpacity style={styles.like} onPress={handleLike}>
                  <Icon name="heart-outline" size={30} color="#A47E53" />
                  <Text style={styles.desc}>{likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.com} onPress={handleComment}>
                  <Icon name="chatbox-outline" size={30} color="#A47E53" />
                  <Text style={styles.desc}>{comments}</Text>
                </TouchableOpacity>
              </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


// const styles = StyleSheet.create({
//   container: {
//       flex: 0,
//       // order: 0,
//       flex_grow: 0,
//       flex_direction: 'column',
//       align_items: 'flex - start',
//       left: 35,
//       top: 57.91,
//       top: -37.91,

//   },
//   header: {
//       height: 50,
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderBottomColor: '#ddd',
//       borderBottomWidth: 1,
//   },
//   title: {
//       fontSize: 20,
//       fontWeight: 'bold',
//   },
//   user: {
//       position: ' absolute',
//       width: 150.47,
//       height: 70.94,
//       left: 13.12,
//       top: 13.58,
//   },
//   name:{
//       color:'#fff'
//   },
//   date:{
//       color:'#fff'
//   },
//   desc:{
//       color:'#A47E53'
//   },
//   post: {
//       marginBottom: 50,
//   },
//   like: {
//       backgroundColor: '#fff',
     
//   },
//   com: {
//       backgroundColor: '#fff',
//       marginHorizontal:52,

//   },
//   postHeader: {
//       flexDirection: 'row',
//       padding: 10,
//       alignItems: 'center',
//   },
//   image: {
//       width: 340,
//       height: 288.09,
//       // width: '100%',
//       // height: 300,
//       borderRadius: 20, // You can change this value as per your need
//       overflow: 'hidden',
//   },
//   postFooter: {
//       padding: 9,
//       position: ' absolute',
//       width: 262.4,
//       height: 32.98,
//       left: 13,
//       top: 153.09,

//   },
//   likecom: {
//        
 //   justifyContent: 'space-around',
   // padding: 10,
 //   backgroundColor: '#f8f8f8',

//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
      overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  date: {
    color: '#fff',
    marginLeft: 10,
  },
  postFooter: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    width: '100%',
  },
  desc: {
    color: '#fff',
  },
  likecom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  com: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});











