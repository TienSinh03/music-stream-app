import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('https://didongviet.vn/dchannel/wp-content/uploads/2023/08/hinh-nen-3d-hinh-nen-iphone-dep-3d-didongviet-5-576x1024.jpg'); // Default avatar

  const API_URL = 'https://6738930a4eb22e24fca854b6.mockapi.io/users';

  const handleRegister = async () => {
    if (!username || !password || !phone || !email) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    try {
      const response = await fetch(API_URL);
      const users = await response.json();

      const userExists = users.some((user) => user.account === username);
      if (userExists) {
        Alert.alert('Lỗi', 'Tên tài khoản đã tồn tại.');
        return;
      }

      // Add new user to the API
      const newUser = { account: username, password, phone, mail: email, avatar };
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      Alert.alert('Thành công', 'Đăng ký tài khoản thành công!');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1500);
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể kết nối đến API.');
      console.error(error);
    }
  };

  const handleImagePicker = () => {
    launchImageLibrary(
      { mediaType: 'photo', includeBase64: false, maxHeight: 200, maxWidth: 200 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0].uri;
          setAvatar(selectedImage);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký Tài Khoản</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Tài khoản</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tài khoản"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={
            avatar
              ? { uri: avatar }
              : require('../assets/icon.png') // Replace with your placeholder image
          }
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.buttonUpload} onPress={handleImagePicker}>
          <Text style={styles.buttonUploadText}>Tải Hình Lên</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  formGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  buttonUpload: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonUploadText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonRegister: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
