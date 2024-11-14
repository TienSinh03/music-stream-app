import React, { createContext, useRef } from 'react';
import { Audio } from 'expo-av';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const soundObject = useRef(new Audio.Sound()); // Khởi tạo soundObject bằng useRef

    return (
        <AudioContext.Provider value={soundObject}>
            {children}
        </AudioContext.Provider>
    );
};
