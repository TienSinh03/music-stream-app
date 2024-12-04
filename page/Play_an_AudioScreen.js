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
  import React, { useEffect, useState,useContext  } from "react";
  import { CommonActions } from '@react-navigation/native';

  
  import IconFe from "react-native-vector-icons/Feather";
  import IconAnt from "react-native-vector-icons/AntDesign";
  import IconIon from "react-native-vector-icons/Ionicons";
  import IconFnA from "react-native-vector-icons/FontAwesome";
  import IconEnty from "react-native-vector-icons/Entypo";

  import { albumsSong, artists,audios } from "../data/data_audio";
    import Icon from "react-native-vector-icons/Feather";

    import { Audio } from 'expo-av';
    import { AudioContext } from '../context/AudioContext';
    import { useMusic } from "../context/FloatingMusicContext";

    import { fetchWithToken } from "../utils/GetAccessToken";
  


  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  export default function PlayanAudio({navigation, route}) {

    const [selectedPause, setSelectedPause] = useState(route.params?.selectedPause || true);

    const [currentSong, setCurrentSong] = useState(route.params?.dataFindId);
    const [currentAudio, setCurrentAudio] = useState(route.params?.audio);
    const [artistBySong, setArtistBySong] = useState();

    const songs = route.params?.songsByChart || [];

    const song = route.params?.dataFindId;
    

    console.log(route.params?.previousScreen);

    const soundObject = useContext(AudioContext);
    const {setIsPause, setDataSongId, setAlbumSongId, setArtistSongId, setAudioFooter} = useMusic();

    const handlePlayPause = async () => {
        try {

            const status = await soundObject.current.getStatusAsync();
        
            if (!status.isLoaded) {
                console.log("Sound is not loaded yet.");
                return;
            }

            if (selectedPause) {
                await soundObject.current.pauseAsync();
            } else {
                await soundObject.current.playAsync();
            }
            setIsPause(!selectedPause);
            setSelectedPause(!selectedPause);
        } catch (error) {
            console.log("phat"+error);
        }
    }

    // play next song
    const playNextSong = async() => {
        if(!songs.length) {
            console.log("No songs");
            return;
        }

        

        const currentIndex = audios.findIndex(s => s.id === currentAudio.id);
        console.log("index"+currentIndex);

        if (currentIndex === -1 || currentIndex === songs.length - 1) {
            console.error("No next song available.");
            return;
        }

        const nextSong = audios[currentIndex + 1];
        const nextSong_2 = songs[currentIndex + 1];

        // console.log("nextSong"+nextSong.track.name);
        try {
            // dừng bài hát hiện tại
            await soundObject.current.stopAsync();
            await soundObject.current.unloadAsync();

            // load và phát bài hát tiếp theo
            await soundObject.current.loadAsync({ uri: nextSong.url });
            await soundObject.current.playAsync();

            setCurrentSong(nextSong_2.track);
            setCurrentAudio(nextSong);
            setAudioFooter(nextSong);

            setDataSongId(nextSong_2.track);

            setSelectedPause(true);
        } catch (error) {
            console.log("next"+error);
        }

    }

    // play the back song
    const playBackSong = async() => {
        if(!songs.length) {
            console.log("No songs");
            return;
        }

        // const currentIndex = songs.findIndex(s => s.track.id === currentSong.id);
        const currentIndex = audios.findIndex(s => s.id === currentAudio.id);


        if (currentIndex === -1 || currentIndex === 0) {
            console.error("No next song available.");
            return;
        }

        const previousSong = audios[currentIndex + 1];
        const previousSong_2  = songs[currentIndex - 1];
        try {
            
            // dừng bài hát hiện tại
            await soundObject.current.stopAsync();
            await soundObject.current.unloadAsync();

            // Tải và phát bài hát trước đó
            await soundObject.current.loadAsync({uri: previousSong.url});
            await soundObject.current.playAsync();

            setCurrentSong(previousSong_2.track);
            setCurrentAudio(previousSong);
            setAudioFooter(previousSong);

            setDataSongId(previousSong_2.track);
            setSelectedPause(true);
        } catch (e) {
            console.log("back"+e);
        }
    }    

    useEffect(() => {
        console.log(route.params.audio);
        async function loadAudio() {
            if (!route.params?.soundObject) {
                try {
                    await soundObject.current.loadAsync({ uri: currentAudio.url });
                    await soundObject.current.playAsync();
                } catch (error) {
                    console.log("load"+error);
                }
            }
        }
        loadAudio();

        // Không unload soundObject
        return () => {};
    }, []);


    // get the artist by id
    const getArtistById = async(id) => {
        const url = `https://api.spotify.com/v1/artists/${id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetchWithToken(url, options);
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        async function loadArtist() {
            const artist = await getArtistById(currentSong.artists[0].id);
            setArtistBySong(artist);
        }
        loadArtist();
        console.log('Artist');
        console.log(artistBySong);
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <ImageBackground source={{uri: currentSong.album.images[0].url}} resizeMode="cover" style={styles.imageBackground}>
                {/* Header */}
                <View style ={styles.viewHeader}>
                    <Text style={styles.textHeader}>Play</Text>
                    <IconAnt name="down" size={24} color="white"
                        onPress={() => navigation.navigate({
                            name: route.params?.previousScreen,
                            params: { 
                                ...route.params,
                                dataFindId: currentSong, 
                                albumsSong: currentSong.album, 
                                songsByChart: songs,
                                selectedPause: selectedPause, 
                                image: currentSong.album.images[0].url, 
                                artist: artistBySong,
                                artist_id:  artistBySong.id,
                                artistImage:  artistBySong.images[0].url,
                            }
                        })}                        
                    />
                </View>

                {/* View play music */}
                <View style ={styles.viewPlayMusic}>
                    <Text style={styles.nameMusic}>{currentSong.name}</Text>
                    <TouchableOpacity style={{opacity:1}} onPress={() => navigation.navigate('ArtistProfile',
                        {artist: artistBySong}
                    )}>
                        <Text style={styles.nameArtist}>{currentSong.artists[0].name}</Text>
                    </TouchableOpacity>

                    {/** Image lyric and duration */}
                    <View style ={{marginVertical:25}}>
                        <Image source={require('../assets/image/Play an Audio/Group 4.png')} resizeMode="stretch" style={{width:'100%', }}/>
                        <View style={styles.viewLyric}>
                            <Text style={{color:'white', fontSize:16, lineHeight:22, fontWeight:'400'}}>0:00</Text>
                            <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>{(currentSong.duration_ms/1000/60).toFixed(2)}</Text>
                        </View>
                    </View>

                    {/** Button  */}
                    <View style ={{display:'flex', flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                        {/** Button shuffle*/}
                        <TouchableOpacity onPress={()=>{}}>
                            <IconEnty name="shuffle" size={28} color="white" />
                        </TouchableOpacity>

                        {/** Button stepbackward*/}
                        <TouchableOpacity onPress={playBackSong}>
                            <IconAnt name="stepbackward" size={32} color="#FFFFFF" />
                        </TouchableOpacity>

                        {/** Button play*/}
                        <TouchableOpacity onPress={handlePlayPause}>
                            {selectedPause ? <IconFnA name="pause-circle" size={90} color="white" /> : <IconFnA name="play-circle" size={90} color="white" /> } 
                        </TouchableOpacity>

                        {/** Button stepforward*/}
                        <TouchableOpacity onPress={playNextSong}>
                            <IconAnt name="stepforward" size={32} color="white" />
                        </TouchableOpacity>

                        {/** Button menu*/}
                        <TouchableOpacity onPress={()=>{}}>
                            <IconFnA name="ellipsis-h" size={28} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/** View reviews and download  */}
                    <View style ={[styles.viewReviews, {marginVertical:47}]}>
                        
                        {/** View reviews */}
                        <View style ={styles.viewReviews}>

                            {/** Button tym*/}
                            <View style ={styles.viewReviews}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <IconAnt name="hearto" size={26} color="white" />
                                </TouchableOpacity>
                                <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>12</Text>
                            </View>
                            

                            {/** Button comment*/}
                            <View style ={styles.viewReviews}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <Image source={require('../assets/image/Play an Audio/F chat 1.png')} style={{width:26, height:26}}/>
                                </TouchableOpacity>
                                <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>450</Text>
                            </View>
                        </View>
                        

                        {/** Button menu*/}
                        <TouchableOpacity onPress={()=>{}}>
                            <IconAnt name="upload" size={26} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>    
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'space-between'
    },
    viewHeader:{
        display:'flex', 
        alignItems:'center', 
        justifyContent:'space-between', 
        flexDirection:'row', 
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    textHeader :{
        fontSize: 20,
        lineHeight: 22,
        color: 'white',
        fontWeight: '400',   
    },
    viewPlayMusic:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    nameMusic:{
        fontSize: 22,
        lineHeight: 30,
        color: 'white',
        fontWeight: '700', 
    },
    nameArtist:{
        fontSize: 18,
        lineHeight: 25,
        color: '#DEE1E6FF',
        fontWeight: '400',
    },
    viewLyric:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 2,
    },
    viewReviews:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap: 20,
    }
});