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
  
  import { chart_list, songs } from "../data/data_audio";
  
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  
  export default function AudioListing_SearchResultsScreen({ navigation, route }) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.inputSearch}>
                <IconFe name="search" size={20} />
                <TextInput
                placeholder="What you want to listen to"
                style={styles.textInputSearch}
                />
          </View>
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
  
          <TouchableOpacity style={styles.artistRow}>
            <Image
            
              source={require("../assets/image/Audio Listing - Search Results/Image 85.png")}
              resizeMode="stretch"
              style={styles.artistImage}
            />
            <View style={styles.artistInfo}>
              <Text style={styles.artistName}>Mer Watson</Text>
              <View style={styles.followersRow}>
                <IconAnt name="user" size={15} style={styles.userIcon} />
                <Text style={styles.followersText}>1.234K Followers</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </TouchableOpacity>
  
          <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}>
            <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                    {/** Image music */}
                    <Image  source={require("../assets/image/Audio Listing - Search Results/Image 84.png")} style={{width:70, height:70}}/>
                    {/** The information music */}
                    <View style={{flexDirection:'column'}}>
                        {/** Name music */}
                        <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'#171A1FFF'}}>title</Text>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>artist</Text>
                        {/** views and duration */}
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                            <IconFe name="play" size={16} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>playsM</Text>
                            
                            {/**duration */}
                            <IconFnA name="circle" size={10} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>duration</Text>
                        </View>
                    </View>
            </View>
                {/** button menu */}
            <TouchableOpacity>
                <Image source={require('../assets/image/Playlist Details - Audio Listing/Menu 5 2.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}>
            <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                    {/** Image music */}
                    <Image  source={require("../assets/image/Audio Listing - Search Results/Image 87.png")} style={{width:70, height:70}}/>
                    {/** The information music */}
                    <View style={{flexDirection:'column'}}>
                        {/** Name music */}
                        <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'#171A1FFF'}}>title</Text>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>artist</Text>
                        {/** views and duration */}
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                            <IconFe name="play" size={16} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>playsM</Text>
                            
                            {/**duration */}
                            <IconFnA name="circle" size={10} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>duration</Text>
                        </View>
                    </View>
            </View>
                {/** button menu */}
            <TouchableOpacity>
                <Image source={require('../assets/image/Playlist Details - Audio Listing/Menu 5 2.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>


        </TouchableOpacity>

        <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}>
            <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                    {/** Image music */}
                    <Image  source={require("../assets/image/Audio Listing - Search Results/Image 88.png")} style={{width:70, height:70}}/>
                    {/** The information music */}
                    <View style={{flexDirection:'column'}}>
                        {/** Name music */}
                        <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'#171A1FFF'}}>title</Text>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>artist</Text>
                        {/** views and duration */}
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                            <IconFe name="play" size={16} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>playsM</Text>
                            
                            {/**duration */}
                            <IconFnA name="circle" size={10} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>duration</Text>
                        </View>
                    </View>
            </View>
                {/** button menu */}
            <TouchableOpacity>
                <Image source={require('../assets/image/Playlist Details - Audio Listing/Menu 5 2.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}>
            <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                    {/** Image music */}
                    <Image  source={require("../assets/image/Audio Listing - Search Results/Image 88.png")} style={{width:70, height:70}}/>
                    {/** The information music */}
                    <View style={{flexDirection:'column'}}>
                        {/** Name music */}
                        <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'#171A1FFF'}}>title</Text>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>artist</Text>
                        {/** views and duration */}
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                            <IconFe name="play" size={16} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>playsM</Text>
                            
                            {/**duration */}
                            <IconFnA name="circle" size={10} color="#9095A0FF"/>
                            <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>duration</Text>
                        </View>
                    </View>
            </View>
                {/** button menu */}
            <TouchableOpacity>
                <Image source={require('../assets/image/Playlist Details - Audio Listing/Menu 5 2.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
        </TouchableOpacity>

        </ScrollView>
  
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <IconAnt name="home" size={25} color="#21c5db" />
            <Text style={styles.footerTextActive}>Home</Text>
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
  });
  