// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import axios from 'axios';

// const UserPosts = ({ userId }) => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get(`/posts/${userId}`);
//         setPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setError('Error retrieving user posts');
//         setLoading(false);
//       }
//     };

//     fetchUserPosts();
//   }, [userId]);

//   if (loading) {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       {posts.map(post => (
//         <Text key={post.id}>{post.title}</Text>
//       ))}
//     </View>
//   );
// };

// export default UserPosts;
