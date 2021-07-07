import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from './src/theme/Theme.context';
import { MainRoutes } from './src/MainRoutes';
import { Stuff } from './src/screens/TestStuff';

import { Storage, useCreateStorage } from './src/storage';

export default function App() {
  const storage = useCreateStorage()

  return (
    <ThemeProvider>
      <Storage.Provider value={storage}>
        
        <MainRoutes />
        
      </Storage.Provider>
    </ThemeProvider>
  );
}




