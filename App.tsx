import { StatusBar } from 'expo-status-bar';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Kpauli } from './src/screens/Kpauli';
import { LandingScreen } from './src/screens/LandingScreen';
import { LIGHT_THEME } from './src/theme/theme';
import { ThemeProvider, useTheme } from './src/theme/Theme.context';
import { ColorTheme, Theme } from './src/theme/theme.interfaces';

export default function App() {
  const {theme} = useTheme()

  const styles = useMemo(() => createStyle(theme), [theme])

  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <View style={styles.container}>
        <LandingScreen />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const createStyle = (theme:Theme) => {
  console.log('memo')
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.bgMain,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return styles
}


