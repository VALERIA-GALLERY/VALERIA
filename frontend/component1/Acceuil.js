import React from 'react';
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
import data from '../dummydatabase/data'
const image={uri:'https://i.pinimg.com/originals/50/b3/f3/50b3f3520f8c37cc54e7dd245b5ecf6d.jpg'}

const Home = () => {
  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View>      
            <Text style={styles.title}>VALERIA</Text>
        </View>

       <View style={styles.not} >
        <Icon name="notifications" size={30} color={'#A47E53'} />
        </View>
      </View>
      <ScrollView>
            {data.map((item, index) => {
              return (<DetailsPost data={item} index={index} key={index}/>);
            })}
          </ScrollView>
    </SafeAreaView>
  </ImageBackground>
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
 not:{
  position:'relative',
  left: 127.3,
 },
 
  image: {
    flex: 1,
    justifyContent: 'center',
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
export default Home