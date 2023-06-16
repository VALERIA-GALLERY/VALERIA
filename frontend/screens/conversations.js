import React, { useEffect, useState } from "react";
import link from "../link";
import axios from "axios";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

function Conversations({ route }) {
  const navigation = useNavigation();
  const { user } = route.params;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    axios.get(`${link}/userss`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  };

  const startConversation = (user1id, user2id) => {
    setLoading(true);
    axios.post(`${link}/conversation/start`, { user2: user1id, user1: user2id })
      .then(res => {
        setLoading(false);
        navigation.navigate("Chat", { chatRoom: res.data, currentid: user.id, foreignid: user2id });
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={'Getting chats...'}
        textStyle={styles.spinnerTextStyle}
      />
      <Text style={styles.title}>Conversations</Text>
      <ScrollView>
        {
          users.map((oneUser, i) => (
            <TouchableOpacity key={i} style={styles.userContainer} onPress={() => startConversation(user.id, oneUser.id)}>
              <Image source={{ uri: oneUser.profilepic }} fadeDuration={0} style={styles.pic} />
              <Text style={styles.username}>{oneUser.username}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
   //  alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingVertical: 50,
    paddingHorizontal: 20,
  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  pic: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  username: {
    fontSize: 16,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default Conversations;
