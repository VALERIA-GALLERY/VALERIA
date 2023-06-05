import React from 'react';
import { View, Text } from 'react-native';
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your components
 import Acceuil from '../screens/Acceuil';
 import Chat from '../screens/Chat';
 import Create from '../screens/Create';
import Search from '../screens/Search';
import Profile from '../screens/profile1';

const Tab = createBottomTabNavigator();
 
// Define your colors
const COLORS = {
  primary: '#A47E53', // replace with your primary color
  brown: '#A47E53', // replace with your brown color
  white: '#ffffff' // replace with your white color
};

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  keyboardHidesTabBar: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Acceuil"
        component={Acceuil} 
        options={{
          tabBarIcon: ({focused}) => (
            <Feather name='home' size={24} color={focused ? COLORS.primary : COLORS.brown}/>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat} 
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons name='chatbox-outline' size={24} color={focused ? COLORS.primary : COLORS.brown}/>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({focused}) => (
            <LinearGradient colors={['#A47E53','#c5af81']} 
              style={{
                alignItems:'center',
                justifyContent:'center',
                width: 50,
                height: 50,
                top:-10,
                borderRadius:15,
                borderColor:'#fff',
                borderWidth:4
              }}
            >
              <Feather name="plus" size={45} color={COLORS.white} />
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search} 
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5 name='search' size={24} color={focused ? COLORS.primary : COLORS.brown}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile} 
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name='user-circle' size={24} color={focused ? COLORS.primary : COLORS.brown}/>
          ),
        }}
      />
    </Tab.Navigator>
  )
};

export default Tabs