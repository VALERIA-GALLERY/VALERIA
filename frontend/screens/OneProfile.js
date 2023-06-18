import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Button, FlatList, Dimensions, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import link from '../link';
import axios from 'axios';

const OneProfile = ({ route }) => {
  const userid = route.params;
  const { user } = route.params;

  const profilepic = route.params.userid.users.profilepic;
  const username = route.params.userid.users.username;
  const [posts, setPosts] = useState([]);
  const [follow, setFollow] = useState({current_user_ids: [], foreign_user_ids: []})
  const [isFollowed, setFollowed] = useState(false);
  console.log(route.params, 85555555)
  console.log("ena user");

  useEffect(() => {
    axios
      .get(`${link}/post/${userid}`)
      .then((res) => {
        console.log(res.data, "res.data");
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderPost = ({ item }) => (
    <Image source={{ uri: item.pic[0] }} style={styles.postImage} />
  );

  const handlefollow=async()=>{
   try {
    const res= await axios.post(`${link}/follow/addfollow`,
    setFollow({
      current_user_ids: res.follow.current_user_ids,
      foreign_user_ids: res.follow.foreign_user_ids
    })
    )
    if (isFollowed) {
      setFollow(follow - 1);
      setFollowed(false);
    } else {
      setFollow(follow + 1);
      setFollowed(true);
    }
    setFollow(res.follow)

   }catch(err) {
    console.log(err)
  }
  }
console.log(follow.current_user_ids)

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: profilepic }} style={styles.profileImage} />
        </View>

        <Text style={styles.username}>{username}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Posts</Text>
            <Text style={styles.infoText}>{posts.length}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel} >Followers</Text>
            <Text style={styles.infoText}>{follow.current_user_ids.length} </Text>
  
          </View>
          <View style={styles.infoItem} >
            <Pressable  >
              <Text style={styles.infoLabel} >Following</Text>
              <Text style={styles.infoText}>{follow.foreign_user_ids.length} </Text>

            </Pressable>
          </View>
        </View>
        <View>
        <TouchableOpacity
        style={[styles.buttonfollow, isFollowed ? styles.followedButton : styles.unfollowedButton]}
         onPress={handlefollow}>
        <Text style={styles.infoText}>{isFollowed ? 'Unfollow' : 'Follow'}</Text>
      </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
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
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ede4',
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
  buttonfollow: {
    backgroundColor: '#d6c898',
    borderRadius: 5,
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    left:85,
  },
  followedButton: {
    backgroundColor: '#b4966a', 
  },
  unfollowedButton: {
    backgroundColor: '#d6c898', 
  },
});

export default OneProfile;
