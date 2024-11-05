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
import IconFnA from "react-native-vector-icons/FontAwesome";
import IconEnty from "react-native-vector-icons/Entypo";
import IconOct from "react-native-vector-icons/Octicons";


import { songs, artists, albumsSong } from "../data/data_audio";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function AudioListing_SearchResultsScreen({  navigation,  route}) {

  const [isFocused, setIsFocused] = useState(false);


  const [inputText, setInputText] = useState(route.params?.text || "");
  const [searchResults, setSearchResults] = useState(route.params?.query || []);

  const [songSearch, setSongSearch] = useState([]);
  const [artistSearch, setArtistSearch] = useState([]);
  const [albumSearch, setAlbumSearch] = useState([]);

  const [song, setSong] = useState();

  // display the song small
  const dataSongId = route.params?.dataFindId ? route.params?.dataFindId : null;

  
  // Search handle
  const handleSearch = (text) => {
    setInputText(text);

    const trimmedInput = text.trim().toLowerCase();

    if(trimmedInput === '') {
      setSearchResults([]);
      return;
    }

    const filteredSongs = songs.filter((song) => song.title.toLowerCase().includes(trimmedInput));
    const filteredAlbums = albumsSong.filter((album) => album.title.toLowerCase().includes(trimmedInput));
    const filteredArtists = artists.filter((artist) => artist.artistName.toLowerCase().includes(trimmedInput));

    const combinedResults = [
      ...filteredSongs.map((song) => ({ ...song, type: 'song' })),
      ...filteredAlbums.map((album) => ({ ...album, type: 'album' })),
      ...filteredArtists.map((artist) => ({ ...artist, type: 'artist'})),
    ];

    setSearchResults(combinedResults);
  };

  useEffect(() => {
    const songs =[];
    const artists =[];
    const albums =[];

    searchResults.forEach((result) => {
      if (result.type === "song") {
        songs.push(result);
      } else if (result.type === "artist") {
        artists.push(result);
      } else if (result.type === "album") {
        albums.push(result);
      }
    }
    );
    setSongSearch(songs);
    setArtistSearch(artists);
    setAlbumSearch(albums);
  }, [searchResults]);

  console.log(searchResults);
  
  const handelArtistByID = (id) => {
    var artist= artists.find((item) => item.id === id);
    return artist;
  }

  const [selectedPause, setSelectedPause] = useState(false);

  useEffect(() => {
        setSelectedPause(route.params?.selectedPause);
  }, [route.params?.selectedPause]);

  // Find song by id
  const handelSongByID = (id) => {
    var song = songSearch.find((item) => item.id === id);
    setSong(song);
    navigation.navigate("PlayanAudio", 
        {   dataFindId: song, 
            idChart: route.params?.idChart,
            selectedPause: selectedPause, 
            image: song.image, 
            artist: handelArtistByID(song.artist).artistName,
            previousScreen: 'AudioListing_SearchResultsScreen'
        });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.inputSearch, isFocused && styles.inputSearchFocused]}>
          <IconFe name="search" size={20} />
          <TextInput
            placeholder="What you want to listen to"
            style={styles.textInputSearch}
            value={inputText}
            onChangeText={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {inputText.length > 0 ?
            <TouchableOpacity onPress={() => {setInputText(''), setSearchResults([])}}>
                <IconOct name="x-circle-fill" size={20} style={styles.cancelIcon} />
            </TouchableOpacity>
        : null}
        </View>
      <ScrollView style={styles.scrollView}>
        
        <View style={styles.categoryRow}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>All</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Tracks</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Albums</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categoryText}>Artists</Text>
          </View>
        </View>

        {/* gọi data_audio_list cho tac_gia */}
        <FlatList
          data={artistSearch}
          
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.artistRow} 
          
            onPress={() => navigation.navigate('ArtistProfile',{artist_id: item.id, artist: item.artistName, artistImage: item.image})}
            
            >
              {/* img tac gia */}
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.artistImage}
              />
              <View style={styles.artistInfo}>
                {/* tac gia */}
                <Text style={styles.artistName}>{item.artistName}</Text>
                <View style={styles.followersRow}>
                  <IconAnt name="user" size={15} style={styles.userIcon} />
                  {/* so nguoi theo doi tac gia */}
                  <Text style={styles.followersText}>1.234K Followers</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.id + '_' + index.toString()} // Tạo key duy nhất
          scrollEnabled={false}
        />

        {/* gọi data_audio_list cho chart_list */}
        <FlatList
          data={songSearch}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 25,
              }}

              onPress={() => handelSongByID(item.id)}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                {/** Image music */}
                <Image source={item.image} style={{ width: 70, height: 70 }} />
                {/** The information music */}
                <View style={{ flexDirection: "column" }}>
                  {/** Name music */}
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 24,
                      fontWeight: "500",
                      color: "#171A1FFF",
                    }}
                  >
                    {item.title}
                  </Text>
                  {/* tac gia */}
                  <Text
                    style={{
                      fontSize: 14,
                      lineHeight: 24,
                      fontWeight: "400",
                      color: "#565E6CFF",
                    }}
                  >
                    {handelArtistByID(item.artist).artistName}
                  </Text>
                  {/** views and duration */}
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <IconFe name="play" size={16} color="#9095A0FF" />
                    {/* songuoixem */}
                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 24,
                        fontWeight: "400",
                        color: "#565E6CFF",
                        marginRight: 8,
                      }}
                    >
                      {item.plays}
                    </Text>

                    {/**duration */}
                    <IconFnA name="circle" size={10} color="#9095A0FF" />
                    {/* thoi gia */}

                    <Text
                      style={{
                        fontSize: 14,
                        lineHeight: 24,
                        fontWeight: "400",
                        color: "#565E6CFF",
                      }}
                    >
                      {item.duration}
                    </Text>
                  </View>
                </View>
              </View>
              {/** button menu */}
              <TouchableOpacity>
                <Image
                  source={require("../assets/image/Playlist Details - Audio Listing/Menu 5 2.png")}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>

      {/** music playing screen small */}           
      {(dataSongId) ?
            <TouchableOpacity style ={{backgroundColor:'#171A1FFF', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}
                onPress={() => navigation.navigate(
                    "PlayanAudio", 
                    {dataFindId: dataSongId, idChart: route.params?.idChart, selectedPause: selectedPause, artist: route.params?.artist}
                )}
            >
                
            {/** Image and infor music playing */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:15}}>
                {/** Image music */}
                <Image source={dataSongId.image} style={{width: 50, height: 50}}/>

                {/** Infor */}
                <View style={{flexDirection:'column'}}>
                    {/** Name music */}
                    <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'white'}}>{dataSongId.title}</Text>

                    {/**  */}
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'white', marginRight:8}}>{route.params?.albumsSong.title}</Text>
                        
                        {/**duration */}
                        <IconFnA name="circle" size={10} color="white"/>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'white'}}>{route.params?.artist}</Text>
                    </View>
                </View>
            </View>  

            <View style={{flexDirection:'row', alignItems:'center', gap:25}}>
                <IconAnt name="hearto" size={24} color="white"/>

                <TouchableOpacity onPress={() => setSelectedPause(!selectedPause)}>
                    {selectedPause ? <IconFe name="pause" size={24} color="white"/> : <IconFe name="play" size={24} color="white"/>}
                </TouchableOpacity>
                
            </View>      
            </TouchableOpacity>
        : null}

      <View style={styles.footer} >
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.popToTop()}>
          <IconAnt name="home" size={25} color="#565E6CFF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <IconFe name="search" size={25} color="#21c5db" />
          <Text style={styles.footerTextActive}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <IconAnt name="switcher" size={25} color="#565E6CFF" />
          <Text style={styles.footerText}>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <IconIon name="library-outline" size={25} color="#565E6CFF" />
          <Text style={styles.footerText}>Library</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 13,
    shadowColor: "#120F281C",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
    paddingHorizontal: 20,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  category: {
    alignItems: "center",
    paddingVertical: 21,
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
    color: "#C4C4C4",
    fontWeight: "400",
    marginLeft: 10,
    width: "85%",
  },
  categoryTextActive: {
    color: "#01BDD6",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 13,
    marginLeft: 24,
  },
  categoryText: {
    color: "#565E6C",
    fontSize: 14,
  },
  categoryUnderline: {
    height: 4,
    backgroundColor: "#01BDD6",
  },
  artistRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  artistImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 13,
  },
  artistInfo: {
    flex: 1,
    alignSelf: "flex-start",
    marginTop: 1,
    marginRight: 4,
  },
  artistName: {
    color: "#171A1F",
    fontSize: 16,
    marginBottom: 8,
  },
  followersRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    marginRight: 8,
  },
  followersText: {
    color: "#9095A0",
    fontSize: 14,
    flex: 1,
  },
  followButton: {
    width: 72,
    alignSelf: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#9095A0",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 12,
    marginTop: 1,
  },
  followButtonText: {
    color: "#9095A0",
    fontSize: 12,
  },
  trackRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 19,
    marginHorizontal: 20,
  },
  trackImage: {
    borderRadius: 4,
    width: 60,
    height: 60,
    marginRight: 11,
  },
  trackInfo: {
    flex: 1,
    marginRight: 4,
  },
  trackTitle: {
    color: "#171A1F",
    fontSize: 16,
    marginBottom: 6,
    marginLeft: 2,
  },
  trackSubtitle: {
    color: "#565E6C",
    fontSize: 12,
    marginBottom: 7,
  },
  trackStats: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 1,
  },
  statIcon: {
    width: 6,
    height: 8,
    marginRight: 7,
  },
  statIconSmall: {
    width: 5,
    height: 5,
    marginRight: 10,
  },
  statText: {
    color: "#565E6C",
    fontSize: 12,
    flex: 1,
  },
  dotSeparator: {
    width: 2,
    height: 2,
    borderColor: "#565E6C",
    borderWidth: 1,
    marginRight: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 55,
    paddingVertical: 20,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#C4C4C4",
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    color: "#565E6CFF",
  },
  footerTextActive: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
    color: "#21c5db",
  },
  inputSearchFocused: {
    borderColor: '#A0E4ED', 
    elevation: 8,
  },
  cancelIcon: {
    paddingHorizontal: 10,
  },
});
