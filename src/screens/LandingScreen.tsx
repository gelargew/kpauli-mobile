import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { StyledButton, MainContainer, StyledText } from '../components/commons'
import { LogoMain } from '../components/icons'
import { LandingScreenProps } from './types'



export const LandingScreen = ({navigation}:LandingScreenProps) => {
    const {theme, toggleTheme} = useTheme()

    const styles = useThemeAwareObject(createStyle)

    return (
        <MainContainer>
            <LogoMain />
            <View style={styles.container}>
                <StyledText style={styles.button}>HALLO</StyledText>
                <StyledButton fontSize={24} title='START' onPress={() => navigation.navigate('Launch')} />
                <StyledButton fontSize={24} title='RESULT' onPress={toggleTheme} />
                <StyledButton fontSize={24} title='testbutton' onPress={() => {}} />
            </View>
        </MainContainer>
    )
}

const createStyle = (theme:Theme) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.color.bg1,
            minWidth: 200
        }
        
    })
    return styles
}