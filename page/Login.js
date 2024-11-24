import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import * as AuthSession from 'expo-auth-session';


const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const API_URL = 'https://6738930a4eb22e24fca854b6.mockapi.io/users';

  const handleLogin = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data from the server.');

      const users = await response.json();
      const user = users.find(
        (user) => user.account === username && user.password === password
      );

      if (user) {
        Alert.alert('Đăng nhập thành công!');
        setTimeout(() => {
          navigation.navigate('MainTab');
        }, 150);
      } else {
        Alert.alert('Đăng nhập thất bại', 'Tài khoản hoặc mật khẩu không đúng.');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể kết nối đến máy chủ.');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Đăng nhập nhanh qua Facebook');
  };

  const handleGoogleLogin = () => {
    Alert.alert('Đăng nhập nhanh qua Google');
  };

  // const discovery = {
  //   authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  //   tokenEndpoint: 'https://accounts.spotify.com/api/token',
  // };

  // const [request, response, promptAsync] = AuthSession.useAuthRequest({
  //   clientId: '649ad63aaf4e461795043d6d94289f8b',
  //   redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
  //   scopes: ['user-read-private', 'user-read-email', 'playlist-read-private'],
  //   usePKCE: true,
  //   responseType: 'code',
  // }, discovery);
  

  // React.useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { code } = response.params;
  //     getAccessToken(code);
  //     console.log("hh22");
  //   }
  //   console.log("hh21");
  // }, [response]);

  // const getAccessToken = async (code) => {
  //   try {
  //     const response = await axios.post('https://accounts.spotify.com/api/token', null, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         Authorization: `Basic ${btoa('649ad63aaf4e461795043d6d94289f8b' + ':' + 'c9221b80e1f84628b181da3e4025322c')}`,
  //       },
  //       params: {
  //         code,
  //         redirect_uri: AuthSession.makeRedirectUri({ useProxy: true }),
  //         grant_type: 'authorization_code',
  //       },
  //     });

  //   const data = await response.data;
  //   if (data.access_token) {

  //     const currentTime = Math.floor(Date.now() / 1000);
  //     const expireTime = currentTime + data.expires_in;

  //     await AsyncStorage.setItem('access_token', data.access_token);
  //     await AsyncStorage.setItem('refresh_token', data.refresh_token);
  //     await AsyncStorage.setItem('expire_time', expireTime.toString());
  //     navigation.navigate('MainTab');
  //   }
  // }catch (error) {
  //   console.error('Error exchanging code:', error);
  //   Alert.alert('Error', 'Failed to authenticate.');
  // }
    
  // }



  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Tài khoản</Text>
          <TextInput
            placeholder="Nhập tài khoản"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.buttonLogin} 
          onPress={() => {
            handleLogin();
          }}
        >
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>Hoặc</Text>
        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.buttonGoogle} onPress={handleGoogleLogin}>
            <Image
              source={require('../assets/image/LOGIN-Register/google.jpg')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFacebook} onPress={handleFacebookLogin}>
            <Image
              source={require('../assets/image/LOGIN-Register/face.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#555',
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
  },
  buttonLogin: {
    width: '100%',
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  divider: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#aaa',
  },
  socialLogin: {
    flexDirection: 'column',
    gap: 10,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#db4437',
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#3b5998',
    borderRadius: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default Login;
