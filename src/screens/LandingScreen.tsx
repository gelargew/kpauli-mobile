import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { ButtonMain, MainContainer } from '../components/commons'
import { LogoMain } from '../components/icons'
import { LandingScreenProps } from './interfaces'



export const LandingScreen = ({navigation}:LandingScreenProps) => {
    const {theme, toggleTheme} = useTheme()

    const styles = useThemeAwareObject(createStyle)

    return (
        <MainContainer>
            <LogoMain />
            <View style={styles.container}>
                <Text style={styles.button}>HALLO</Text>
                <ButtonMain title='START' onPress={() => navigation.navigate('Kpauli')} />
                <ButtonMain title='RESULT' onPress={toggleTheme} />
            </View>
        </MainContainer>
    )
}

const createStyle = (theme:Theme) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.color.bgMain
        },
        button: {
            elevation: 5,
            color: theme.color.textMain,
            backgroundColor: theme.color.bg3
        }
    })
    return styles
}