=import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import link from '../link';
import axios from 'axios';

const Profile = ({ route }) => {
  const { user } = route.params;

  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${link}/userposts/user/q5O9DkOzVqXXmurC9lWJCgfiPkH2`)
      .then((res) => {
        console.log(res.data, "res.data");
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {user && (
          <>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: user.profilepic }} style={styles.profileImage} />
            </View>

            <Text style={styles.username}>{user.username}</Text>

            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Posts</Text>
                <Text style={styles.infoText}>{posts.length}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Followers</Text>
                <Text style={styles.infoText}>{user.followers.length}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Follows</Text>
                <Text style={styles.infoText}>{user.follows.length}</Text>
              </View>
            </View>

            <View style={styles.form}>
              <TouchableOpacity onPress={handlePress} style={[styles.button, styles.galleryButton]}>
                <Text style={styles.buttonText}>Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePress} style={[styles.button, styles.favoritesButton]}>
                <Text style={styles.buttonText}>Add to Favorites</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {posts.map((post, index) =>{ 
          console.log(post.pic[0])
          return(
          
          <Image key={index} source={{ uri: post.pic[0] }} style={styles.postImage} />
        )})}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#DAE0E6',
    overflow: 'hidden',
    marginBottom: 10,
  },
  form: {
    marginTop: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 40,
    fontWeight: '600',
    marginTop: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    backgroundColor: '#3890',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  galleryButton: {
    backgroundColor: '#E1306C',
  },
  favoritesButton: {
    backgroundColor: '#262626',
  },
  postImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default Profile;
