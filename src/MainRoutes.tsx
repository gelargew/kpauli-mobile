import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StackParam } from './screens/types'

import { Kpauli } from './screens/Kpauli'
import { LandingScreen } from './screens/LandingScreen'
import { Launch } from './screens/Launch'
import { Result } from './screens/Result'
import { useStorage, storage } from './storage'

export { Storage, MainRoutes}

const Stack = createStackNavigator<StackParam>()
const Storage = React.createContext<storage>(null!)

const MainRoutes = () => {
    const storage = useStorage()

    return (
        <Storage.Provider value={storage}>
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator headerMode='none' initialRouteName='Launch'>
                    <Stack.Screen name='Home' component={LandingScreen} />
                    <Stack.Screen name='Launch' component={Launch} />
                    <Stack.Screen name='Kpauli' component={Kpauli} />
                    <Stack.Screen name='Result' component={Result} />
                </Stack.Navigator>   
            </NavigationContainer>
        </Storage.Provider>
        
    )
}
