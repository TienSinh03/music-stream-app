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
  import React, { useContext, useEffect, useState } from "react";
  
  import IconFe from "react-native-vector-icons/Feather";
  import IconAnt from "react-native-vector-icons/AntDesign";
  import IconIon from "react-native-vector-icons/Ionicons";
  import IconFnA from "react-native-vector-icons/FontAwesome";
  import IconEnty from "react-native-vector-icons/Entypo";

  import { chart_list,songs, artists, albumsSong } from "../data/data_audio";
  import { getTrackByArtist } from "../component/getDataApi";
  import { AudioContext } from "../context/AudioContext";

  import Footer from '../component/footer';
import { useMusic } from "../context/FloatingMusicContext";
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const Item = ({ title, artist, plays, duration, image,setFindSong }) => (
    <TouchableOpacity style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginBottom:15}}
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

const Item_Albumn = ({title, artist, image, navigation}) => (
    <TouchableOpacity style={{width:'30%', marginRight:20}}>
      <Image source={image} style={{}}/>
      <Text style={[styles.textNameMainCate,{marginTop:5}]}>{title}</Text>
      <Text style={styles.nameArists}>{artist}</Text>
    </TouchableOpacity>
  )

  export default function Artist_Profile_Screen({ navigation,route }) {

    const soundObject = useContext(AudioContext);
    const { setDataSongId, setAlbumSongId, setArtistSongId, isPause } = useMusic();

    const [songByArtists, setSongByArtists] = useState([]);
    const dataArtist = route.params?.artist ? route.params?.artist : null;

    const [song, setSong] = useState();

    const [selectedPause, setSelectedPause] = useState(isPause);

    // expand the about
    const [isExpanded, setExpand] = useState(true);
    

    // function view more description
    const viewMoreDescription = () => {
        setExpand(!isExpanded);
    }


    useEffect(() => {
        setSelectedPause(route.params?.selectedPause);
    }, [route.params?.selectedPause]);


    // get api track by artist
    useEffect(() => {
        const fetchTrackByArtist =  async () => {
            const data = await getTrackByArtist(dataArtist.id);
            setSongByArtists(data.tracks);
        }
        fetchTrackByArtist();
    },[]);



    // Find song by id
    const handelSongByID = async (track) => {
        setSong(track);

        setDataSongId(track);
        setAlbumSongId(track.album);
        setArtistSongId(track.artists[0]);

        try {
            if(soundObject.current) {
                await soundObject.current.stopAsync(); // stop the current song
                await soundObject.current.unloadAsync(); // unload the current song
            } 
            await soundObject.current.loadAsync({uri: track.preview_url}); // load the preview
            await soundObject.current.playAsync(); // play the preview
        } catch (error) {
            console.log("error", error);
        }

        navigation.navigate("PlayanAudio", 
            {   
                ...route.params,
                dataFindId: track, 
                songsByChart:songByArtists,
                selectedPause: selectedPause, 
                image: track.album.images[0].url, 
                artist:track.artists[0].name,
                previousScreen: 'MainTab',
                typeScreen: 'ArtistProfile'
            });
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconAnt name="left" size={25} color="#9095A0FF"/>
                    </TouchableOpacity>
            </View>
        <ScrollView style={{marginLeft:20}} showsVerticalScrollIndicator={false}>

            {/** artist info */}
            <View style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center', marginTop:20, marginRight:20}}>
                <Image source={{uri:dataArtist.images[0].url}} style={{width:screenWith*0.54, height:screenHeight*0.238, borderRadius:120}}/>
                <View style={{marginVertical:25}}>
                    <Text style={{textAlign:'center',fontSize:40,lineHeight:48, fontWeight:'bold', color:'#171A1FFF'}}>{dataArtist.name}</Text>
                    <Text style={{textAlign:'center',fontSize:18, fontWeight:'400', color:'#9095A0FF'}}>{dataArtist.followers.total} Followers</Text>
                </View>
            </View>

            {/** action play */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginRight:20}}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'40%'}}>
                    {/** button follow */}
                    <TouchableOpacity style ={styles.buttonFL}>
                        <Text style={styles.textButtonFL}>Follow</Text>
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
                    <TouchableOpacity onPress={() => handelSongByID(songByArtists[0])}>
                        <Image source={require('../assets/image/Playlist Details - Audio Listing/Icon Button 2.png')} style={{width: 60, height: 60}}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/** List Audio */}
            <View style ={{marginTop:15, marginRight:20}}>
                <FlatList
                    data={songByArtists}
                    renderItem={({ item }) => (
                        <Item 
                        key={item.id}
                        title={item.name} 
                        artist={item.artists[0].name} 
                        duration={item.duration_ms} 
                        image={item.album.images[0].url}
                        setFindSong={() => handelSongByID(item)}
                         />
                    )}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>

            {/**Albumns */}
            <View style ={{}}>
                <Text style={{fontSize: 22, lineHeight:30,fontWeight:'700', color:'#171A1FFF', paddingBottom:5}}>Albums</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FlatList
                    data={albumsSong}
                    renderItem={({item}) =>(
                        <Item_Albumn
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

            {/** About */}
            <View style={{marginTop:25, marginRight:20}}>
                <Text style={{fontSize: 22, lineHeight:30,fontWeight:'700', color:'#171A1FFF'}}>About</Text>
                <Image source={require('../assets/image/Artist Profile/Image 73.png')} style={{marginVertical:10,width:'100%', height: screenHeight*0.18,borderRadius:6}}/>
                <Text style={{fontSize:17, lineHeight:24, fontWeight:'400', color:'#9095A0FF'}}>
                    {isExpanded ? 
                    'Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor consequat voluptate duis irure. Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit. Do ea n '
                    : 'Do in cupidatat aute et in officia aute laboris est Lorem est nisi dolor consequat voluptate duis irure. Veniam quis amet irure cillum elit aliquip sunt cillum cillum do aliqua voluptate ad non magna elit. Do ea nisi labore fugiat, excepteur minim velit reprehenderit in. Ex qui eiusmod veniam deserunt magna, fugiat pariatur cupidatat ut nostrud dolore elit. Excepteur labore tempor dolore cillum ex aliqua, incididunt culpa non occaecat quis. Sunt laboris consectetur magna incididunt duis ipsum, '}                    
                </Text>

                <TouchableOpacity style={{opacity:1, marginVertical:20}} onPress={() => viewMoreDescription()}>
                    <Text style={{textAlign:'center',fontSize:18, lineHeight:24, fontWeight:'400', color:'#21c5db'}}>{isExpanded ? 'View more' : 'View less'}</Text>
                </TouchableOpacity>
            </View>

            {/**Fan also like */}
            <View style ={{marginBottom:25}}>
                <Text style={{fontSize: 22, lineHeight:30,fontWeight:'700', color:'#171A1FFF', paddingBottom:5}}>Fan also like</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <FlatList
                    data={albumsSong}
                    renderItem={({item}) =>(
                        <Item_Albumn
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
    buttonFL:{alignItems:'center', borderColor:'#9095A0FF', borderRadius:22, borderWidth:1},
    textButtonFL:{fontSize:16, lineHeight:22, fontWeight:'400', color:'#9095A0FF', paddingHorizontal:18, paddingVertical:10},
    textNameMainCate:{
        fontSize:16, lineHeight:24, fontWeight:'500', color:'#171A1FFF'
      },
      nameArists:{fontSize:16, lineHeight:22, fontWeight:'400', color:'#9095A0FF'},
    footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}
})