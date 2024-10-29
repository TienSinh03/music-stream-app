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
  Dimensions
} from "react-native";
import React, { useEffect, useState } from "react";

import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";


const screenWith = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const chart_list = [
  {
    title: "Top 50",
    location: "Canada",
    likes: 1234,
    duration: "05:10:18",
    description: "Daily chart-toppers update",
    image: require('../assets/image/Home - Audio Listing/BackGrChart_1.jpg'),
    id: "1"
  },
  {
    title: "Top 50",
    location: "USA",
    likes: 2345,
    duration: "04:30:22",
    description: "Trending hits in the USA",
    image:  require('../assets/image/Home - Audio Listing/BackGrChart_2.png'),
    id: "2"
  },
  {
    title: "Top 50",
    location: "UK",
    likes: 3456,
    duration: "06:15:40",
    description: "Popular tracks from the UK",
    image:  require('../assets/image/Home - Audio Listing/BackGrChart_3.png'),
    id: "3"
  }
];

const trending_list = [
  {
    title: "ME",
    artist:"Jessica Gonzalez",
    image: require('../assets/image/Home - Audio Listing/Image 45.png'),
    id: "1"
  },
  {
    title: "Magna nost",
    artist:"Brian Thomas",
    image: require('../assets/image/Home - Audio Listing/Image 46.png'),
    id: "2"
  },
  {
    title: "Magna nost",
    artist:"Christopher Brown",
    image: require('../assets/image/Home - Audio Listing/Image 47.png'),
    id: "3"
  }
];

const popular_artists_list = [
  {
    artist:"Elizabeth Hall",
    image: require('../assets/image/Home - Audio Listing/Image 39.png'),
    id: "1"
  },
  {

    artist:"Brian Thomas",
    image: require('../assets/image/Home - Audio Listing/Image 40.png'),
    id: "2"
  },
  {
    artist:"Anthony Taylor",
    image: require('../assets/image/Home - Audio Listing/Image 41.png'),
    id: "3"
  }
];

// Items with charts
const Item_Chart = ({ title, location, likes, duration, description, image,navigation }) => (
  
  <TouchableOpacity style={{width:'33%', marginRight:20}} onPress={() => navigation.navigate({
    name:'Playlist_Details',
    params: {title:title, location:location, likes:likes, duration:duration, description:description, image:image}
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
  <TouchableOpacity style={{width:'33%', marginRight:20}}>
    <Image source={image} style={{}}/>
    <Text style={[styles.textNameMainCate,{marginTop:5}]}>{title}</Text>
    <Text style={styles.nameArists}>{artist}</Text>
  </TouchableOpacity>
)

// Items with popular artists
const Item_popular_artists = ({artist, image}) => (

  <View style={{width:'33%', alignItems:'center', marginRight:20}}>
    <Image source={image} />
                
    <Text style={[styles.textNameMainCate,{marginVertical:8}]}>{artist}</Text>
                
    {/** button follow */}
    <TouchableOpacity style ={styles.buttonFL}>
      <Text style={styles.textButtonFL}>Follow</Text>
    </TouchableOpacity>
  </View>
) 

export default function Home_AudioListing({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginLeft: 20}}>
        {/* Header */}
        <View style={styles.header}>
          {/* Image lyrics */}
          <Image
            source={require("../assets/image/Home - Audio Listing/Image 36.png")}
          />

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
          <Text style={styles.textMorning}>Good morning</Text>
          {/* Text User */}
          <Text style={styles.textUser}>Ashley Scott</Text>

          {/* Input search */}
          <View style={styles.inputSearch}>
            <IconFe name="search" size={20} />
            <TextInput
              placeholder="What you want to listen to"
              style={styles.textInputSearch}
            />
          </View>
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
          <FlatList 
              data={chart_list}
              renderItem={({item}) =>(
                <Item_Chart 
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
          <FlatList
            data={trending_list}
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
          <FlatList
            data={popular_artists_list}
            renderItem={({item}) =>(
              <Item_popular_artists
                artist={item.artist}
                image={item.image}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={3}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/** action footer */}
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}}>
        {/** button home */}
        <TouchableOpacity style={{alignItems:'center'}}>
          <IconAnt name="home" size={25} color="#21c5db"/>
          <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#21c5db'}}>Home</Text>
        </TouchableOpacity>

        {/** button search */}
        <TouchableOpacity style={{alignItems:'center'}}>
          <IconFe name="search" size={25} color="#565E6CFF"/>
          <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Search</Text>
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
