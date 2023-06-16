import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {ImageBackground,
  FlatList,
     ScrollView,
      StatusBar,
       StyleSheet, 
       Text,TextInput,
        Image,
         View,
         TouchableOpacity} from 'react-native';

 import { Feather, Ionicons,AntDesign, FontAwesome5 } from '@expo/vector-icons';
import link from '../link';
 function Search({route}) {
  const { user } = route.params;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [reload, setReload] = useState(Date.now()); // Add this line

  const fetchData = () => {
    axios.get(`${link}/userss`)
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((err) => console.log(err));
      axios.get(`${link}/search/getall`)
      .then((res) => {
        setSearchResults(res.data);
        console.log("geted")
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredUsers = searchResults.filter((user) =>
      user.username.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };
  const forceReload = () => { // Add this function
    setReload(Date.now());
  };

  const handlePost=()=>{
   axios.post(`${link}/search/addsearch`,{
    search_history_id:searchTerm,
    user_id:user.id
  }).then((res) => {
    setSearchResults(res.data);
    console.log("syee")
  })
  .catch((err) => console.log(err));
  }
  const handledelet=()=>{
    axios.delete(`${link}/delete/${user.id}`)
    .then((res) => {
      setSearchResults(res.data);
      console.log("fasakh nayek")
    })
    .catch((err) => console.log(err));
  }
  return (
   <View style={styles.container}>
    {/* <Text>search here </Text> */}
    <TextInput
        style={styles.input}
        placeholder='Search what do you want'
        value={searchTerm}
        onChangeText={handleSearch}
      />
      
   <TouchableOpacity onPress={() => handleSearch(searchTerm)}>
        <View style={styles.search} >
          <Feather name='search' size={33} color='#A47E53' onPress={handlePost} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={forceReload}>

      <View style={styles.reload}>
        {/* <AntDesign name='reload1' size={33} color='#A47E53'/> */}
        <Text>Cancel</Text>
        </View>
        </TouchableOpacity>
     <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View >
            <Text style={styles.username}>{item.username}</Text>
          </View>
        )}
      />
         <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View >
            <Text style={styles.hist}>{item.search_history_id}<Feather name='x-circle' size={30} onPress={handledelet}/></Text>
          </View>
        )}
      />
   </View>
  )
}''

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    width:370,
    height:50,
    left:-5,
    // top:-220,
    top:140,
    paddingBottom:5,
    borderBottomWidth:0.5,
    borderBottomColor:"#A47E53",
    backgroundColor:'#fff',
    borderRadius: 20, // You can change this value as per your need
     overflow: 'hidden',
  },
  listItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A47E53',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    top:130,
    color: '#A47E53',
  },
  hist:{
    fontSize: 16,
    fontWeight: 'bold',
    top:130,
    color: '#A47E53',
  },


  search:{
    top:95,
    left:157,
    color:"#A47E53"
  },
  reload:{
    left:157,
  },
})
export default Search