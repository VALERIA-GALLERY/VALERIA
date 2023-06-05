import React from 'react'
import {ImageBackground,
    SafeAreaView,
     ScrollView,
      StatusBar,
       StyleSheet, 
       Text,
        Image,
         View,
         TouchableOpacity} from 'react-native';
function Profil() {
  return (
   <View style={styles.container}>
    <Text> this profile  </Text>
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
})
export default Profil