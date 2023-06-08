import React from 'react'
import {ImageBackground,
    SafeAreaView,
     ScrollView,
      StatusBar,
       StyleSheet, 
       Text,TextInput,
        Image,
         View,
         TouchableOpacity} from 'react-native';
function Search() {
  return (
   <View style={styles.container}>
    <Text>search here </Text>
   <TextInput style={styles.input}>  </TextInput>
   </View>
  )
}

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
    left:15,
    top:10,
    paddingBottom:5,
    borderBottomWidth:0.5,
    borderBottomColor:"#A47E53"
  }
})
export default Search