import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const savedComments = await AsyncStorage.getItem("comments");
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    };

    fetchComments();
  }, []);

  const handleAddComment = async () => {
    if (newComment.trim() !== "") {
      const addedComment = { comment: newComment };
      const updatedComments = [...comments, addedComment];
      setComments(updatedComments);
      await AsyncStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment("");
      setErrorMessage("");
    } else {
      setErrorMessage("Comment cannot be empty.");
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
            onPress={handleAddComment}>
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
    width: "90%",
    marginHorizontal: 20,
    marginTop: 20,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
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
    marginTop: 25, // half the icon's size
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row", // changed from column to row
    alignItems: "center", // align items vertically in the center
  },
  singleCommentText: {
    marginLeft: 15, // add some left margin to the text to prevent it from touching the icon
    fontSize: 15,
    color: "#000",
  },
  commentIcon: {
    position: "absolute",
    top: -27, // move it up by half its height
    left: 15, // move it to the left by half its width
  },
});

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// // import axios from "axios";
// // import link from '../link'

// export default function Comments({ route }) {
//   const { postId, user } = route.params;

//   const initialComments = [{comment: 'Initial comment 1'}, {comment: 'Initial comment 2'}];
//   const [comments, setComments] = useState(initialComments);
//   const [newComment, setNewComment] = useState('');

//   /*
//   useEffect(() => {
//     fetchComments();
//   }, []);
//   */

//   /*
//   const fetchComments = async () => {
//     try {
//       const timestamp = Date.now();
//       const response = await axios.get(`${link}/post/comments/${user}?timestamp=${timestamp}`);
//       setComments(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   */

//   const handleAddComment = () => {
//     const addedComment = { comment: newComment };
//     setComments((prevComments) => [...prevComments, addedComment]);
//     setNewComment('');
//   };

//   /*
//   const handleAddComment = async () => {
//     const addedComment = { user: user, post: postId, comment: newComment }
//     try {
//       const response = await axios.post(`${link}/post/comments/${postId}`, addedComment );
//       const newCommentData = response.data;
//       setComments((prevComments) => [...prevComments, newCommentData]);
//       setNewComment('');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   */

//   return (
//     <View style={styles.container}>
//       <View style={styles.contentContainer}>
//         <FlatList
//           data={comments}
//           renderItem={({ item }) => (
//             <View style={styles.commentContainer}>
//               <Text>{item.comment}</Text>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//         <View style={styles.commentContainer}>
//           <TextInput
//             style={styles.commentInput}
//             placeholder="Add a comment"
//             value={newComment}
//             onChangeText={setNewComment}
//           />
//           <TouchableOpacity style={styles.commentButton} title="Add Comment" onPress={handleAddComment}>
//             <Text style={styles.commentText}>Add a comment</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F0EDE4",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   contentContainer: {
//     flex: 1,
//     width: '90%',
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   commentContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 16,
//   },
//   commentInput: {
//     flex: 1,
//     height: 50,
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#A47E53",
//     textAlign: "center",
//     margin: 5,
//     marginBottom: 15,
//   },
//   commentButton: {
//     backgroundColor: "#B4966A",
//     padding: 10,
//     borderRadius: 10,
//     width: 100,
//     height: 40,
//     margin: 10,
//   },
//   commentText: {
//     fontSize: 11,
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
// });
