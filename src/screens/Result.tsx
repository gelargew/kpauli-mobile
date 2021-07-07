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
    const results = [
        ...new Array(5000).fill(-1),
    ]
    const {
        answerChangedCount,
        length,
        time
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

    useLayoutEffect(() => {
        setTimeout(() => setLoadScatter(true), 1000)
        return setLoadScatter(false)
    }, [])

    const scatterScale = results.length > 3000 ? 1 : 2
    return (
        <MainContainer style={styles.mainContainer}>  
            <StyledText style={styles.h1}>{getRowNums(results.length)}</StyledText>
            {/* <PlainCard style={styles.pieContainer}>
                <Pie data={pieData} />
                <View style={{justifyContent: 'center'}}>
                    <StyledText>time: {time}</StyledText>
                    <StyledText>length: {length}</StyledText>
                    <StyledText>correct: {correct}</StyledText>
                    <StyledText>wrong: {wrong}</StyledText>
                    <StyledText>empty: {empty}</StyledText>
                    <StyledText>answer changed: {answerChangedCount}</StyledText>
                </View>
            </PlainCard> */}
            <PlainCard style={styles.scatter}> 
                {loadScatter
                ?
                <Scatter results={results} numRows={getRowNums(results.length)} />
                :
                <StyledText>loading...</StyledText>
                }
                
            </PlainCard>
            <StyledButton title='Home' onPress={() => navigation.popToTop()} />
            
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
    },
    pieContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})