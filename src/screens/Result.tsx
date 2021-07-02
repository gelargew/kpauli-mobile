import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Scatter, Pie } from '../components/Chart'
import { Storage } from '../MainRoutes'
import { StyledText, MainContainer } from '../components/commons'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { getRowNums } from '../utils/chart.utils'


export const Result = () => {
    const results = [
        ...new Array(1000).fill(0), 
        ...new Array(500).fill(-1),
        ...new Array(1000).fill(1),
        ...new Array(1000).fill(-1),
        ...new Array(500).fill(0),
        ...new Array(1000).fill(1)
    ]
    const {
        answerChangedCount,
        length,
        time
    } = useContext(Storage)
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

    return (
        <MainContainer style={styles.mainContainer}>  
            <StyledText style={styles.h1}>{getRowNums(results.length)}</StyledText>
            <View>
                <Pie data={pieData} />
                <View>
                    <StyledText>time: {time}</StyledText>
                    <StyledText>length: {length}</StyledText>
                    <StyledText>correct: {correct}</StyledText>
                    <StyledText>wrong: {wrong}</StyledText>
                    <StyledText>empty: {empty}</StyledText>
                    <StyledText>answer changed: {answerChangedCount}</StyledText>
                </View>
            </View>
            <View style={styles.scatter}> 
                <StyledText>yoa</StyledText>
                <Scatter results={results} numRows={getRowNums(results.length)} />
            </View>
            
            
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