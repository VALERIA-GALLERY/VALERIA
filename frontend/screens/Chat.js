import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { io } from 'socket.io-client';
import axios from 'axios';
import link from '../link';

function Chat() {
  const route = useRoute();
  const { chatRoom, currentid, foreignid } = route.params;
  const [msg, setMsg] = useState('');
  const [oldMsgs, setOldMsgs] = useState(chatRoom[1]);
  const [checkSocket, setCheckSocket] = useState(false);
  const [messageReceived, setMessageReceived] = useState('');
  const socket = io('http://192.168.1.14:8001');
  const scrollViewRef = useRef();

  useEffect(() => {
    socket.emit('startConversation', chatRoom[0][0].id);
    socket.on('connection', () => setCheckSocket(true));
  }, []);

  useEffect(() => {
    socket.on('receive', (data) => {
      setMessageReceived(data.msg);
      if (data.currentid !== currentid) {
        setOldMsgs((prevMsgs) => [
          ...prevMsgs,
          {
            sender: foreignid,
            content: data.msg,
            chat: chatRoom[0][0].id,
          },
        ]);
      }
    });
    console.log(messageReceived);
  }, [socket]);

  const newMsg = {
    sender: currentid,
    content: msg,
    chat: chatRoom[0][0].id,
  };

  const sendMsg = () => {
    setOldMsgs((prevMsgs) => [...prevMsgs, newMsg]);

    axios
      .post(`${link}/api/messages/msg`, newMsg)
      .then((res) => {
        const chatroom = chatRoom[0][0].id;
        socket.emit('message sent', { msg, chatroom, currentid });
        setMsg('');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Scroll to the bottom when oldMsgs change
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [oldMsgs]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.chatContainer}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {oldMsgs.map((e, i) => {
          if (e.sender === currentid) {
            return (
              <Text key={i} style={styles.current}>
                {e.content}
              </Text>
            );
          } else if (e.sender !== currentid) {
            return (
              <View key={i} style={styles.chat}>
                <Text>{e.content}</Text>
              </View>
            );
          }
        })}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          value={msg}
          onSubmitEditing={sendMsg}
          autoCorrect={true}
          onChangeText={(message) => setMsg(message)}
          placeholder="Type..."
          keyboardType="email-address"
          style={styles.textInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
  },
  chatContainer: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  current: {
    color: 'red',
  },
  chat: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Chat;
