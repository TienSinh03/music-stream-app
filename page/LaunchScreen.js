import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";

import {get_Token} from '../utils/GetAccessToken';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App({navigation}) {

  
// console.log(AsyncStorage.getItem("access_token"));
  useEffect(() => {
    get_Token();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    {/* Background Image */}
      <ImageBackground source={require('../assets/image/Launch Screen/Image 30.png')} resizeMode="cover" style={styles.imageBackground}>
       {/* Icon Header */}
        <Image source={require('../assets/image/Launch Screen/Image 33.png')} style ={styles.imageIcon}/>

        {/* Title header */}
        <Text style={styles.titleHeader}>Your music {'\n'} Your{'\n'}artists</Text>

        {/* Button Create an account */}
        <TouchableOpacity style={[styles.button, styles.buttonCreateAc]}>
            <Text style={[styles.textButton,{ color: 'white'}]}>Create an account</Text>
        </TouchableOpacity>

        {/* Button Already have an account */}
        <TouchableOpacity style={[styles.button, styles.buttonAlready]} onPress={() =>navigation.navigate('MainTab')}>
            <Text style={[styles.textButton,{ color: '#9d45efff'}]}>l already have an account</Text>
        </TouchableOpacity>

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
    alignItems: "center",
  },
  imageIcon:{
    marginTop: 60,
  },
  titleHeader:{
    marginTop: '70%',
    textAlign:'center',
    fontSize:40,
    lineHeight: 56,
    fontWeight: 'bold', 
    color: 'white'
  },
  button: { 
    alignItems: "center",
    paddingVertical: 15,
    width:'90%',
    borderRadius:26
  },
  buttonCreateAc:{
    marginTop: '25%',
    backgroundColor: "#171A1FFFF",
  },
  buttonAlready:{
    marginTop: 20,
    backgroundColor: "#F7F1FEFF",
  },
  textButton:{
    fontSize:18,
    fontWeight:'400',
  }



  
});
