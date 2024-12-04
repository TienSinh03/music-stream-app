import AsyncStorage from "@react-native-async-storage/async-storage";

const CLIENT_ID = "1b97400f08ab46b8a9b0bff2b8a8c6d2";
const CLIENT_SECRET = "15411a1ed88a4c789ecaa47f4f687f85";
const REDIRECT_URI = "exp://192.168.1.13:8081";
 
export const get_Token = async () => {
    let authorization = {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };
    try {
      let response = await fetch("https://accounts.spotify.com/api/token", authorization);
      let data = await response.json();
      if(response.ok) {

        const currnentTime = Math.floor(Date.now() / 1000);
        const expireTime = currnentTime + data.expires_in;

        await AsyncStorage.setItem("token", data.access_token);
        await AsyncStorage.setItem("expireTime", expireTime.toString());

        

        console.log("saved token successfully");
      } else {
        console.log("error save token");
      }
    } catch (err) {
      console.log(err);
    }
    
  }


  // xử dụng khi cần get api token
  export const fetchWithToken= async (URL, options) => {
    const expireTime = await AsyncStorage.getItem("expireTime");
    const currentTime = Math.floor(Date.now() / 1000);

    if(!expireTime || currentTime > parseInt(expireTime)) {
      console.log("Token hết hạn, làm mới...");

      await get_Token();
    }

    const access_token = await AsyncStorage.getItem("token");
    console.log(access_token );
    options.headers = {
      ...options.headers,
      "Authorization": `Bearer ${access_token}`
    }

    return fetch(URL, options);
  }

