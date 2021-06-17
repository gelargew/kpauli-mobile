import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Theme } from './theme/theme.interfaces'
import { useThemeAwareObject } from './theme/Theme.context'


const Stack = createStackNavigator()

const MainRoutes = () => {
    const styles = useThemeAwareObject(createStyle)

    return (
        <View style={styles.container} >

        </View>
    )
}


const createStyle = (theme:Theme) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.color.bgMain
        }
    })
}