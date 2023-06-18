import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, FlatList, Dimensions, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import link from '../link';
import axios from 'axios';
import Subscription from './Subscription';
import { MaterialIcons } from '@expo/vector-icons';


const Profile = ({ route }) => {
  const { user } = route.params;

  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  const [premiem, setPremiem]= useState(0)


  const changePremium=()=>{
    user.premium=true
    setPremiem(Math.random() * 3)
    console.log(user.premium,'pass')
  }


const changePremium=()=>{
  user.premium=true
  setPremiem(Math.random() * 3)
  console.log(user.premium,'pass')
}
  useEffect(() => {
    axios
      .get(`${link}/userposts/user/${user.id}`)
      .then((res) => {
        console.log(res.data, "res.data");
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [premiem]);

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  const renderPost = ({ item }) => (
    <Image source={{ uri: item.pic[0] }} style={styles.postImage}  />
  );

  return (
    <ImageBackground source={{ uri: user.profilepic }} resizeMode="cover" style={styles.backgroundImage} blurRadius={70} >
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: user.profilepic }} style={styles.profileImage} />
          </View>

          <Text style={styles.username}>{user.username}</Text>


          {user.premium === false ? (
            <Subscription premium={changePremium} id={user.id} />
          ) : (
            <MaterialIcons style={styles.icon} name="verified" size={24} color="#d4af37" />
          )}

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
              <Text style={styles.infoLabel}>Following</Text>
              <Text style={styles.infoText}>{user.follows.length}</Text>
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
              <Feather name="menu" size={22} color="black" />
            </TouchableOpacity>
          </View>


          <FlatList
            data={posts}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderPost}
            contentContainerStyle={styles.postContainer}
          />

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
  },
  profileContainer: {
    padding: 16,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 11,
    marginTop: 51,
  },
  profileImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  infoLabel: {
    fontSize: 12,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f0ede4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: -200,
    left: 330,
  },
  editProfileButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3897f0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postContainer: {
    alignItems: 'center',
    marginTop: 8,
    paddingBottom: 24,
  },
  postImage: {
    width: (windowWidth - 4) / 3,
    height: (windowWidth - 4) / 3,
    resizeMode: 'cover',
    margin: 1,
  },

  icon: {
    left: 180,
    top: -10,
  },
  image: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },

});

export default Profile;
