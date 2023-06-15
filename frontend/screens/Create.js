import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import LOGO_PATH from "../assets/qq.png";
import { LinearGradient } from "expo-linear-gradient";
import link from "../link";


export default function CreatePost({ route }) {
  const { user } = route.params;
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  // const route = useRoute();
  // const {user} = route.params;

  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      base64: true,
      quality: 1,
    });

    setPhoto("data:image/jpeg;base64," + result.base64);
  };

  const handleSubmit = () => {
    if (!description || !photo) {
      Alert.alert("Description and photo required.");
      return;
    }

    let formData = new FormData();
    formData.append("file", {
      uri: photo,
      name: "image.jpg",
      type: "image/jpg",
    });
    axios
      .post(
      `${link}/post/create`,
        {
          description: description,
          pic: photo,
          likes: [],
          comments: [],
          premiem: false,
          userid: user.id
        }
        ,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        Alert.alert("Post created successfully!");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Failed to create post.");
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/qq.png")} style={styles.logo} />
      <TextInput
        placeholder='Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}
      <TouchableOpacity style={styles.button} onPress={selectPhoto}>
        <Text style={styles.buttonText2}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EDE4",
    alignItems: "center",
    justifyContent: "flex-start", // Align items at the top
    paddingTop: 50, // Add padding at the top for the logo
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: 110, 
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70, // Add margin at the top to separate logo and content
  },
  input: {
    width: 270,
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: "#A47E53",
    textAlign: "center",
    margin: 5,
    marginBottom: 10,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#B4966A",
    borderRadius: 100,
    width: 65,
    height: 65,
    marginTop: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText2: {
    bottom: 5,
    fontSize: 50,
    color: "#F0EDE4",
  },
  button2: {
    backgroundColor: "#B4966A",
    padding: 10,
    borderRadius: 55,
    width: 100,
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

//hrllo 

