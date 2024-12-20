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
import MyLibrary_Playlist from './page/MyLibrary_Playlist';

import Artist_Profile_Screen from './page/Artist_Profile_Screen';
import SearchAudio from './page/SearchAudio';
import SubscriptionPlan from './page/SubscriptionPlan_Screen';
import TabNavigation from './navigation/TabNavigationBottom';

import { AudioProvider } from './context/AudioContext';
import { MusicProvider } from './context/FloatingMusicContext';

import Login from './page/Login';
import Register from './page/Register';

import Feed from './page/Feed';

import ChatBox from './page/ChatBox';

const Stack = createStackNavigator();
export default function App() {
  return (
    <MusicProvider>
    <AudioProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LanchScreen">
          <Stack.Screen name="LanchScreen" component={LanchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home_AudioListing" component={Home_AudioListing} options={{ headerShown: false }} />
          <Stack.Screen name="Playlist_Details" component={Playlist_Details} options={{ headerShown: false, gestureDirection: 'vertical', }} />  
          <Stack.Screen name="AudioListing_SearchResultsScreen" component={AudioListing_SearchResultsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyLibrary" component={MyLibrary} options={{ headerShown: false }} />
          <Stack.Screen name="MyLibrary_Playlist" component={MyLibrary_Playlist} options={{ headerShown: false }} />

          {/* MyLibrary */}
          <Stack.Screen
            name="PlayanAudio"
            component={PlayanAudio}
            options={{
              headerShown: false,
              gestureDirection: 'vertical-inverted', // Cấu hình hướng vuốt
              ...TransitionPresets.FadeFromBottomAndroid, // Hiệu ứng trượt từ dưới lên khi mở màn hình và từ trên xuống khi quay lại
            }}
          />
          <Stack.Screen name="ArtistProfile" component={Artist_Profile_Screen} options={{ headerShown: false }} />
          <Stack.Screen name="SearchAudio" component={SearchAudio} options={{ headerShown: false }} />
          <Stack.Screen name="LanchScreen_Premium" component={LanchScreen_Premium} options={{ headerShown: false }} />
          <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} options={{ headerShown: false }} />
          <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
          <Stack.Screen name="MainTab" component={TabNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="ChatBox" component={ChatBox} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </AudioProvider>  
    </MusicProvider>  
  );
}