import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFe from "react-native-vector-icons/Feather";
import IconIon from "react-native-vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity } from "react-native";


import Home_AudioListing from '../page/Home_AudioListing';
import MyLibrary from '../page/MyLibrary';
import SearchAudio from '../page/SearchAudio';
import Playlist_Details from '../page/Playlist_Details_Screen';
import AudioListing_SearchResultsScreen from '../page/AudioListing_SearchResultsScreen';
import MyLibrary_Playlist from '../page/MyLibrary_Playlist';
import Artist_Profile_Screen from '../page/Artist_Profile_Screen';
import PlayanAudio from '../page/Play_an_AudioScreen';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home_AudioListing" component={Home_AudioListing} options={{ headerShown: false }} />
            <HomeStack.Screen name="Playlist_Details" component={Playlist_Details} options={{ headerShown: false }} />
            {/* <HomeStack.Screen name="Artist_Profile_Screen" component={Artist_Profile_Screen} options={{ headerShown: false }} /> */}
        </HomeStack.Navigator>
    );
}

const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchAudio" component={SearchAudio} options={{ headerShown: false }} />
            <SearchStack.Screen name="AudioListing_SearchResultsScreen" component={AudioListing_SearchResultsScreen} options={{ headerShown: false }} />
        </SearchStack.Navigator>
    );
}

const LibraryScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="MyLibrary" component={MyLibrary} options={{ headerShown: false }} />
            <SearchStack.Screen name="Artist_Profile_Screen" component={Artist_Profile_Screen} options={{ headerShown: false }} />
            <SearchStack.Screen name="MyLibrary_Playlist" component={MyLibrary_Playlist} options={{ headerShown: false }} />
        </SearchStack.Navigator>
    );
}

// TabNavigator component
export default function TabNavigation() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              return <IconAnt name={iconName} size={size} color={color} />;
            } else if (route.name === 'Search') {
              iconName = 'search';
              return <IconFe name={iconName} size={size} color={color} />;
            } else if (route.name === 'Feed') {
              iconName = 'switcher';
              return <IconAnt name={iconName} size={size} color={color} />;
            } else if (route.name === 'Library') {
              iconName = 'library-outline';
              return <IconIon name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#21c5db',
          tabBarInactiveTintColor: '#565E6CFF',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            height: 100,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 30,
            marginTop: -20,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Feed" component={SearchAudio} options={{ headerShown: false }} />
        <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
        {/* <Tab.Screen name="Artist_Profile_Screen" component={Artist_Profile_Screen} options={{ tabBarStyle: {display:'none'} }} />
        <Tab.Screen name="AudioListing_SearchResultsScreen" component={AudioListing_SearchResultsScreen} options={{ tabBarStyle: {display:'none'} }} />
        <Tab.Screen name="MyLibrary_Playlist" component={MyLibrary_Playlist} options={{ tabBarStyle: {display:'none'} }} />
        <Tab.Screen name="Playlist_Details" component={Playlist_Details} options={{ tabBarStyle: {display:'none'} }} /> */}

      </Tab.Navigator>
  );
}
