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
import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";
import IconFnA from "react-native-vector-icons/Octicons";
import IconEnty from "react-native-vector-icons/Entypo";

import Footer from '../component/footer';

import { songs, artists,albumsSong } from "../data/data_audio";
import { getDataSearchByQuery } from "../component/getDataApi";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function SearchAudio({ navigation, route,}) {

    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    // auto focus text input
    const textInputRef = useRef(null);
    useEffect(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }, []);

    const handleSearch = async (text) => {
        setInputText(text);

        const trimmedInput = text.trim().toLowerCase();
        
        if (trimmedInput === '') {
            setSearchResults([]);
            return;
        }

        const results = await getDataSearchByQuery(trimmedInput);

        const combinedResults = [
          ...results.tracks.items,
          ...results.albums.items,
          ...results.artists.items
        ];

        // Kết hợp kết quả
        setSearchResults(combinedResults);
    };

    useEffect(() => {
        handleSearch(inputText);
    },[inputText]);

    console.log(searchResults);

    const handleEnterSearchResults = () => {
        navigation.navigate('AudioListing_SearchResultsScreen', { text: inputText });
    }



  return (
    <SafeAreaView style={styles.container}>

      <View style={[styles.inputSearch, isFocused && styles.inputSearchFocused]}>
        <IconFe name="search" size={20} />
        <TextInput
          ref={textInputRef}
          placeholder="What you want to listen to"
          style={styles.textInputSearch}
          // onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(true)}
          value={inputText}
          onChangeText={handleSearch}
          returnKeyType="done"
          onSubmitEditing={handleEnterSearchResults}
        />

        {inputText.length > 0 ?
            <TouchableOpacity onPress={() => {setInputText(''), setSearchResults([])}}>
                <IconFnA name="x-circle-fill" size={20} style={styles.cancelIcon} />
            </TouchableOpacity>
        : null}
      </View>

      <ScrollView style={{marginHorizontal:20}} showsVerticalScrollIndicator={false}>
        <View style={{marginTop:20}}>
        <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Text key={item.id} style={styles.resultText}>
                        {item.name}
                    </Text>
                )}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={false}
                ListEmptyComponent={<Text style={{textAlign:'center', marginTop:20}}>No results found</Text>}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight || 0,
  },
  inputSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    paddingHorizontal: 10,
    borderRadius: 22,
    marginTop: 11,
    marginHorizontal: 20,
    backgroundColor: 'white', 
 },
  textInputSearch: {
    fontSize: 16,
    color: "#171A1FFF",
    fontWeight: "400",
    marginLeft: 10,
    width: "85%",
  },
  inputSearchFocused: {
    borderColor: '#A0E4ED', 
    elevation: 8,
  },
  cancelIcon: {
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
},
  footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}

});
