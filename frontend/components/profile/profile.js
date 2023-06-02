import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

const MyComponent = () => {
  const [userData, setUserData] = useState(null);

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
    }

  return (
    <View>
      <Text>Hello, profile</Text>
      {userData && (
        <View>
          <Text>Username: {userData.username}</Text>
          <Image source={{ uri: userData.profilePic }} style={{ width: 100, height: 100 }} />
          <Text>Followers: {userData.followers.length}</Text>
          <Text>Follows: {userData.follows.length}</Text>
          <Text>posts: {userData.posts.length}</Text>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
         <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#3897f0',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });


export default MyComponent;
