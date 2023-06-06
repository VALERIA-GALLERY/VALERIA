import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, PixelRatio } from 'react-native';
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
  const userData = {
    username: "ahmed",
    followers: ["sami", "samir"],
    follows: ["sami", "samir"],
    posts: "pic"
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async (id) => {
  //   try {
  //     const response = await fetch(`http://192.168.75.4:9001/user/${id}`);
  //     const jsonData = await response.json();
  //     setUserData(jsonData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {userData && (
          <React.Fragment>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: userData.profilePic }} style={styles.profileImage} />
            </View>
            
            <Text style={styles.username}>{userData.username}</Text>

            
            <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
                <Text style={styles.infoLabel}> Posts </Text>
                <Text style={styles.infoText}>{userData.posts.length}</Text>

              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}> Followers </Text>
                <Text style={styles.infoText}>{userData.followers.length}</Text>

              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Follows </Text>
                <Text style={styles.infoText}>{userData.follows.length}</Text>
              </View>
            </View>

       <View style={styles.form}>
              <View style={styles.gallery}>
                   <TouchableOpacity onPress={handlePress} style={[styles.button, styles.galleryButton]}>
                   <Text style={styles.buttonText}>Gallery</Text>
                   </TouchableOpacity>
            </View>
               <View style={styles.save}>
                   <TouchableOpacity onPress={handlePress} style={[styles.button, styles.favoritesButton]}>
                   <Text style={styles.buttonText}>Add to Favorites</Text>
                   </TouchableOpacity>
            </View>
            </View>

          </React.Fragment>
        )}
      </View>
      {/* <Text style={styles.title}>Profile</Text> */}
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
form:{
 top:95,
},
gallery:{
  right:110,
},
save:{
 top:-49,
 left:110,
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
    right:25,
  },
  infoItem: {
    marginHorizontal: 80,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
