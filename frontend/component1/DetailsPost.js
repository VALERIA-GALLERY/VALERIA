import React, { Component } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import comments from './Comments'
const Tab = createBottomTabNavigator();

export default function DetailsPost({ data, index }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.header}>
            </View>
            <ScrollView>
                <View key={index} style={styles.post} >
                    <ImageBackground source={{ uri: data.pic }} style={styles.image} resizeMode="cover">
                        <View style={styles.postHeader}>

                            <Icon name="person-circle-outline" size={30} color={'#fff'} />
                            <View style={styles.user} >
                                <Text >{data.name}</Text>
                                <Text >{data.date_time} </Text>
                            </View>

                        </View>
                        {/* <Image style={styles.image} source={{ uri: data.pic }} /> */}
                        <View style={styles.postFooter}>
                            <Text >{data.description}</Text>
                            <View style={styles.likecom}>
                                <View>
                                    <Icon name="heart-outline" size={30} color={'#fff'} />
                                    <Text >{data.likes} likes</Text>
                                </View>


                                <View>

                                    {/* <Icon
                                        name="chatbox-outline"

                                        size={30}
                                        color={'#fff'}
                                        onPress={() => navigation.navigate({ Component: { comments } })}
                                    /> */}
                                    {/* <Text >{data.comments} </Text> */}
                                    <Tab.Screen
                                        name="Chat"
                                        component={comments}
                                        options={{
                                            tabBarIcon: () => (
                                                <Ionicons
                                                    name="chatbox-outline"
                                                    size={30}
                                                    color={'#fff'}
                                                />
                                            ),
                                        }}
                                    />

                                </View>

                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        // order: 0,
        flex_grow: 0,
        flex_direction: 'column',
        align_items: 'flex - start',
        left: 24,
        top: 57.91,

    },
    header: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    user: {
        position: ' absolute',
        width: 150.47,
        height: 70.94,
        left: 13.12,
        top: 13.58,

    },
    post: {
        marginBottom: 20,
    },
    postHeader: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 340,
        height: 288.09,
        // width: '100%',
        // height: 300,

    },
    postFooter: {
        padding: 9,
        position: ' absolute',
        width: 262.4,
        height: 32.98,
        left: 13,
        top: 103.09,

    },
    likecom: {
        flexDirection: 'row',
        marginBottom: -2,
        top: 12,
    },
});
