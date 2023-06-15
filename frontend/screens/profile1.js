// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, PixelRatio } from 'react-native';
// import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRoute } from '@react-navigation/native';


// const Profile = () => {
  
//   // const route = useRoute();
//   // const { Data } = route.params;
//   // const [userData,setuserData]=useState('')


//   const userData = {
//     username: "rbk.tn", 
//     followers: ["sami", "hello"],
//     follows: ["sami", "hi"],
//     posts: ["picojsf","dfd","dvd","90"]
//   };

  
//   const [userPosts, setUserPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const response = await axios.get('{IPADRESSE}:9001/posts'); // Replace with your API endpoint
//         setUserPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         Alert.alert('Error', 'Failed to fetch user posts.');
//       }
//     };

//     fetchUserPosts();
//   }, []);

//   if (loading) {
//     return (
//       <View>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.config}>
//           <Feather name="arrow-left" size={35} color={"black"} />
//        </View>

//        <View style={styles.menu}>
//           <Feather name="menu" size={35} color="black" />
//        </View>

//       <View style={styles.profileContainer}>
      
//         {userData && (
//           <React.Fragment>
//             <View style={styles.profileImageContainer}>
//               <Image source={{ uri: userData.profilePic }} style={styles.profileImage} />
//             </View>
//             <Text style={styles.username}>{userData.username}</Text>
//             <Text style={styles.firstname}>{userData.firstname}</Text>
  
//       <View style={styles.infoContainer}>
//             <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}> Posts </Text>
//                 <Text style={styles.infoText}>{userData.posts.length}</Text>

//               </View>
//             <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}> Followers </Text>
//                 <Text style={styles.infoText}>{userData.followers.length}</Text>

//             </View>
//               <View style={styles.infoItem}>
//                 <Text style={styles.infoLabel}>Follows </Text>
//                 <Text style={styles.infoText}>{userData.follows.length}</Text>
//               </View>
//        </View>

//        <View style={styles.form}>
//           <View style={styles.gallery}>
//                    {/* <TouchableOpacity onPress={handlePress} style={[styles.button, styles.galleryButton]}>
//                    <Text style={styles.buttonText}>Gallery</Text>
//                    </TouchableOpacity> */}
//                    <Feather name="image" size={35} color={"black"} />
//           </View>
//                <View style={styles.save}>
//                    {/* <TouchableOpacity onPress={handlePress} style={[styles.button, styles.favoritesButton]}>
//                    <Text style={styles.buttonText}>Add to Favorites</Text>
//                    </TouchableOpacity> */}
//                    <Feather name="bookmark" size={35} color={"black"} />

//                 </View>
//             {/* <View style={styles.config}>
//                 <Feather name="arrow-left" size={35} color={"black"} />
//               </View> */}

//             </View>

//           </React.Fragment>
//         )}
//       </View>
//       <View>
//       {userPosts.map(post => (
//         <Text key={post.id}>{post.title}</Text>
//       ))}
//     </View>
//       {/* <Text style={styles.title}>Profile</Text> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0EDE4',
//     alignItems: 'center',
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginTop: 60,
//     marginBottom: 30,
//   },
//   profileImageContainer: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     borderWidth: 3,
//     borderColor: '#DAE0E6',
//     overflow: 'hidden',
//     marginBottom: 10,
//   },
// form:{
//  top:95,
// },
// gallery:{
//   right:110,
// },
// save:{
//  top:-31,
//  left:110,
// },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//     paddingHorizontal: 40,
//     right:25,
//   },
//   infoItem: {
//     marginHorizontal: 80,
//     alignItems: 'center',
//   },
//   infoText: {
//     fontSize: 40,
//     fontWeight: '600',
//     marginTop: 10,
    
//   },
//   infoLabel: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   button: {
//     backgroundColor: '#3890',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   galleryButton: {
//     backgroundColor: '#E1306C',
//   },
//   favoritesButton: {
//     backgroundColor: '#262626',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   config: {
//     position: 'absolute',
//     left: 20,
//     top: 20,
//   },
//   menu: {
//   position: 'absolute',
//   right: 20,
//   top: 20,  
//   },
// });

// export default Profile;


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, PixelRatio } from 'react-native';
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import link from "../link"

export default Profile = () => {
  
  const route = useRoute();
  const { user } = route.params;
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${link}:9001/users/${user.id}`);
        console.log(user) // Replace with your API endpoint
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        Alert.alert('Error', 'Failed to fetch user profile.');
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(`{link}:9001/user/post/${user.userid}`); // Replace with your API endpoint
        setUserPosts(response.data);
      } catch (error) {
        console.log(error);
        Alert.alert('Error', 'Failed to fetch user posts.');
      }
    };

    fetchUserPosts();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.config}>
          <Feather name="arrow-left" size={35} color={"black"} />
       </View>

       <View style={styles.menu}>
          <Feather name="menu" size={35} color="black" />
       </View>

      <View style={styles.profileContainer}>
      
        {userData && (
          <React.Fragment>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: userData.profilePic }} style={styles.profileImage} />
            </View>
            <Text style={styles.username}>{userData.username}</Text>
            <Text style={styles.firstname}>{userData.firstname}</Text>
  
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}> Posts </Text>
                  <Text style={styles.infoText}>{userData.posts.length}</Text>
              </View>
              <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}> Followers </Text>
                  <Text style={styles.infoText}>{userData.followers.length}</Text>
              </View>
              <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Follows </Text>
                  <Text style={styles.infoText}>{userData.follows.length}</Text>
              </View>
            </View>

            <View style={styles.form}>
              <View style={styles.gallery}>
                <Feather name="image" size={35} color={"black"} />
              </View>
              <View style={styles.save}>
                <Feather name="bookmark" size={35} color={"black"} />
              </View>
            </View>
          </React.Fragment>
        )}
      </View>

      <View>
        {userPosts.map(post => (
          <Text key={post.id}>{post.description}</Text>
        ))}
      </View>
    </View>
  );
};
