import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity
  } from "react-native";
  
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
      {/* Background Image */}
        <ImageBackground source={require('../assets/image/Launch Screen - Premium/Image 112.png')} resizeMode="cover" style={styles.imageBackground}>
         {/* Icon Header */}
          <Image source={require('../assets/image/Launch Screen/Image 33.png')} style ={styles.imageIcon}/>
  
          {/* Title header */}
          <Text style={styles.titleHeader}>Welcome to {'\n'} Premium</Text>

          {/* Title header */}
          <Text style={{textAlign:'center', fontSize:45, color:'white', fontWeight:'bold'}}>...</Text>
  
          {/* Button Create an account */}
          <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Start listening</Text>
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
      marginTop: '100%',
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
      borderRadius:26,
      marginTop: '10%',
      backgroundColor: '#171A1F'
    },

    textButton:{
      fontSize:18,
      fontWeight:'400',
      color: 'white'
    }
  
  
  
    
  });
  