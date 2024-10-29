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
  
  import IconFe from "react-native-vector-icons/Feather";
  import IconAnt from "react-native-vector-icons/AntDesign";
  import IconIon from "react-native-vector-icons/Ionicons";
  import IconFnA from "react-native-vector-icons/FontAwesome";
  import IconEnty from "react-native-vector-icons/Entypo";
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;


  const songs = [
    {
      title: "FLOWER",
      artist: "Jessica Gonzalez",
      plays: 2.1,
      duration: "3:26",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 51.png"),
      id: "1",
    },
    {
      title: "Shape of You",
      artist: "Anthony Taylor",
      plays: 68,
      duration: "3:35",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 52.png"),
      id: "2",
    },
    {
      title: "Blinding Lights",
      artist: "Brian Bailey",
      plays: 93,
      duration: "4:39",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 53.png"),
      id: "3",
    },
    {
      title: "Levitating",
      artist: "Anthony Taylor",
      plays: 9,
      duration: "7:48",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 54.png"),
      id: "4",
    },
    {
      title: "Astronaut in the Ocean",
      artist: "Pedro Moreno",
      plays: 23,
      duration: "3:36",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 55.png"),
      id: "5",
    },
    {
      title: "Dynamite",
      artist: "Elena Jimenez",
      plays: 10,
      duration: "6:22",
      image: require("../assets/image/Playlist Details - Audio Listing/Image 56.png"),
      id: "6",
    },
  ];
  

  const Item = ({ title, artist, plays, duration, image }) => (
    <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}>
        <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
            {/** Image music */}
            <Image source={image} style={{width:70, height:70}}/>
            {/** The information music */}
            <View style={{flexDirection:'column'}}>
                {/** Name music */}
                <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'#171A1FFF'}}>{title}</Text>
                <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>{artist}</Text>

                {/** views and duration */}
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                    <IconFe name="play" size={16} color="#9095A0FF"/>
                    <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>{plays}M</Text>
                    
                    {/**duration */}
                    <IconFnA name="circle" size={10} color="#9095A0FF"/>
                    <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>{duration}</Text>
                </View>
            </View>
         </View>

        {/** button menu */}
        <TouchableOpacity>
            <Image source={require('../assets/image/Playlist Details - Audio Listing/Menu 5 2.png')} style={{width: 25, height: 25}}/>
        </TouchableOpacity>
    </TouchableOpacity>
)
  
  export default function Playlist_Details({navigation,route}) {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
                <TouchableOpacity onPress={() => {}}>
                    <IconAnt name="left" size={25} color="#9095A0FF"/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <IconFe name="cast" size={25} color="#9095A0FF"/>
                </TouchableOpacity>
        </View>
        <ScrollView style={{marginHorizontal: 20}}>

            {/** playlist info and image */}
            <View style={styles.viewInfo}>
                {/** Image and name playlist */}
                <ImageBackground source={require('../assets/image/Playlist Details - Audio Listing/Image 50.png')} style={styles.viewImageList}>
                    <Text style={styles.textNameList_Image}>Top 50</Text>
                    <Text style={{color:'white', fontSize: 15, fontWeight:'400'}}>Canada</Text>
                </ImageBackground>

                {/**The information Playlist*/}
                <View>
                    {/**title Playlist */}
                    <Text style={styles.textTitleList}>Top 50 - Canada</Text>
                    
                    {/** Tym and total Hours */}
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginVertical:5}}>
                        <IconAnt name="hearto" size={18} color="#21c5db"/>
                        <Text style={[styles.text,{marginRight:8}]}>1,234</Text>

                        <IconFnA name="circle" size={12} color="#9095A0FF"/>
                        <Text style={styles.text}>05:10:18</Text>
                    </View>

                    {/** Description */}
                    <Text style={styles.text}>Daily chart-toppers update</Text>
                </View>

            </View>

            {/** action play */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'30%'}}>
                    {/** button tym */}
                    <TouchableOpacity>
                        <IconAnt name="hearto" size={20} color="#21c5db" />
                    </TouchableOpacity>
                        
                    {/** button menu */}
                    <TouchableOpacity>
                        <Image source={require('../assets/image/Playlist Details - Audio Listing/Menu 5 2.png')} style={{width: 35, height: 35}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'30%'}}>
                    {/** button shuffle */}
                    <TouchableOpacity>
                        <IconEnty name="shuffle" size={24} color="#565E6CFF" />
                    </TouchableOpacity>
                        
                    {/** button play */}
                    <TouchableOpacity>
                        <Image source={require('../assets/image/Playlist Details - Audio Listing/Icon Button 2.png')} style={{width: 60, height: 60}}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/** List Audio */}
            <View style ={{marginTop:25}}>
                <FlatList
                    data={songs}
                    key={item => item.id}
                    renderItem={({ item }) => (
                        <Item title={item.title} artist={item.artist} plays={item.plays} duration={item.duration} image={item.image} />
                    )}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
  
        {/** action footer */}
        <View style={styles.footer}>
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
        marginHorizontal:20
    },
    viewInfo:{marginVertical: 25, display:'flex', flexDirection:'row', alignItems:'center', gap:20},
    viewImageList:{width:screenWith*0.31,height:screenHeight*0.14, alignItems:'center', justifyContent:'center'},
    textNameList_Image:{color:'white', fontSize: 22, lineHeight:30,fontWeight:'bold', paddingBottom:15},
    textTitleList:{fontSize: 24, lineHeight:30,fontWeight:'bold', color:'#171A1FFF'},
    text:{fontSize: 16, lineHeight:24,fontWeight:'400', color:'#565E6CFF'},
    footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}
})