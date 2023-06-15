import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function OnePost({route}) {
 
  const { data } = route.params;
  console.log("data", data)


  const [likes, setLikes] = useState(data.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);

    const [toggle,settoggle]=useState(false)


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

  if (data == undefined) {
    return (
      <View>
        <Text>data undefined</Text>
      </View>
    )
  }

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

          <Text> {data.comments[0]}</Text>
          <Text> {data.comments[1]}</Text>
          <Text> {data.comments[2]}</Text>
          <Text> {data.comments[3]}</Text>
          <Text> {data.comments[4]}</Text> 


           {/* {data.comments.map((comment, index) => (
            <Text key={index} style={styles.comment}>
              {comment}
            </Text>
          ))}  */}

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



