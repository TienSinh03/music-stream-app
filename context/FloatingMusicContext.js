import React, { createContext, useState, useContext } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [songId, setDataSongId] = useState(null); // Thông tin bài hát
  const [isPause, setIsPause] = useState(true); // Trạng thái phát/dừng
  const [artistSongId, setArtistSongId] = useState(); //
  const [albumSongId, setAlbumSongId] = useState(); //

  return (
    <MusicContext.Provider
      value={{ songId, setDataSongId, isPause, setIsPause, artistSongId, setArtistSongId, albumSongId, setAlbumSongId }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);