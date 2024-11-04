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

  import { albumsSong } from "../data/data_audio";
    import Icon from "react-native-vector-icons/Feather";
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  export default function PlayanAudio({navigation, route}) {

    const [selectedPause, setSelectedPause] = useState(route.params?.selectedPause);

    const song = route.params?.dataFindId;

    const albums = albumsSong.find((item) => item.id === song.albums_id);

    return (
        <SafeAreaView style={styles.container}>
            {/* Background Image */}
            <ImageBackground source={song.image} resizeMode="cover" style={styles.imageBackground}>
                {/* Header */}
                <View style ={styles.viewHeader}>
                    <Text style={styles.textHeader}>Play</Text>
                    <IconAnt name="down" size={24} color="white" onPress={() => navigation.navigate({
                        name: 'Playlist_Details',
                        params: { dataFindId: song, idChart: route.params?.idChart, albumsSong: albums, selectedPause: selectedPause, image: song.image, artist: route.params?.artist},
                    })}/>
                </View>

                {/* View play music */}
                <View style ={styles.viewPlayMusic}>
                    <Text style={styles.nameMusic}>{song.title}</Text>
                    <Text style={styles.nameArtist}>{route.params?.artist}</Text>

                    {/** Image lyric and duration */}
                    <View style ={{marginVertical:25}}>
                        <Image source={require('../assets/image/Play an Audio/Group 4.png')} resizeMode="stretch" style={{width:'100%', }}/>
                        <View style={styles.viewLyric}>
                            <Text style={{color:'white', fontSize:16, lineHeight:22, fontWeight:'400'}}>0:00</Text>
                            <Text style={{color:'#9095A0FF', fontSize:16, lineHeight:22, fontWeight:'400'}}>{song.duration}</Text>
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
                        <TouchableOpacity onPress={()=>setSelectedPause(!selectedPause)}>
                            {selectedPause ? <IconFnA name="pause-circle" size={90} color="white" /> : <IconFnA name="play-circle" size={90} color="white" /> } 
                        </TouchableOpacity>

                        {/** Button stepforward*/}
                        <TouchableOpacity onPress={()=>{}}>
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