import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Scatter, Pie } from '../components/Chart'
import { Storage } from '../MainRoutes'
import { StyledText, MainContainer } from '../components/commons'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'

const getRowNums = (number: number) => Math.floor(Math.sqrt(number*0.7)/ 10)*10

export const Result = () => {
    const results = new Array(5000).fill(-1)
    const styles = useThemeAwareObject(createStyles)
    const resultCount = results.reduce((accumulator, curValue) => {
        accumulator[curValue + 1]++
        return accumulator
        // [wrong, empty, correct]
    }, [0, 0, 0])
    const pieData = [
        {
            color: 'red',
            value: resultCount[0]
        },
        {
            color: 'yellow',
            value: resultCount[1]
        },
        {
            color: 'green',
            value: resultCount[2]
        }
    ]

    return (
        <MainContainer style={styles.mainContainer}>  
            <StyledText style={styles.h1}>{getRowNums(results.length)}</StyledText>
            <View style={styles.scatter}> 
                <StyledText>yoa</StyledText>
                <Scatter results={results} numRows={getRowNums(results.length)} />
            </View>
            <Pie data={pieData} />
            
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