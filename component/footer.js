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
  import React, { useState,useEffect, useContext} from "react";
  import IconFe from "react-native-vector-icons/Feather";
  import IconAnt from "react-native-vector-icons/AntDesign";
  import IconIon from "react-native-vector-icons/Ionicons";
  import IconFnA from "react-native-vector-icons/FontAwesome";

  const Footer = ({dataSongId,onPressSmallMusic, selectedPause, setSelectedPause,albumsSong,artists,navigateToScreen, activeScreen, showMusicInfo = true}) => {
    
    const getColor = (screenName) => (screenName === activeScreen ? "#21c5db" : "#565E6CFF");
    console.log("foonter");
    console.log(dataSongId);

    return (
        <View>
            {showMusicInfo && dataSongId && (
            <TouchableOpacity style ={{backgroundColor:'#171A1FFF', width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:15}}
                onPress={() => onPressSmallMusic()}
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
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'white', marginRight:8}}>{albumsSong.title}</Text>
                        
                        <IconFnA name="circle" size={10} color="white"/>
                        <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'white'}}>{artists.artistName}</Text>
                    </View>
                </View>
            </View>  

            <View style={{flexDirection:'row', alignItems:'center', gap:25}}>
                <IconAnt name="hearto" size={24} color="white"/>

                <TouchableOpacity onPress={() => setSelectedPause()}>
                    {selectedPause ? <IconFe name="pause" size={24} color="white"/> : <IconFe name="play" size={24} color="white"/>}
                </TouchableOpacity>
                
            </View>      
            </TouchableOpacity>
        )}

            {/** action footer */}
            {/* <View style={styles.footer}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigateToScreen('Home_AudioListing')}>
                    <IconAnt name="home" size={25} color={getColor("Home_AudioListing")}/>
                    <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:getColor("Home_AudioListing")}}>Home</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={{alignItems:'center'}} onPress= {() => navigateToScreen('SearchAudio')}>
                    <IconFe name="search" size={25} color={getColor("SearchAudio")}/>
                    <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:getColor("SearchAudio")}}>Search</Text>
                </TouchableOpacity> 
        
                <TouchableOpacity style={{alignItems:'center'}} onPress= {() => navigateToScreen('Feed')}>
                    <IconAnt name="switcher" size={25} color={getColor("Feed")}/>
                    <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:getColor("Feed")}}>Feed</Text>
                </TouchableOpacity>
        
                <TouchableOpacity style={{alignItems:'center'}} onPress= {() => navigateToScreen('MyLibrary')}>
                    <IconIon name="library-outline" size={25} color={getColor("MyLibrary")}/>
                    <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:getColor("MyLibrary")}}>Library</Text>
                </TouchableOpacity>
            </View> */}
        </View>
      
    )
  }

  const styles = StyleSheet.create({
 
    footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}

})


  export default Footer;