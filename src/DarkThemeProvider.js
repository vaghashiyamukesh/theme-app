import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

function DarkThemeProvider({ children }) {
  const darkTheme = useSelector((state) => state.darkTheme);

  return <ThemeProvider theme={{ theme: darkTheme ? 'dark' : 'light' }}>{children}</ThemeProvider>;
}

export default DarkThemeProvider;