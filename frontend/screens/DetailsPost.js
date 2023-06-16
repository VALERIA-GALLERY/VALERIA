import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function DetailsPost({ data }) {
  const navigation = useNavigation();
  const [likes, setLikes] = useState(data.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    navigation.navigate('Comments', { postId: 3 });
  };

  return (
    <View style={styles.post}>
      <ImageBackground source={{ uri: data.pic[0] }} style={styles.image} resizeMode="stretch">
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
          {/* <Text style={styles.desc}>{comments}</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default DetailsPost;
