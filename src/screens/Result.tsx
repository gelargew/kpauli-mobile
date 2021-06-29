import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Scatter, Pie } from '../components/Chart'
import { Storage } from '../MainRoutes'
import { StyledText, MainContainer } from '../components/commons'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'


export const Result = () => {
    const {results} = useContext(Storage)
    const styles = useThemeAwareObject(createStyles)
    return (
        <MainContainer style={styles.mainContainer}>  
            <StyledText style={styles.h1}>Result</StyledText>
            <View style={styles.scatter}> 
                <StyledText>yoa</StyledText>
                <Scatter />
            </View>
            <Pie />
            
        </MainContainer>
    )
}

const createStyles = (theme:Theme) => ({
    mainContainer: {
        paddingTop: 50,
        paddingBottom: 50,
        justifyContent: 'space-around'
    },
    scatter: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200,
        backgroundColor: theme.color.bg1,
        borderRadius: 5,
        shadowColor: theme.color.shadow
    },
    h1: {
        fontSize: 36,
    }
})