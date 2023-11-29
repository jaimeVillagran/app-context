import React, { createContext, useContext, useState } from 'react';

export const LyricsContext = createContext();

export const useLyrics = () => {
  return useContext(LyricsContext);
};

export const TrackDetailProvider = ({ children }) => {
  const [trackDetail, setTrackDetail] = useState(null);

  return (
      <LyricsContext.Provider value={{ trackDetail, setTrackDetail }}>
          {children}
      </LyricsContext.Provider>
  );
};
