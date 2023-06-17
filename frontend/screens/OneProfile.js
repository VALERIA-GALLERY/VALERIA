import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import link from '../link';
import axios from 'axios';
const OneProfile = ({ route }) => {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: user.profilepic }} style={styles.profileImage} />
            </View>
    
            <Text style={styles.username}>{user.username}</Text>
    
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Posts</Text>
                <Text style={styles.infoText}>{posts.length}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel} onPress={handlecurrent}>Followers</Text>
                <Text style={styles.infoText}>{user.followers.length}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Following</Text>
                <Text style={styles.infoText}>{user.follows.length}</Text>
              </View>
            </View>
    
            <View style={styles.buttonContainer}>
             
              <TouchableOpacity onPress={handlePress} style={styles.button}>
                <Feather name="menu" size={22} color="black" />
              </TouchableOpacity>
            </View>
    
            <FlatList
              data={posts}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderPost}
              contentContainerStyle={styles.postContainer}
            />
          </View>
        </ScrollView>
      );
}

export default Profile;