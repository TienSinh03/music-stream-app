import React, { createContext, useState, useContext } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [songId, setDataSongId] = useState(null); // Thông tin bài hát
  const [isPause, setIsPause] = useState(false); // Trạng thái phát/dừng

  return (
    <MusicContext.Provider
      value={{ songId, setDataSongId, isPause, setIsPause }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);