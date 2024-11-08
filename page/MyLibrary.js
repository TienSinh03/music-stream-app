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
  Dimensions,
} from "react-native";
import React, { useState,useEffect, } from "react";
import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";
import IconFnA from "react-native-vector-icons/FontAwesome";

import { songs, myLibrary,artists, albumsSong } from "../data/data_audio";

const screenWidth = Dimensions.get("window").width;


export default function MyLibrary({navigation, route}) {
  const [isFollowing, setIsFollowing] = useState(true);
  
  // set data for categories in MyLibrary
  const [songMyLibrary, setSongMyLibrary] = useState([]);
  const [artistMyLibrary, setArtistMyLibrary] = useState([]);
  const [albumMyLibrary, setAlbumMyLibrary] = useState([]);
  const [newTagMyLibrary, setNewTagMyLibrary] = useState([]);
  const [playlistMyLibrary, setPlaylistMyLibrary] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('All');

   // find the song when clicked on the song
   const [song, setSong] = useState();

   // display small the song when clicked on the song
   const dataSongId = route.params?.dataFindId ? route.params?.dataFindId : null;

   // set button pause or play 
  const [selectedPause, setSelectedPause] = useState(false);

  useEffect(() => {
    const songs =[];
    const artists =[];
    const albums =[];
    const playlists =[];
    const newTag = []

    myLibrary.map((item) => {
      if( selectedCategory === 'Songs'){
        songs.push(...item.songs);
      } else if (selectedCategory === 'New tag') {
        newTag.push();
      } else if (selectedCategory === 'Artists') {
        artists.push(...item.artists);
      } else if ( selectedCategory === 'Albums') {
        albums.push(...item.albumsSong);
      } else if ( selectedCategory === 'Playlists') {
        navigation.navigate('MyLibrary_Playlist')
        songs.push(...item.songs);
        artists.push(...item.artists);
        albums.push(...item.albumsSong);
        playlists.push(...item.playLists);
      } else if (selectedCategory === 'All'){
        songs.push(...item.songs);
        artists.push(...item.artists);
        albums.push(...item.albumsSong);
        playlists.push(...item.playLists);      
      }
    })
    setSongMyLibrary(songs);
    setArtistMyLibrary(artists);
    setAlbumMyLibrary(albums);
    setPlaylistMyLibrary(playlists);
  },[myLibrary, selectedCategory]);

  console.log(albumMyLibrary.songs);

  const handelArtistByID = (id) => {
    var artist= artists.find((item) => item.id === id);
    return artist;
  }

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handelSongByID = (id) => {
    var song = songMyLibrary.find((item) => item.id === id);
    setSong(song);
    navigation.navigate('PlayanAudio', {
      dataFindId: song, 
      selectedPause: selectedPause, 
      image: song.image, 
      artist: handelArtistByID(song.artist).artistName,
      previousScreen: 'MyLibrary'
    })
  }

  const renderSongItem = ({ item }) => (
    <TouchableOpacity style={styles.musicItem} 
    onPress={() => handelSongByID(item.id)}
    >
      <View style={styles.musicInfo}>
        <Image source={item.image} style={styles.musicImage} />
        <View>
          <Text style={styles.musicTitle}>{item.title}</Text>
          <Text style={styles.musicArtist}>{handelArtistByID(item.artist).artistName}</Text>
          <View style={styles.musicDetails}>
            <IconFe name="play" size={16} color="#9095A0FF" />
            <Text style={styles.musicDetailText}>{item.plays}M</Text>
            <IconFnA name="circle" size={10} color="#9095A0FF" />
            <Text style={styles.musicDetailText}>{item.duration}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <IconAnt name="heart" size={20} style={styles.userIcon} color="#01bdd6" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{  flexDirection: "row",  alignItems: "center", justifyContent: "space-between" , paddingHorizontal:20}}>
        <TouchableOpacity onPress={() => setSelectedCategory('All')}>
          <Text style={{fontSize:20, fontWeight:'bold'}} >Your Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputSearch}>
            <IconFe name="search" size={25} color="#BCC1CAFF" />
        </TouchableOpacity>
      </View>


        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}
          >
            {["Playlists", "New tag", "Songs", "Albums", "Artists"].map(item => (
              <TouchableOpacity key={item} style={[styles.category,{backgroundColor: (selectedCategory === item && selectedCategory !== 'Playlists') ? '#21c5db':'#F3F4F6'}]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      <ScrollView style={styles.scrollView}>
      
        {/* Artists */}
        <FlatList
          data={artistMyLibrary}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.artistRow}
            onPress={() => navigation.navigate('ArtistProfile',{artist_id: item.id, artist: item.artistName, artistImage: item.image})}
            >
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.artistImage}
              />
              <View style={styles.artistInfo}>
                <Text style={styles.artistName}>{item.artistName}</Text>
                <View style={styles.followersRow}>
                  <IconAnt name="user" size={15} style={styles.userIcon} />
                  <Text style={styles.followersText}>1.234K Followers</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.followButton} onPress={toggleFollow}>
                <Text style={styles.followButtonText}>
                  {isFollowing ? 'Unfollow' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}

          keyExtractor={(item) => item.id}
          scrollEnabled={false}        
        />

        {/* albumMyLibrary */}
        <FlatList
          data={albumMyLibrary}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.artistRow}>
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.musicImage}
              />
              <View style={styles.artistInfo}>
                <Text style={styles.artistName}>{item.title}</Text>
                <View style={[styles.followersRow, {gap:10}]}>
                  <Text style={styles.musicArtist}>{item.artist}</Text>
                  <IconFnA name="circle" size={10} color="#9095A0FF" />
                  <Text style={styles.musicArtist}>{item.songs.length} songs</Text>
                </View>
              </View>
              <TouchableOpacity>
                <IconAnt size={25} color="black" name="right" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}

          keyExtractor={(item) => item.id}
          scrollEnabled={false}        
        />

        {/* albumMyLibrary */}
        <FlatList
          data={playlistMyLibrary}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.artistRow}>
              <Image
                source={item.image}
                resizeMode="stretch"
                style={styles.musicImage}
              />
              <View style={styles.artistInfo}>
                <Text style={styles.artistName}>{item.title}</Text>
                <View style={[styles.followersRow, {gap:10}]}>
                  <Text style={styles.musicArtist}>{item.artists}</Text>
                  <IconFnA name="circle" size={10} color="#9095A0FF" />
                  <Text style={styles.musicArtist}>{item.songs.length} songs</Text>
                </View>
              </View>
              <TouchableOpacity>
                <IconAnt size={25} color="black" name="right" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}

          keyExtractor={(item) => item.id}
          scrollEnabled={false}        
        />
        

        {/* Songs */}
        <FlatList
          data={songMyLibrary}
          renderItem={renderSongItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          style={{ marginBottom: 80 }} // Avoid content being hidden by footer
        />
      </ScrollView>

      {/** music playing screen small */}           
      {(dataSongId) ?
            <TouchableOpacity style ={{backgroundColor:'#171A1FFF', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}
                onPress={() => navigation.navigate(
                    "PlayanAudio", 
                    {dataFindId: dataSongId, selectedPause: selectedPause, artist: route.params?.artist, previousScreen: 'MyLibrary'}
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

      <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <IconAnt name="home" size={25} color="#565E6CFF" />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <IconFe name="search" size={25} color="#565E6CFF" />
            <Text style={styles.footerText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <IconAnt name="switcher" size={25} color="#565E6CFF" />
            <Text style={styles.footerText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <IconIon name="library-outline" size={25} color="#21c5db" />
            <Text style={styles.footerTextActive}>Library</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

// Styles remain unchanged

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputSearch: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#BCC1CAFF",
    padding: 10,
    marginVertical: 11,
  },
  textInputSearch: {
    marginLeft: 10,
    // flex: 1,
    color: "#171A1FFF",
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryText: {
    color: "#171A1FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  artistRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  artistImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  artistInfo: {
    flex: 1,
  },
  artistName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#171A1FFF",
  },
  followersRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    marginRight: 5,
  },
  followersText: {
    color: "#565E6CFF",
  },
  followButton: {
    padding: 10,
    backgroundColor: "#171a1f",
    borderRadius: 20,
  },
  followButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  musicItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  musicInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 15,
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#171A1FFF",
  },
  musicArtist: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
     color: "#565E6CFF",
  },
  musicDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap:10
  },
  musicDetailText: {
    color: "#565E6CFF",
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    color: "#565E6CFF",
    fontSize: 12,
  },
  footerTextActive: {
    color: "#21c5db",
    fontSize: 12,
  },
});
