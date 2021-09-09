import React from 'react';

export const themes = {
    original: {
      background: '#282c34',
      buttonBg: '#174ea6',
      fontColor: '#fff',
      buttonColor: '#fff',
      tableButtonsBg: '#fff',
      tableButtonsColor: '#000',
      cellColor: '#fff',
      modalBg: '#202124',
      inputBg: '#292A2D',
      spanColor: '#fff',
    },
    solarized: {
      background: '#002b36',
      buttonBg: '#829601',
      fontColor: '#174ea6',
      buttonColor: '#fff',
      tableButtonsBg: '#004052',
      tableButtonsColor: '#DEBD8B',
      cellColor: '#DEBD8B',
      modalBg: '#00212B',
      inputBg: '#1A343C',
      spanColor: '#6FC38D'
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.original 
  );