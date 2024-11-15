import AsyncStorage from "@react-native-async-storage/async-storage";

const CLIENT_ID = "649ad63aaf4e461795043d6d94289f8b";
const CLIENT_SECRET = "c9221b80e1f84628b181da3e4025322c";
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

        console.log(data.access_token );

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
    options.headers = {
      ...options.headers,
      "Authorization": `Bearer ${access_token}`
    }

    return fetch(URL, options);
  }

