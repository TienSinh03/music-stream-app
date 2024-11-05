import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";
import IconFnA from "react-native-vector-icons/Octicons";
import IconEnty from "react-native-vector-icons/Entypo";

import { songs, artists,albumsSong } from "../data/data_audio";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function SearchAudio({ navigation, route,}) {

    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (text) => {
        setInputText(text);

        const trimmedInput = text.trim().toLowerCase();
        
        if (trimmedInput === '') {
            setSearchResults([]);
            return;
        }

        // Tìm kiếm trong danh sách bài hát
        const filteredSongs = songs.filter((song) =>
            song.title.toLowerCase().includes(trimmedInput) 
        );

        // Tìm kiếm trong danh sách nghệ sĩ
        const filteredArtists = artists.filter((artist) =>
            artist.artistName.toLowerCase().includes(trimmedInput)
        );
        // Tìm kiếm trong danh sách albums
        const filteredAlbums = albumsSong.filter((albums) =>
            albums.title.toLowerCase().includes(trimmedInput)
        );

        const combinedResults = [
            ...filteredSongs.map((song) => ({ ...song, type: 'song'})),
            ...filteredAlbums.map((album) => ({ ...album, type: 'album' })),
            ...filteredArtists.map((artist) => ({ ...artist, type: 'artist' })),
          ];
        // Kết hợp kết quả
        setSearchResults(combinedResults);
    };

    console.log(searchResults);

    const handleEnterSearchResults = () => {
        navigation.navigate('AudioListing_SearchResultsScreen', { query: searchResults, text: inputText });
    }

  return (
    <SafeAreaView style={styles.container}>

      <View style={[styles.inputSearch, isFocused && styles.inputSearchFocused]}>
        <IconFe name="search" size={20} />
        <TextInput
          placeholder="What you want to listen to"
          style={styles.textInputSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputText}
          onChangeText={handleSearch}
          onSubmitEditing={handleEnterSearchResults}
        />

        {inputText.length > 0 ?
            <TouchableOpacity onPress={() => {setInputText(''), setSearchResults([])}}>
                <IconFnA name="x-circle-fill" size={20} style={styles.cancelIcon} />
            </TouchableOpacity>
        : null}
      </View>

      <ScrollView style={{marginHorizontal:20}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop:20}}>
        <FlatList
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.resultText}>
                        {item.title || item.artistName}
                    </Text>
                )}
                scrollEnabled={false}
            />
        </View>
      </ScrollView>

      {/** action footer */}
      <View style={styles.footer}>
          {/** button home */}
          <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.popToTop()}>
            <IconAnt name="home" size={25} color="#565E6CFF"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Home</Text>
          </TouchableOpacity>
  
          {/** button search */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconFe name="search" size={25} color="#21c5db"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#21c5db'}}>Search</Text>
          </TouchableOpacity> 
  
          {/** button feed */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconAnt name="switcher" size={25} color="#565E6CFF"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Feed</Text>
          </TouchableOpacity>
  
          {/** button library */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconIon name="library-outline" size={25} color="#565E6CFF"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Library</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight || 0,
  },
  inputSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    padding: 10,
    borderRadius: 22,
    marginTop: 11,
    marginHorizontal: 20,
    backgroundColor: 'white', 
 },
  textInputSearch: {
    fontSize: 16,
    color: "#171A1FFF",
    fontWeight: "400",
    marginLeft: 10,
    width: "85%",
  },
  inputSearchFocused: {
    borderColor: '#A0E4ED', 
    elevation: 8,
  },
  cancelIcon: {
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
},
  footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}

});
