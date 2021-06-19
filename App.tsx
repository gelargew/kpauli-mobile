import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from './src/theme/Theme.context';
import { MainRoutes } from './src/MainRoutes';

export default function App() {

  return (
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  );
}




