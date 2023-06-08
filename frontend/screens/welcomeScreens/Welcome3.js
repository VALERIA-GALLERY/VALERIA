import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


export default function W3(){
    const navigation=useNavigation()
    
    return(

        <View style={styles.container}>
                   
              <ImageBackground style={styles.nft} source={require("../../assets/1686066027005.png")} resizeMode="cover" >
              {/* <Image  style={styles.logo} source={require('../../assets/qq.png')}></Image> */}
            <Text style={styles.text}>and a lot more is wating for you !</Text>
            <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("login")}>
        <Text style={styles.buttonText2}>Get started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selected} ></TouchableOpacity>
      <TouchableOpacity style={styles.selected2} ></TouchableOpacity>
      <TouchableOpacity style={styles.selected3} ></TouchableOpacity>

            </ImageBackground>
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
    text: {
      color: '#a47e53',
      fontSize: 20,
      top:620,
      left:30
    },
    button:{
      color:'#5B3D00'
    },
    buttonText2: {
        fontSize: 20,
      color: '#FFFFFF',
      left: 100,
      top: 0,
    },
    button2: {
        backgroundColor: '#a47e53',
        padding: 10,
        borderRadius: 55,
        marginTop: 50,
        width: 327,
        height: 55,
        top: 700,
        left:50
      },
    footer: {
      
      fontSize: 13,
      color: '#A47E53',
      top: 650,
    },
    nft: {
        width: '100%',
        height: '100%',
        
        
        borderRadius:20
      },
      logo:{
        top:0

      },
      selected: {
        backgroundColor: '#A47E53',
        borderRadius: 100,
        width: 10,
        height: 10,
        top: 610,
        left:180
    },
    selected2: {
        backgroundColor: '#A47E53',
        borderRadius: 100,
        width: 10,
        height: 10,
        top: 600,
        left:200
    },
    selected3: {
        backgroundColor: '#f0ede4',
        borderRadius: 100,
        width: 10,
        height: 10,
        top: 590,
        left:220
    },
  });
  