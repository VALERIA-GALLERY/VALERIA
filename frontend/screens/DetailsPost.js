import React, { useState ,useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import axios from 'axios'
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Comments from "./Comments";
import link from "../link";

export default function DetailsPost({ data, CurrentUserID, index}) {
const current=CurrentUserID
  const navigation = useNavigation();
  const [likes, setLikes] = useState(data.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(data.comments);
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
const [foreign, setForeign]=useState({})
const [testing,setTesting] = useState( CurrentUserID)
  const { userid } = data;
  // console.log(userid,CurrentUserID)

  const handleLike = () => {
    if (isLiked) {
      // If already liked, then decrement the likes and change isLiked state to false
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      // Increment the number of likes by 1 and change isLiked state to true
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleComment = () => {
    // You can navigate to the comment section or implement your own logic for handling comments

    navigation.navigate("Comments", { postId: data.id });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${link}/user/${userid}`) 
        // console.log(res.data, "user data");
        setProfilePic(res.data.profilepic);
        setUsername(res.data.username);
        setForeign(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchUser();
  }, [userid]); 

var currentt=CurrentUserID
  console.log(CurrentUserID, "details")
  return (
    <View style={styles.container}>
      <Pressable
        key={index}
        style={styles.post}
        onPress={() => navigation.navigate("OnePost",  { data })}
        
      >
        <ImageBackground
          source={{ uri: data.pic[0] }}
          style={styles.image}
          resizeMode="stretch" 
        >
          <View style={styles.postHeader}  >
          <Image
  source={{ uri: profilePic }}
  style={styles.profileImage}
  onPress={() => navigation.navigate("OneProfile", { data, foreign })}
/>

            <View style={styles.user} >
            <Text style={styles.name} onPress={()=>
          navigation.navigate("OneProfile",{data, foreign})
        }>{username}</Text>
              <Text style={styles.date}>{data.date_time}</Text>
            </View>
            <Icon size={30} color="#fff" />
          </View>
          <View style={styles.postFooter}>
            <Text style={styles.desc}>{data.description}</Text>
          </View>
        </ImageBackground>
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
            <Text style={styles.desc}>{comments}</Text>
            {/* <Icon
                name='bookmarks-outline'
                size={27}
                color={"#A47E53"}
                style={(margin = "5")}
              /> */}
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: "2%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
  },post: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  user: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    left:-79,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15, // half of width and height to make it a circle
  },
  date: {
    color: "#fff",
    marginLeft: 10,
    left:-79,
  },
  postFooter: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    width: "100%",
  },
  desc: {
    color: "#fff",
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
