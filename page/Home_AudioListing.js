import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
  Dimensions
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from "react";


import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";

import { chart_list,artists,albumsSong } from "../data/data_audio";

import Footer from '../component/footer';

const screenWith = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;



// Items with charts
const Item_Chart = ({ title, location, likes, duration, description, image,navigation,id }) => (
  
  <TouchableOpacity style={{width:'30%'}} onPress={() => navigation.navigate({
    name:'Playlist_Details',
    params: {idChart: id}
  })}>
    {/** Image and name playlist */}
    <ImageBackground source={image} style={styles.viewImageList}>
        <Text style={styles.textNameList_Image}>{title}</Text>
        <Text style={{color:'white', fontSize: 15, fontWeight:'400'}}>{location}</Text>
    </ImageBackground>
    <Text style={[styles.textDes]}>{description}</Text>
  </TouchableOpacity>
)

// Items with trending albums
const Item_Trending = ({title, artist, image, navigation}) => (
  <TouchableOpacity style={{width:'30%', marginRight:20}}>
    <Image source={image} style={{}}/>
    <Text style={[styles.textNameMainCate,{marginTop:5}]}>{title}</Text>
    <Text style={styles.nameArists}>{artist}</Text>
  </TouchableOpacity>
)

// Items with popular artists
const Item_popular_artists = ({artist,follow,textFollower, navigation}) => (

  <TouchableOpacity style={{width:'30%', alignItems:'center', marginRight:20}}
    onPress={() => navigation.navigate('ArtistProfile',
              {artist_id: artist.id, artist: artist.artistName, artistImage: artist.image})} 
  >
    <Image source={artist.image} />
                
    <Text style={[styles.textNameMainCate,{marginVertical:8}]}>{artist.artistName}</Text>
                
    {/** button follow */}
    <TouchableOpacity style ={styles.buttonFL} 
      onPress={follow}
    >
      <Text style={styles.textButtonFL}>{textFollower}</Text>
    </TouchableOpacity>
  </TouchableOpacity>
) 

