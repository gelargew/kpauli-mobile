import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from './src/theme/Theme.context';
import { MainRoutes } from './src/MainRoutes';
import { Stuff } from './src/screens/TestStuff';

export default function App() {

  return (
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  );
}




