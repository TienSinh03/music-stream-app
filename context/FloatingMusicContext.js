import React, { createContext, useState, useContext } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [songId, setDataSongId] = useState(null); // Thông tin bài hát
  const [isPause, setIsPause] = useState(true); // Trạng thái phát/dừng
  const [artistSongId, setArtistSongId] = useState(); //
  const [albumSongId, setAlbumSongId] = useState(); //
  const [activeScreen, setActiveScreen] = useState(); 
  const [songsByChart, setSongsByChart] = useState([]);
  const [audioFooter, setAudioFooter] = useState();

  return (
    <MusicContext.Provider
      value={{ songId, setDataSongId, isPause, setIsPause, artistSongId, setArtistSongId, albumSongId, setAlbumSongId,activeScreen, setActiveScreen,songsByChart, setSongsByChart, audioFooter, setAudioFooter }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);