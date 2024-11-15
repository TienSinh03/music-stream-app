import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
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
import Feed from '../page/Feed';

import Footer from '../component/footer';
import { useMusic } from "../context/FloatingMusicContext";
import { AudioContext } from '../context/AudioContext';

import {artists, albumsSong} from '../data/data_audio'


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home_AudioListing" component={Home_AudioListing} options={{ headerShown: false }} />
            <HomeStack.Screen name="Playlist_Details" component={Playlist_Details} options={{ headerShown: false }} />
            <HomeStack.Screen name="ArtistProfile" component={Artist_Profile_Screen} options={{ headerShown: false }} />
            {/* <HomeStack.Screen name="PlayanAudio" component={PlayanAudio} options={{ headerShown: false }} /> */}
            {/* <HomeStack.Screen name="SearchAudio" component={SearchAudio} options={{ headerShown: false }} />
            <SearchStack.Screen name="AudioListing_SearchResultsScreen" component={AudioListing_SearchResultsScreen} options={{ headerShown: false }} /> */}
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
            <SearchStack.Screen name="ArtistProfile" component={Artist_Profile_Screen} options={{ headerShown: false }} />
            <SearchStack.Screen name="MyLibrary_Playlist" component={MyLibrary_Playlist} options={{ headerShown: false }} />
        </SearchStack.Navigator>
    );
}

// TabNavigator component
export default function TabNavigation() {
  const { songId, isPause, setIsPause } = useMusic(); 
  const soundObject = useContext(AudioContext);;


  // / Find artist by id
    const handelArtistByID = (id) => {
        var artist= artists.find((item) => item.id === id);
        return artist;
    }

    // Find artist by id
    const handelAlbumByID = (id) => {
        const album = albumsSong.find((item) => item.id === id);
        return album;
    }

  const handelPlaySong = async () => {
    try {
        const status = await soundObject.current.getStatusAsync();
        if (!status.isLoaded) {
            console.log("Sound is not loaded yet.");
            return;
        }
        if(isPause) {
            await soundObject.current.pauseAsync();
        } else {
            await soundObject.current.playAsync();
        }
        setIsPause(!isPause);
    } catch (e) {
        console.log(e);
    };
}
  return (
    <>

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
        <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
        {/* <Tab.Screen name="Artist_Profile_Screen" component={Artist_Profile_Screen} options={{ tabBarStyle: {display:'none'} }} />
        <Tab.Screen name="AudioListing_SearchResultsScreen" component={AudioListing_SearchResultsScreen} options={{ tabBarStyle: {display:'none'} }} />
        <Tab.Screen name="MyLibrary_Playlist" component={MyLibrary_Playlist} options={{ tabBarStyle: {display:'none'} }} />
        <Tab.Screen name="Playlist_Details" component={Playlist_Details} options={{ tabBarStyle: {display:'none'} }} /> */}

      </Tab.Navigator>

      {songId && (
        <Footer
          dataSongId={songId}
          selectedPause={isPause}
          setSelectedPause={handelPlaySong}
          albumsSong={handelAlbumByID(songId.albums_id)}
          artists={handelArtistByID(songId.id)}
          activeScreen={'MainTab'}
          showMusicInfo={true}
        />
      )}
      
    </>
     
  
      
  );
}
