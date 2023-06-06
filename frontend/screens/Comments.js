// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList } from 'react-native';

// export default function Comments({ route }) {
//   const { postId } = route.params;
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   const handleAddComment = () => {
//     if (newComment.trim() !== '') {
//       setComments((prevComments) => [...prevComments, newComment]);
//       setNewComment('');
//     }
//   };

//   return (
//     <View>
//       <Text>Comments for Post {postId}</Text>
//       <FlatList
//         data={comments}
//         renderItem={({ item }) => <Text>{item}</Text>}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <TextInput
//         placeholder="Add a comment"
//         value={newComment}
//         onChangeText={setNewComment}
//       />
//       <Button title="Add Comment" onPress={handleAddComment} />
//     </View>
//   );
// }
