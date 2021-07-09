import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { StyledButton, MainContainer, StyledText } from '../components/commons'
import { LogoMain } from '../components/icons'
import { LandingScreenProps } from './types'
import { AnimatedLogo } from '../components/AnimatedLogo'



export const LandingScreen = ({navigation}:LandingScreenProps) => {
    const {theme, toggleTheme} = useTheme()
    const themeId = theme.id === 'DARK_THEME' ? 'dark' : 'light'

    const styles = useThemeAwareObject(createStyle)

    return (
        <MainContainer>
            <LogoMain />
            <View style={styles.background}>
                <AnimatedLogo />
            </View>
            <View style={styles.container}>
                <StyledButton style={styles.button} fontSize={24} title='START' onPress={() => navigation.navigate('Launch')} />
                <StyledButton style={styles.button} fontSize={24} title='How to' onPress={() => {}} />
                <StyledButton style={styles.button} fontSize={24} title='Last result' onPress={() => navigation.navigate('Result')} />
                <StyledButton style={styles.button} fontSize={24} title={`Theme: ${themeId}`} onPress={toggleTheme} />
            </View>
        </MainContainer>
    )
}

const createStyle = (theme:Theme) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: 200,
            zIndex: 1
        },
        background: {
            marginBottom: 20
        },
        button: {
            minWidth: 180
        }
        
    })
    return styles
}