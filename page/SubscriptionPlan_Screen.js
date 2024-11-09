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
    Dimensions
  } from "react-native";
  import React, { useEffect, useState } from "react";

  const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
  export default function SubscriptionPlan({navigation,route}) {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/image/Subscription Plans/Image 116.png')} style={styles.imageBackground}>
                
            </ImageBackground>
        </SafeAreaView>
    )
    
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    imageBackground:{
        width: screenWidth, height: screenHeight,
        paddingTop: StatusBar.currentHeight || 0,
        resizeMode: 'contain',
    }
  });