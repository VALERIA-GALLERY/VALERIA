
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const Profile = () => {
  // const [userData, setUserData] = useState(null);
   const userData={username : "ahmed",followers:["sami","samir"],follows:["sami","samir"],posts:"pic"}


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`http://localhost:9001/user/${id}`);
      const jsonData = await response.json();
      setUserData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

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
                <Text style={styles.infoText}>{userData.followers.length}</Text>
                <Text style={styles.infoLabel}>Followers</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>{userData.follows.length}</Text>
                <Text style={styles.infoLabel}>Following</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>{userData.posts.length}</Text>
                <Text style={styles.infoLabel}>Posts</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </View>
      <Text style={styles.title}>Hello, Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 10,
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
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoLabel: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    backgroundColor: '#B4966A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;


