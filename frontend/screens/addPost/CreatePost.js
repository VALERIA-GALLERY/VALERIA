// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Text,
//   Alert,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import axios from "axios";
// import LOGO_PATH from "../../assets/qq.png";
// import { LinearGradient } from "expo-linear-gradient";


// export default function CreatePost() {
//   const [description, setDescription] = useState("");
//   const [photo, setPhoto] = useState(null);

//   const selectPhoto = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [3, 4],
//       base64: true,
//       quality: 1,
//     });

//     setPhoto("data:image/jpeg;base64," + result.base64);

//     // if (!result.canceled) {
//     //   setPhoto(result.assets[0].uri);
//     // }
//   };

//   const handleSubmit = () => {
//     if (!description || !photo) {
//       Alert.alert("Description and photo required.");
//       return;
//     }


//     let formData = new FormData();
//     formData.append("file", {
//       uri: photo,
//       name: "image.jpg",
//       type: "image/jpg",
//     });
//     axios
//       .post(
//         "http://192.168.43.100:9001/post",
//         {
//           description: "Description",
//           pic: photo,
//           likes: [],
//           comments: [],
//           premiem: false,
//           userid: "q5O9DkOzVqXXmurC9lWJCgfiPkH2"
//         }
//         ,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         },
//       )
//       .then((response) => {
//         Alert.alert("Post created successfully!");
//       })
//       .catch((error) => {
//         console.error({
//           description: "Description",
//           pic: photo,
//           likes: [],
//           comments: [],
//           premiem: false,
//           userid: "q5O9DkOzVqXXmurC9lWJCgfiPkH2"
//         },error);
//         Alert.alert("Failed to create post.");
//       });
//   };


//   const uploadButtonMargin = photo ? { marginTop: 20 } : {};

  
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/qq.png')} style={styles.logo} />
//       <TextInput
//         placeholder="Description"
//         value={description}
//         onChangeText={(text) => setDescription(text)}
//         style={styles.input}
//       />
//       {photo && <Image source={{ uri: photo }} style={styles.photo} />}
//       <TouchableOpacity onPress={selectPhoto}>
//         <LinearGradient
//           colors={["#EAE0D1", "#D8BD78", "#A47E53" ]}
//           start={[0, 0.5]}
//           end={[1, 0.5]}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText2}>+</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button2} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Post</Text>
//       </TouchableOpacity>
//     </View>
//   );
//   }  

// const styles = StyleSheet.create({
//   logo: {
//     width: 200,
//     height: 70,
//     marginBottom: 200,
//   },
//   container: {
//     width: 359,
//     flex: 1,
//     backgroundColor: '#F0EDE4',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     width: 270,
//     height: 50,
//     borderBottomWidth: 0.5,
//     borderBottomColor: '#A47E53',
//     textAlign: 'center',
//     margin: 5,
//     marginBottom: 10, // Add this line
//   },
  
//   photo: {
//     width: 50,
//     height: 50,
//     margin: 5,
//   },
//   button: {
//     borderRadius: 100,
//     width: 100,
//     height: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
  
  
//   buttonText2: {
//     fontSize: 50,
//     lineHeight: 100, 
//     color: '#F0EDE4',
//   },
  
//   buttonText:{
//     fontSize: 50,
//     color:'#F0EDE4',
//     left:16,
//     top:-5
// },
//   button2: {
//     backgroundColor: '#B4966A',
//     padding: 10,
//     borderRadius: 55,
//     width: 270,
//     alignItems: 'center',
//     margin: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });