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

  import { chart_list,songs, artists } from "../data/data_audio";
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;


  const Item = ({ title, artist, plays, duration, image,setFindSong }) => (
    <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}
        onPress={() => setFindSong()}
    >
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

    const songsByChart = songs.filter((item) => item.chart_id === route.params?.idChart);
    const charts = chart_list.find((item) => item.id === route.params?.idChart);
    const dataSongId = route.params?.dataFindId ? route.params?.dataFindId : null;

    
    const [song, setSong] = useState();

    
    const [selectedPause, setSelectedPause] = useState(false);

    useEffect(() => {
        setSelectedPause(route.params?.selectedPause);
    }, [route.params?.selectedPause]);


    // Find artist by id
    const handelArtistByID = (id) => {
        var artist= artists.find((item) => item.id === id);
        return artist;
    }

    // Find song by id
    const handelSongByID = (id) => {
        var song = songs.find((item) => item.id === id);
        setSong(song);
        navigation.navigate("PlayanAudio", 
            {   dataFindId: song, 
                idChart: route.params?.idChart, 
                selectedPause: selectedPause, 
                image: song.image, 
                artist: handelArtistByID(song.artist).artistName
            });
    }

    

    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconAnt name="left" size={25} color="#9095A0FF"/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <IconFe name="cast" size={25} color="#9095A0FF"/>
                </TouchableOpacity>
        </View>
        <ScrollView style={{marginHorizontal: 20}} showsVerticalScrollIndicator={false}>

            {/** playlist info and image */}
            <View style={styles.viewInfo}>
                {/** Image and name playlist */}
                <ImageBackground source={charts.image} style={styles.viewImageList}>
                    <Text style={styles.textNameList_Image}>{charts.title}</Text>
                    <Text style={{color:'white', fontSize: 15, fontWeight:'400'}}>{charts.location}</Text>
                </ImageBackground>

                {/**The information Playlist*/}
                <View>
                    {/**title Playlist */}
                    <Text style={styles.textTitleList}>{charts.title} - {charts.location}</Text>
                    
                    {/** Tym and total Hours */}
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginVertical:5}}>
                        <IconAnt name="hearto" size={18} color="#21c5db"/>
                        <Text style={[styles.text,{marginRight:8}]}>{charts.likes}</Text>

                        <IconFnA name="circle" size={12} color="#9095A0FF"/>
                        <Text style={styles.text}>{charts.duration}</Text>
                    </View>

                    {/** Description */}
                    <Text style={styles.text}>{charts.description}</Text>
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
                    <TouchableOpacity onPress={() => handelSongByID(songsByChart[0].id)}>
                        <Image source={require('../assets/image/Playlist Details - Audio Listing/Icon Button 2.png')} style={{width: 60, height: 60}}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/** List Audio */}
            <View style ={{marginTop:25}}>
                <FlatList
                    data={songsByChart}
                    key={item => item.id}
                    renderItem={({ item }) => (
                        <Item 
                        title={item.title} 
                        artist={handelArtistByID(item.artist).artistName} 
                        plays={item.plays} 
                        duration={item.duration} 
                        image={item.image}
                        setFindSong={() => handelSongByID(item.id)}
                         />
                    )}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
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
        paddingHorizontal:20
    },
    viewInfo:{marginVertical: 25, display:'flex', flexDirection:'row', alignItems:'center', gap:20},
    viewImageList:{width:screenWith*0.31,height:screenHeight*0.14, alignItems:'center', justifyContent:'center'},
    textNameList_Image:{color:'white', fontSize: 22, lineHeight:30,fontWeight:'bold', paddingBottom:15},
    textTitleList:{fontSize: 24, lineHeight:30,fontWeight:'bold', color:'#171A1FFF'},
    text:{fontSize: 16, lineHeight:24,fontWeight:'400', color:'#565E6CFF'},
    footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}
})