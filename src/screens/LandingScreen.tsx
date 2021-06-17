import React from 'react'
import { View, Text, Button } from 'react-native'
import { useTheme } from '../theme/Theme.context'


export const LandingScreen = () => {
    const {toggleTheme} = useTheme()

    return (
        <View>
            <Button title='START' onPress={() => ''} />
            <Button title='RESULT' onPress={toggleTheme} />
        </View>
    )
}