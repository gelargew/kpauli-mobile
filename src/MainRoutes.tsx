import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Theme } from './theme/theme.interfaces'
import { useThemeAwareObject } from './theme/Theme.context'
import { LandingScreen } from './screens/LandingScreen'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { Kpauli } from './screens/Kpauli'
import { Text } from 'react-native-elements'


const Stack = createStackNavigator()

export const MainRoutes = () => {

    return (
        
        <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator headerMode='none' initialRouteName='Home'>
                    <Stack.Screen name='Home' component={LandingScreen} />
                    <Stack.Screen name='kpauli' component={Kpauli} />
                </Stack.Navigator>   
        </NavigationContainer>
        
    )
}
