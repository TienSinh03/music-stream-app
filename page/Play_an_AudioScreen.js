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

  import { albumsSong, artists } from "../data/data_audio";
    import Icon from "react-native-vector-icons/Feather";

    import { Audio } from 'expo-av';
    import { AudioContext } from '../context/AudioContext';
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  export default function PlayanAudio({navigation, route}) {

    const [selectedPause, setSelectedPause] = useState(route.params?.selectedPause || true);

    const [currentSong, setCurrentSong] = useState(route.params?.dataFindId);

    const songs = route.params?.songsByChart || [];

    const song = route.params?.dataFindId;

    console.log(currentSong);
    
    const albums = albumsSong.find((item) => item.id === currentSong.albums_id);
    const itemArtist = artists.find((item) => item.id === currentSong.artist);


    console.log(route.params?.previousScreen);

    const soundObject = useContext(AudioContext);


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
            setSelectedPause(!selectedPause);
        } catch (error) {
            console.log("phat"+error);
        }
    }

    const playNextSong = async() => {
        if(!songs.length) {
            console.log("No songs");
            return;
        }

        const currentIndex = songs.findIndex(s => s.id === currentSong.id);

        if (currentIndex === -1 || currentIndex === songs.length - 1) {
            console.error("No next song available.");
            return;
        }

        const nextSong = songs[currentIndex + 1];
        try {
            // dừng bài hát hiện tại
            await soundObject.current.stopAsync();
            await soundObject.current.unloadAsync();

            // load và phát bài hát tiếp theo
            await soundObject.current.loadAsync({ uri: nextSong.audio });
            await soundObject.current.playAsync();

            setCurrentSong(nextSong);
            setSelectedPause(false);
        } catch (error) {
            console.log("next"+error);
        }

    }


    useEffect(() => {
        async function loadAudio() {
            if (!route.params?.soundObject) {
                try {
                    await soundObject.current.loadAsync({ uri: song.audio });
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



    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <ImageBackground source={currentSong.image} resizeMode="cover" style={styles.imageBackground}>
                {/* Header */}
                <View style ={styles.viewHeader}>
                    <Text style={styles.textHeader}>Play</Text>
                    <IconAnt name="down" size={24} color="white"
                        onPress={() => navigation.navigate({
                            name: route.params?.previousScreen,
                            params: { 
                                ...route.params,
                                dataFindId: currentSong, 
                                albumsSong: albums, 
                                songsByChart: route.params?.songsByChart,
                                selectedPause: selectedPause, 
                                image: currentSong.image, 
                                artist: itemArtist,
                                artist_id: itemArtist.id,
                                artistImage: itemArtist.image,
                            }
                        })}                        
                    />
                </View>

                {/* View play music */}
                <View style ={styles.viewPlayMusic}>
                    <Text style={styles.nameMusic}>{currentSong.title}</Text>
                    <TouchableOpacity style={{opacity:1}} onPress={() => navigation.navigate('ArtistProfile',
                        {artist_id: itemArtist.id, artist: itemArtist.artistName, artistImage: itemArtist.image}
                    )}>
                        <Text style={styles.nameArtist}>{itemArtist.artistName}</Text>
                    </TouchableOpacity>

                    {/** Image lyric and duration */}
                    <View style ={{marginVertical:25}}>
                        <Image source={require('../assets/image/Play an Audio/Group 4.png')} resizeMode="stretch" style={{width:'100%', }}/>
                        <View style={styles.viewLyric}>
                            <Text style={{color:'white', fontSize:16, lineHeight:22, fontWeight:'400'}}>0:00</Text>
                            <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>{currentSong.duration}</Text>
                        </View>
                    </View>

                    {/** Button  */}
                    <View style ={{display:'flex', flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
                        {/** Button shuffle*/}
                        <TouchableOpacity onPress={()=>{}}>
                            <IconEnty name="shuffle" size={28} color="white" />
                        </TouchableOpacity>

                        {/** Button stepbackward*/}
                        <TouchableOpacity onPress={()=>{}}>
                            <IconAnt name="stepbackward" size={32} color="#FFFFFF80" />
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
                                <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>{song.like}</Text>
                            </View>
                            

                            {/** Button comment*/}
                            <View style ={styles.viewReviews}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <Image source={require('../assets/image/Play an Audio/F chat 1.png')} style={{width:26, height:26}}/>
                                </TouchableOpacity>
                                <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>{song.comment}</Text>
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