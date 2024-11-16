import { get_Token, fetchWithToken } from "../utils/GetAccessToken";

// fetch the top 50 songs from spotify api
export const getTop50= async (PLAYLIST_ID_TOP) => {
    const url = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID_TOP}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    const response = await fetchWithToken(url, options);
    const data = await response.json();
    return data;
  }


  export const getPopAlbums = async (ALBUMN_POP_ID) => {
    const url = `https://api.spotify.com/v1/albums/${ALBUMN_POP_ID}`;
    const options = {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetchWithToken(url, options);
    const data = await response.json();
    return data;
  }

  export const getPopArtists = async (ARTISTS_POP_ID) => {
    const url = `https://api.spotify.com/v1/artists/${ARTISTS_POP_ID}`;
    const options = {
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetchWithToken(url, options);
    const data = await response.json();
    return data;
}

  export const getTrackByArtist = async (artist) => {
    const url = `https://api.spotify.com/v1/artists/${artist}/top-tracks`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetchWithToken(url, options);
    const data = await response.json();
    return data;
  }

