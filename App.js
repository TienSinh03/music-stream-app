import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LanchScreen from './page/LaunchScreen';
import LanchScreen_Premium from './page/LaunchScreen_Premium';
import Home_AudioListing from './page/Home_AudioListing';

export default function App() {
  return (
    // <LanchScreen/>
    // <LanchScreen_Premium/>
    <Home_AudioListing/>
  );
}