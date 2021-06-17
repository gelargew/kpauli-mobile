import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Button } from 'react-native'
import { useTheme } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'


export const LandingScreen = () => {
    const {theme, toggleTheme} = useTheme()

    const styles = useMemo(() => 
        createStyle(theme)
    , [theme])

    return (
        <View>
            <Text style={styles.button}>HALLO</Text>
            <Button title='START' onPress={() => ''} />
            <Button title='RESULT' onPress={toggleTheme} />
        </View>
    )
}

const createStyle = (theme:Theme) => {
    const styles = StyleSheet.create({
        button: {
            color: theme.color.textMain,
            backgroundColor: theme.color.bg3
        }
    })
    return styles
}