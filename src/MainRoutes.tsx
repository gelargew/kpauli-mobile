import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StackParam } from './screens/types'

import { Kpauli } from './screens/Kpauli'
import { LandingScreen } from './screens/LandingScreen'
import { Launch } from './screens/Launch'


const Stack = createStackNavigator<StackParam>()

export const MainRoutes = () => {

    return (
        
        <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator headerMode='none' initialRouteName='Home'>
                    <Stack.Screen name='Home' component={LandingScreen} />
                    <Stack.Screen name='Launch' component={Launch} />
                    <Stack.Screen name='Kpauli' component={Kpauli} />
                </Stack.Navigator>   
        </NavigationContainer>
        
    )
}
