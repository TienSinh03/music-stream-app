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

import { songs } from "../data/data_audio";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function SearchAudio({ navigation, route,}) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.inputSearch}>
        <IconFe name="search" size={20} />
        <TextInput
          placeholder="What you want to listen to"
          style={styles.textInputSearch}
        />
      </View>

      <ScrollView style={{marginHorizontal:20}} showsVerticalScrollIndicator={false}>

      </ScrollView>

      {/** action footer */}
      <View style={styles.footer}>
          {/** button home */}
          <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.popToTop()}>
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
    backgroundColor: "#FFFFFF",
    paddingTop: StatusBar.currentHeight || 0,
  },
  inputSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    padding: 10,
    borderRadius: 22,
    marginTop: 11,
    marginHorizontal: 20,},
  textInputSearch: {
    fontSize: 16,
    color: "#C4C4C4",
    fontWeight: "400",
    marginLeft: 10,
  },
  footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}

});
