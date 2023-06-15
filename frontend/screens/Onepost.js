// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Onepost = ({data}) => {
//   const [likes, setLikes] = useState(data.likes);
//   const [isLiked, setIsLiked] = useState(false);
//   const [comments, setComments] = useState(data.comments);
  
//   const handleLike = () => {
//     if (isLiked) {
//       setLikes(likes - 1);
//       setIsLiked(false);
//     } else {
//       setLikes(likes + 1);
//       setIsLiked(true);
//     }
//   };

//   const handleComment = () => {

//     navigation.navigate("Comments", { postId: data.id });
//   };

//   console.log('item:', data)
//   return (
//     <View>
//       <Text>Onepost</Text>

//     </View>
//   )
// }

// export default Onepost

// const styles = StyleSheet.create({
//     container :{
//         flex:1
//     }
// })

// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";

// export default function OnePost({ route }) {
//   // const { data } = route.params;
//   const data = { pic:"picture" ,likes: 22 ,name:"mohamed", comments:["hello","hi"],description:"helloword",date_time:"12.11.2022"}
//   const [likes, setLikes] = useState(data.likes);
//   const [isLiked, setIsLiked] = useState(false);
//   const [comments, setComments] = useState(data.comments);

//   const handleLike = () => {
//     if (isLiked) {
//       setLikes(likes - 1);
//       setIsLiked(false);
//     } else {
//       setLikes(likes + 1);
//       setIsLiked(true);
//     }
//   };

//   const handleComment = () => {
//     // Implement your logic for handling comments here
//   };
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: data.pic }} style={styles.image} resizeMode="cover" />
//       <View style={styles.postHeader}>
//         <Text style={styles.name}>{data.name}</Text>
//         <Text style={styles.date}>{data.date_time}</Text>
//       </View>
//       <View style={styles.postFooter}>
//         <Text style={styles.desc}>{data.description}</Text>
//       </View>
      
//       <View style={styles.likecom}>
//         <TouchableOpacity style={styles.like} onPress={handleLike}>
//           <Icon
//             name={isLiked ? "heart" : "heart-outline"}
//             size={30}
//             color={isLiked ? "#A47E53" : "#A47E53"}
//           />
//           <Text style={styles.desc}>{likes}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.com} onPress={handleComment}>
          
//           <Icon name="chatbox-outline" size={30} color="#A47E53" />
//           <Text style={styles.desc}>{data.comments.length}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
  
  


// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: 400,
//     borderRadius: 20,
//   },
//   postHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//   },
//   name: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   date: {
//     fontSize: 14,
//   },
//   postFooter: {
//     backgroundColor: "#f8f8f8",
//     padding: 10,
//     width: "100%",
//   },
//   desc: {
//     fontSize: 16,
//     color: "#000",
//   },
//   likecom: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//     backgroundColor: "#f8f8f8",
//   },
//   like: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   com: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function OnePost({route}) {
  // const data = {
  //   pic: "picture",
  //   likes: 22,
  //   name: "mohamed",
  //   comments: ["hello", "hi"],
  //   description: "helloworld",
  //   date_time: "12.11.2022",
  // };
  const { data } = route.params;


  const [likes, setLikes] = useState(data.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleComment = () => {
    setCommentsVisible(!commentsVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.pic[0] }} style={styles.image} resizeMode="cover" />
      <View style={styles.postHeader}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.date}>{data.date_time}</Text>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.desc}>{data.description}</Text>
      </View>
      {commentsVisible && (
        <View style={styles.commentsContainer}>
          {data.comments.map((comment, index) => (
            <Text key={index} style={styles.comment}>
              {comment}
            </Text>
          ))}
        </View>
      )}
      <View style={styles.likecom}>
        <TouchableOpacity style={styles.like} onPress={handleLike}>
          <Icon
            name={isLiked ? "heart" : "heart-outline"}
            size={30}
            color={isLiked ? "#A47E53" : "#A47E53"}
          />
          <Text style={styles.desc}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.com} onPress={handleComment}>
          <Icon name="chatbox-outline" size={30} color="#A47E53" />
          <Text style={styles.desc}>{data.comments.length}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  postFooter: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
  },
  desc: {
    fontSize: 14,
    color: "#000",
  },
  commentsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  comment: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  likecom: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  like: {
    flexDirection: "row",
    alignItems: "center",
  },
  com: {
    flexDirection: "row",
    alignItems: "center",
  },
});



