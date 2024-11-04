import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // Đổi sang createStackNavigator


import LanchScreen from './page/LaunchScreen';
import LanchScreen_Premium from './page/LaunchScreen_Premium';
import Home_AudioListing from './page/Home_AudioListing';
import Playlist_Details from './page/Playlist_Details_Screen';
import PlayanAudio from './page/Play_an_AudioScreen';
import AudioListing_SearchResultsScreen from './page/AudioListing_SearchResultsScreen';
import MyLibrary from './page/MyLibrary';
const Stack = createStackNavigator();

export default function App() {
  return (
    // <LanchScreen/>
    // <LanchScreen_Premium/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_AudioListing">
        <Stack.Screen name="Home_AudioListing" component={AudioListing_SearchResultsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Playlist_Details" component={Playlist_Details} options={{ headerShown: false }} />  
        <Stack.Screen name="AudioListing_SearchResultsScreen" component={AudioListing_SearchResultsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyLibrary" component={MyLibrary} options={{ headerShown: false }} />
        {/* MyLibrary */}
        <Stack.Screen
          name="PlayanAudio"
          component={PlayanAudio}
          options={{
            headerShown: false,
            gestureDirection: 'vertical', // Cấu hình hướng vuốt
            ...TransitionPresets.FadeFromBottomAndroid, // Hiệu ứng trượt từ dưới lên khi mở màn hình và từ trên xuống khi quay lại
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}