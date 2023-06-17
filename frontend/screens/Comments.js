import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon component
import axios from "axios";
import link from '../link';

export default function Comments({ route }) {
  const { postId, user } = route.params;

  const initialComments = [{ comment: 'Initial comment 1' }, { comment: 'Initial comment 2' }];
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const timestamp = Date.now();
      const response = await axios.get(`${link}/post/${postId}/comments/?timestamp=${timestamp}`);
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() === '') {
      return;
    }

    const addedComment = { user: user, post: postId, comment: newComment };
    try {
      const response = await axios.post(`${link}/post/${postId}/comments/`, addedComment);
      const newCommentData = response.data;
      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View style={styles.singleCommentContainer}>
              <Icon
                name='person-circle-outline'
                size={25}
                color='#B4966A'
                style={styles.commentIcon}
              />
              <Text style={styles.singleCommentText}>{item.comment}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder='Add a comment'
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity
            style={styles.commentButton}
            onPress={handleAddComment}
          >
            <Text style={styles.commentText}>Add a comment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EDE4",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 1,
    width: '90%',
    marginHorizontal: 20,
    marginTop: 20,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  commentInput: {
    flex: 1,
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: "#A47E53",
    textAlign: "center",
    margin: 5,
    marginBottom: 15,
  },
  commentButton: {
    backgroundColor: "#B4966A",
    padding: 10,
    borderRadius: 10,
    width: 100,
    height: 40,
    margin: 10,
  },
  commentText: {
    fontSize: 11,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  singleCommentContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row", 
    alignItems: "center", 
  },
  singleCommentText: {
    marginLeft: 15, 
    fontSize: 15,
    color: "#000",
  },
  commentIcon: {
    position: "absolute",
    top: -27, 
    left: 10, 
  },
});
