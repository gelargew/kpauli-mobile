import React, { useLayoutEffect, useState } from 'react'
import { View } from 'react-native'
import { Scatter, Pie } from '../components/Chart'
import { StyledText, MainContainer, PlainCard, StyledButton } from '../components/commons'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { getRowNums } from '../utils/chart.utils'
import { ResultScreenProps } from './types'
import { useStorage } from '../storage'


export const Result = ({navigation}: ResultScreenProps) => {
    const [loadScatter, setLoadScatter] = useState(false)
    const {
        answerChangedCount,
        length,
        time,
        results,
        timeLeft
    } = useStorage()
    const styles = useThemeAwareObject(createStyles)
    const [wrong, empty, correct] = results.reduce((accumulator, curValue) => {
        accumulator[curValue + 1]++
        return accumulator
        // [wrong, empty, correct]
    }, [0, 0, 0])
    const pieData = [
        {
            color: 'red',
            value: wrong
        },
        {
            color: 'yellow',
            value: empty
        },
        {
            color: 'green',
            value: correct
        }
    ]
    const toHHMMSS = (time:number): string => {
        const date = new Date(time*1000)
        return date.toISOString().substring(12, 19)
    }

    useLayoutEffect(() => {
        setTimeout(() => setLoadScatter(true), 1000)
        return setLoadScatter(false)
    }, [])

    return (
        <MainContainer style={styles.mainContainer}> 
             
            <StyledText style={styles.h1}>Result</StyledText>
            <PlainCard style={styles.pieContainer}>
                <Pie data={pieData} />
                <View style={{justifyContent: 'center'}}>
                    <StyledText>time: {time} minutes</StyledText>
                    <StyledText>elapsed time: {toHHMMSS(time*60 - timeLeft)}</StyledText>
                    <StyledText>length: {length}</StyledText>
                    <StyledText>correct: {correct}</StyledText>
                    <StyledText>wrong: {wrong}</StyledText>
                    <StyledText>empty: {empty}</StyledText>
                    <StyledText>answer changed: {answerChangedCount}</StyledText>
                </View>
            </PlainCard>
            <PlainCard style={styles.scatter}> 
                {loadScatter
                ?
                <Scatter results={results} numRows={getRowNums(results.length)} />
                :
                <StyledText>loading...</StyledText>
                }
                
            </PlainCard>
            <View style={styles.navigation}>
                <StyledButton title='Home' onPress={() => navigation.popToTop()} />
                <StyledButton title='Play again' onPress={() => navigation.replace('Launch')} />
            </View>      
        </MainContainer>
    )
}

const createStyles = (theme:Theme) => ({
    mainContainer: {
        padding: 5,
        justifyContent: 'space-around',
        overflow: 'scroll'
    },
    scatter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: theme.color.bg1,
        borderRadius: 5,
        shadowColor: theme.color.shadow,
        maxWidth: 400
    },
    h1: {
        fontSize: 36,
    },
    pieContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 400
    },
    navigation: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 400,
        justifyContent: 'space-between'
    }
})