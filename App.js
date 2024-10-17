import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LanchScreen from './page/LaunchScreen';
import LanchScreen_Premium from './page/LaunchScreen_Premium';

export default function App() {
  return (
    // <LanchScreen/>
    <LanchScreen_Premium/>
  );
}