import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import link from "../link";
import Spinner from "react-native-loading-spinner-overlay";
import { useNavigation } from "@react-navigation/native";

export default function CreatePost({ route }) {
  const { user } = route.params;
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      base64: true,
      quality: 1,
      allowsMultipleSelection: true, // allow multiple selection
    });

    if (!result.canceled) {
      setPhotos([...photos, "data:image/jpeg;base64," + result.base64]);
    }
  };

  const handleSubmit = () => {
    if (!description || photos.length === 0) {
      Alert.alert("Description and photos required.");
      return;
    }

    let formData = new FormData();
    photos.forEach((photo, index) => {
      formData.append(`file${index}`, {
        uri: photo,
        name: `image${index}.jpg`,
        type: "image/jpg",
      });
    });

    setIsLoading(true);
    axios
      .post(
        `${link}/post/create`,
        {
          description: description,
          pic: photos,
          likes: [],
          comments: [],
          premiem: false,
          userid: user.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        navigation.navigate("Acceuil");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);

        Alert.alert("Failed to create post.");
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <Image source={require("../assets/qq.png")} style={styles.logo} />
      <TextInput
        placeholder='Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />
      <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </ScrollView>

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
    width: 70,
    height: 70,
    borderRadius: 15,
    margin: 10,
  },
  button: {
    backgroundColor: "#B4966A",
    borderRadius: 100,
    width: 65,
    height: 65,
    marginTop: 130,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
