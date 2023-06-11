import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const CommentCard = ({ comment }) => {
  return (
    <View style={styles.commentCard}>
      <Text>{comment}</Text>
    </View>
  );
};

export default function Comments({ route }) {
  const { postId } = route.params;
  console.log(postId);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentCard comment={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment"
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity style={styles.commentButton} title="Add Comment" onPress={handleAddComment}>
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
  commentCard: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
