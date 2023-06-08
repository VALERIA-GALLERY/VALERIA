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
              <View style={styles.likecom}>
                <TouchableOpacity style={styles.like} onPress={handleLike}>
                  <Icon name="heart-outline" size={30} color="#fff" />
                  <Text style={styles.desc}>{likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.com} onPress={handleComment}>
                  <Icon name="chatbox-outline" size={30} color="#fff" />
                  <Text style={styles.desc}>{comments}</Text>
                </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    padding: 5,
    borderRadius: 10,
  },
  com: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
});




// import React from 'react';
// import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// export default function DetailsPost({ data, index }) {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <ScrollView>
//         <View key={index} style={styles.post}>
//           <ImageBackground source={{ uri: data.pic }} style={styles.image} resizeMode="stretch">
//             <View style={styles.postHeader}>
//               <Icon name="person-circle-outline" size={30} color="#fff" />
//               <View style={styles.user}>
//                 <Text style={styles.name}>{data.name}</Text>
//                 <Text style={styles.date}>{data.date_time}</Text>
//               </View>
//               <Icon name="heart-outline" size={30} color="#fff" />
//             </View>
//             <View style={styles.postFooter}>
//               <Text style={styles.desc}>{data.description}</Text>
//               <View style={styles.likecom}>
//                 <View style={styles.like}>
//                   <Icon name="heart-outline" size={30} color="#fff" />
//                   <Text style={styles.desc}>{data.likes}</Text>
//                 </View>
//                 <View style={styles.com}>
//                   <Icon name="chatbox-outline" size={30} color="#fff" />
//                   <Text style={styles.desc}>{data.comments}</Text>
//                 </View>
//               </View>
//             </View>
//           </ImageBackground>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

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
//       color:'#fff'
//   },
//   post: {
//       marginBottom: 20,
//   },
//   like: {
//       backgroundColor: 'rgba(255, 255, 255,0.4)',
     
//   },
//   com: {
//       backgroundColor: 'rgba(255, 255, 255, 0.4)',
     
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
//       top: 103.09,

//   },
//   likecom: {
//       flexDirection: 'row',
//       marginBottom: -2,
//       top: 12,
//   },
// });


