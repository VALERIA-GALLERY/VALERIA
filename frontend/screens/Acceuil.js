import React , { useEffect, useState } from 'react';
import axios from 'axios'
import {ImageBackground,
  SafeAreaView,
   ScrollView,
    StatusBar,
     StyleSheet, 
     Text,
      Image,
       View,
       TouchableOpacity} from 'react-native';
import DetailsPost from './DetailsPost';
import Icon from 'react-native-vector-icons/Ionicons';


import link from '../link';



export default function Home ({route}) {
  const {user} = route.params;
  console.log(user.userid, "log");
  const image={uri:'https://i.pinimg.com/originals/50/b3/f3/50b3f3520f8c37cc54e7dd245b5ecf6d.jpg'}
  const [data, setData] = useState([]);
console.log(data, "data")
  const fetchData = () => {

    axios.get(`${link}/post/`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View  style={styles.imageContainer}>
  
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View>      
            <Text style={styles.title} >VALERIA</Text>
        </View>

       <View style={styles.not} >
        <Icon name="notifications" size={30} color={'#A47E53'}  />
        </View>
      </View>
            <Text style={styles.feed} >Feed</Text>
           
        
      <ScrollView>
            {data.map((e) => {

              return (<DetailsPost data={e} />);

            })}
          </ScrollView>
    </SafeAreaView>
  </ImageBackground>
  
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {  
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
   },
  title: {
    color:'#A47E53',
    fontSize: 20,
    fontWeight: 'bold', 
    lineHeight:24,
    right:127.3,
 
},
  feed: {
    color:'#A47E53',
    fontSize: 20,
    fontWeight: 'bold', 
    lineHeight:24,
    // right:127.3,
   left:25 ,
   
  },
 not:{
  position:'relative',
  left: 127.3,
 },
  imageContainer: {
  flex: 1,
  
},
 
  image: {
    flex: 1,
    borderRadius: 20, // You can change this value as per your need
  overflow: 'hidden',
    
  },
  post: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  pic: {
    width: '100%',
    height: 300,
  },
  postFooter: {
    padding: 10,
  },
 
});