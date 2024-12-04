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
  import React, { useEffect, useState, useContext  } from "react";
  
  import IconFe from "react-native-vector-icons/Feather";
  import IconAnt from "react-native-vector-icons/AntDesign";
  import IconIon from "react-native-vector-icons/Ionicons";
  import IconFnA from "react-native-vector-icons/FontAwesome";
  import IconEnty from "react-native-vector-icons/Entypo";

  import { chart_list,songs, artists,albumsSong,audios } from "../data/data_audio";
  import Footer from '../component/footer';

  import { Audio } from "expo-av";
  import { AudioContext } from "../context/AudioContext";
    import { useMusic } from "../context/FloatingMusicContext";

    import { fetchWithToken } from "../utils/GetAccessToken";
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;


  const Item = ({ title, artist, plays, duration, image,setFindSong }) => (
    <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:25}}
        onPress={() => setFindSong()}
    >
        <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
            {/** Image music */}
            <Image source={{uri:image}} style={{width:70, height:70}}/>
            {/** The information music */}
            <View style={{flexDirection:'column'}}>
                {/** Name music */}
                <Text style={{fontSize: 16, lineHeight:24,fontWeight:'500', color:'#171A1FFF'}}>{title}</Text>
                <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>{artist}</Text>

                {/** views and duration */}
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                    <IconFe name="play" size={16} color="#9095A0FF"/>
                    <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>12M</Text>
                    
                    {/**duration */}
                    <IconFnA name="circle" size={10} color="#9095A0FF"/>
                    <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>{(duration/1000/60).toFixed(2)}</Text>
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

    console.log('Playlist_Details');

    const chartTop50 = route.params?.chartTop50;

    const songsByChart =  chartTop50.tracks.items || route.params?.songsByChart;
    const charts = chart_list.find((item) => item.id === route.params?.idChart);
    const dataSongId = route.params?.dataFindId ? route.params?.dataFindId : null;

    const [song, setSong] = useState();

    const { setDataSongId, setAlbumSongId, setArtistSongId, isPause, setIsPause, setActiveScreen,setSongsByChart, setAudioFooter } = useMusic();
    
    const [selectedPause, setSelectedPause] = useState(isPause);


    const soundObject = useContext(AudioContext);

    console.log("isSelcet "+selectedPause);

    useEffect(() => {
        setSelectedPause(route.params?.selectedPause);
    }, [route.params?.selectedPause]);


    // play song
    const handelPlaySong = async (audio) => {
        try {
            if (soundObject.current) {
                await soundObject.current.stopAsync(); // Dừng nhạc hiện tại
                await soundObject.current.unloadAsync(); // Gỡ nhạc hiện tại
            }
            await soundObject.current.loadAsync({ uri: 'https://drive.google.com/uc?export=download&id=1c4iAyqzRND2TnM3GO0iGh5N3DOJLwmh3' }); // Tải bài hát mới
            await soundObject.current.playAsync(); // Phát bài hát mới
        } catch (e) {
            console.log(e);
        };        
    }

    useEffect(() => {
        if (dataSongId) {
            handelPlaySong(dataSongId.preview_url);
        }
    },[dataSongId]);

    // Find song by id
    const handelSongByID = async  (track, index) => {

        setSong(track);
        setDataSongId(track);
        console.log("Track:");
        console.log(track);

        setAlbumSongId(track.album);
        console.log("albumn");
        console.log(track.album);

        setArtistSongId(track.artists[0]);
        console.log("artist");
        console.log(track.artists[0]);
        setActiveScreen('MainTab');
        setSongsByChart(songsByChart);

        console.log(index);
        console.log("audios");
        console.log(audios);

        let audio = audios.find((item) => item.id === index.toString());
        console.log("audio");
        console.log(audio);

        setAudioFooter(audio);


        try {
            if (soundObject.current) {
                await soundObject.current.stopAsync(); // Dừng nhạc hiện tại
                await soundObject.current.unloadAsync(); // Gỡ nhạc hiện tại
            }
            await soundObject.current.loadAsync({ uri: audio.url}); // Tải bài hát mới
            await soundObject.current.playAsync(); // Phát bài hát mới
        } catch (e) {

            console.log(e);
        }

        console.log("loadaa ");
        console.log(track.preview_url);

        navigation.navigate("PlayanAudio", 
            {   
                ...route.params,
                dataFindId: track, 
                songsByChart: songsByChart,
                audio: audio,
                selectedPause: selectedPause, 
                image: track.album.images[0].url, 
                artist: track.artists[0].name,
                previousScreen: 'MainTab',
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
                <ImageBackground source={{uri: chartTop50.images[0].url}} style={styles.viewImageList}>
                    {/* <Text style={styles.textNameList_Image}>{chartTop50.name}</Text>
                    <Text style={{color:'white', fontSize: 15, fontWeight:'400'}}>{charts.location}</Text> */}
                </ImageBackground>

                {/**The information Playlist*/}
                <View>
                    {/**title Playlist */}
                    <Text style={styles.textTitleList}>{chartTop50.name}</Text>
                    
                    {/** Tym and total Hours */}
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginVertical:5}}>
                        <IconAnt name="hearto" size={18} color="#21c5db"/>
                        <Text style={[styles.text,{marginRight:8}]}>1,235</Text>

                        <IconFnA name="circle" size={12} color="#9095A0FF"/>
                        <Text style={styles.text}>05:10:18</Text>
                    </View>

                    {/** Description */}
                    <Text style={styles.text}>{chartTop50.description}</Text>
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
                    <TouchableOpacity onPress={() => handelSongByID(songsByChart[0].track)}>
                        <Image source={require('../assets/image/Playlist Details - Audio Listing/Icon Button 2.png')} style={{width: 60, height: 60}}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/** List Audio */}
            <View style ={{marginTop:25}}>
                <FlatList
                    data={songsByChart}
                    key={item => item.track.id}
                    renderItem={({ item, index }) => (
                        <Item 
                        title={item.track.name} 
                        artist={item.track.artists[0].name} 
                        duration={item.track.duration_ms} 
                        image={item.track.album.images[0].url}
                        setFindSong={() => handelSongByID(item.track, index+1)}
                         />
                    )}
                    keyExtractor={item => item.track.id}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>

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
    text:{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'},
    footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}
})