export default function Home_AudioListing({navigation, route}) {

  const [isFollowing, setIsFollowing] = useState({});

  const toggleFollow = (id) => {
    setIsFollowing((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // get random artists
  const getPopularArtists = (artistsList) => {
    return artistsList.slice(0, 3);
  };
  
  const artistsPopuplar = getPopularArtists(artists);
  console.log(artistsPopuplar);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  style={{marginLeft: 20}} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          {/* Image lyrics */}
          <TouchableOpacity onPress={() => navigation.navigate('LanchScreen_Premium')}>
            <Image
              source={require("../assets/image/Home - Audio Listing/Image 36.png")}
            />
          </TouchableOpacity>

          <View style={styles.headerLeft}>
            <IconFe
              name="bell"
              size={30}
              color="black"
              style={{ marginRight: 15 }}
            />
            <TouchableOpacity>
              <Image
                source={require("../assets/image/Home - Audio Listing/Avatar 3.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Information user login and Search */}
        <View style={{ display: "flex", marginVertical: 40,marginRight:20 }}>
          {/* Text Good morning */}
          {new Date().getHours() < 12 ? (
            <Text style={styles.textMorning}>Good morning</Text>
          ) : <Text style={styles.textMorning}>Good afternoon</Text>}

          {/* Text User */}
          <Text style={styles.textUser}>Ashley Scott</Text>

          {/* Input search */}
          <TouchableOpacity style={styles.inputSearch} onPress={() => navigation.navigate('SearchAudio')}>
            <IconFe name="search" size={20} />
            <TextInput
              placeholder="What you want to listen to"
              style={styles.textInputSearch}
            />
          </TouchableOpacity>
        </View>

        {/* Suggestion */}
        <View style ={{marginBottom:30}}>
          {/* Titile */}
          <Text style={[styles.textTitleCategory,{marginBottom:10}]}>Suggestion for you</Text>

          {/* List suggestion */}
          <View style ={{display:"flex", flexDirection:'row', alignItems:'center'}} >
              
              <ImageBackground source={require('../assets/image/Home - Audio Listing/image_sugges_1.jpg')} style={[styles.imageSugges,{marginRight:60}]}>
                  <View style={styles.textNameSugges}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'500'}}>Reflection</Text>
                    <Text style={{color:'white', fontSize:16, fontWeight:'500'}}>Christina Aguilera</Text>
                  </View>
              </ImageBackground>

              <ImageBackground source={require('../assets/image/Home - Audio Listing/image_sugges_2.jpg')} style={[styles.imageSugges]}>
                  <View style={styles.textNameSugges}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'500'}}>In The Stars</Text>
                    <Text style={{color:'white', fontSize:16, fontWeight:'500'}}>Benson Boone</Text>
                  </View>
              </ImageBackground>
          </View>
        </View>

        {/* Charts */}
        <View style ={{marginBottom:30}}>

          {/** Name categories chart and button see all */}
          <View style ={styles.viewTitileCate}>
            <Text style={styles.textTitleCategory}>Charts</Text>
            <TouchableOpacity style ={{alignItems:'center'}}>
              <Text style={styles.text}>See all</Text>
            </TouchableOpacity>
          </View>

          {/** List chart */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList 
                    data={chart_list}
                    renderItem={({item}) =>(
                      <Item_Chart 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        location={item.location} 
                        likes={item.likes} 
                        duration={item.duration} 
                        description={item.description} 
                        image={item.image} 
                        navigation={navigation}/>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    scrollEnabled={false}
                />
          </ScrollView>
          
        </View>

        {/* Trending albums */}
        <View style ={{marginBottom:30}}>
          {/** Name categories trending albums and button see all */}
          <View style ={styles.viewTitileCate}>
            <Text style={[styles.textTitleCategory]}>Trending albums</Text>
            <TouchableOpacity style ={{alignItems:'center'}}>
              <Text style={styles.text}>See all</Text>
            </TouchableOpacity>
          </View>

          {/** List trending albums */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data={albumsSong}
              renderItem={({item}) =>(
                <Item_Trending
                  title={item.title}
                  artist={item.artist}
                  image={item.image}
                  navigation={navigation}
                />
              )}
              keyExtractor={item => item.id}
              numColumns={3}
              scrollEnabled={false}
            />
          </ScrollView>
        
        </View>

        {/* Popular artists */}
        <View style ={{marginBottom:30}}>

          {/** Name categories popular artists and button see all */}
          <View style ={styles.viewTitileCate}>
            <Text style={[styles.textTitleCategory]}>Popular artists</Text>
            <TouchableOpacity style ={{alignItems:'center'}}>
              <Text style={styles.text}>See all</Text>
            </TouchableOpacity>
          </View>

          {/** List popular artists */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FlatList
              data={artistsPopuplar}
              renderItem={({item}) =>(
                <Item_popular_artists
                key={item.id}
                  artist={item}
                  follow = {() => toggleFollow(item.id)}
                  textFollower={isFollowing[item.id] ? "Following" : "Follow"}
                  navigation={navigation}
                />
              )}
              keyExtractor={item => item.id}
              numColumns={6}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </ScrollView>

              
      {/* <Footer 
          navigateToScreen={(screen) => navigation.navigate(screen)}
          activeScreen={'Home_AudioListing'}
          showMusicInfo={false}
        /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginRight:20
  },
  headerLeft: { display: "flex", alignItems: "center", flexDirection: "row" },
  textMorning: { fontSize: 16, lineHeight: 24, color: "#565E6CFF" },
  textUser: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "bold",
    paddingTop: 5,
    color: "#171A1F",
  },
  inputSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    width: "100%",
    padding: 10,
    borderRadius: 22,
    marginTop: 11,
  },
  textInputSearch: {
    fontSize: 16,
    color: "#C4C4C4",
    fontWeight: "400",
    marginLeft: 10,
  },
  imageSugges:{
    flex:1,width: screenWith*0.5, height:screenHeight*0.301, justifyContent:"flex-end"
  },
  textTitleCategory: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "bold",
    color: "#171A1F",
  },
  viewTitileCate:{
    display:"flex", flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginRight:20,marginBottom:10
  },
  text:{fontSize:16, lineHeight:24, fontWeight:'400', color:'#9095A0FF'},
  textDes:{
    fontSize:16, lineHeight:24, fontWeight:'400', color:'#9095A0FF',marginTop:5
  },
  textNameSugges:{display:'flex', padding:20, width:screenWith*0.5, height:screenHeight*0.085,backgroundColor:'#171A1F80'},
  textNameMainCate:{
    fontSize:16, lineHeight:24, fontWeight:'500', color:'#171A1FFF'
  },
  nameArists:{fontSize:16, lineHeight:22, fontWeight:'400', color:'#9095A0FF'},
  buttonFL:{alignItems:'center', backgroundColor:'#171A1FFF', borderRadius:18},
  textButtonFL:{fontSize:16, lineHeight:22, fontWeight:'400', color:'white', paddingHorizontal:12, paddingVertical:8},

  viewImageList:{width:screenWith*0.31,height:screenHeight*0.14, alignItems:'center', justifyContent:'center'},
  textNameList_Image:{color:'white', fontSize: 22, lineHeight:30,fontWeight:'bold', paddingBottom:15},
});
