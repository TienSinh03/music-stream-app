import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LanchScreen from './page/LaunchScreen';
import LanchScreen_Premium from './page/LaunchScreen_Premium';
import Home_AudioListing from './page/Home_AudioListing';
import Playlist_Details from './page/Playlist_Details_Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <LanchScreen/>
    // <LanchScreen_Premium/>
    // <Home_AudioListing/>
    // <Playlist_Details/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home_AudioListing" component={Home_AudioListing} options = {{headerShown:false}} />
        <Stack.Screen name="Playlist_Details" component={Playlist_Details}  options = {{headerShown:false}} />
        {/* <Stack.Screen name="ScreenAPI_03" component={ScreenAPI_03}  options = {{headerShown:false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}