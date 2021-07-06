import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StackParam } from './screens/types'

import { Kpauli } from './screens/Kpauli'
import { LandingScreen } from './screens/LandingScreen'
import { Launch } from './screens/Launch'
import { Result } from './screens/Result'
import { useCreateStorage, Storage } from './storage'
import { LoadingScreen } from './screens/Loading'

export { MainRoutes }

const Stack = createStackNavigator<StackParam>()


const MainRoutes = () => {
    const storage = useCreateStorage()

    return (
        <Storage.Provider value={storage}>
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator headerMode='none' initialRouteName='Loading'>
                    <Stack.Screen name='Home' component={LandingScreen} />
                    <Stack.Screen name='Launch' component={Launch} />
                    <Stack.Screen name='Kpauli' component={Kpauli} />
                    <Stack.Screen name='Result' component={Result} />
                    <Stack.Screen name='Loading' component={LoadingScreen} />
                </Stack.Navigator>   
            </NavigationContainer>
        </Storage.Provider>
        
    )
}
