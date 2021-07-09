import React, { PureComponent, useContext, useLayoutEffect, useRef, useState } from 'react'
import { FlatList, Text, View, useWindowDimensions, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { MainContainer, StyledButton, StyledText } from '../components/commons'
import { Numpad } from '../components/Numpad'
import { KpauliScreenProps, renderNumberProps } from './types'
import { randomArray } from '../utils/commons.utils'

import { Timer, useTimer } from '../components/Timer'
import { useEffect } from 'react'
import { useStorage } from '../storage'
import { TimerProps } from '../components/interfaces'


class RenderNumber extends PureComponent<renderNumberProps> {
    render() {
        return (
        <View key={this.props.index}>
            <StyledText style={styles.number}>{this.props.numbers[this.props.index]}</StyledText>
            <StyledText style={styles.number}>{this.props.item}</StyledText>
        </View>)
    }
}

export const Kpauli = ({route, navigation}: KpauliScreenProps) => {
    const {
        numbers,
        answers,
        time,
        position,
        setPosition,
        updateAnswers,
        setTimeLeft
    } = useStorage()
    const numbersRef = useRef<FlatList>(null!)
    const [NumpadDisabled, setNumpadDisabled] = useState(false)
    
  

    useLayoutEffect(() => {
        setTimeout(() => numbersRef.current.scrollToOffset({offset: position * 100}), 100)
    }, [position])

    const renderNumber = ({item, index}:any) => 
        <RenderNumber item={item} index={index} numbers={numbers} />
       
    const handlePress = async (value: number | string) => {
        if (typeof value === 'number') {
            setNumpadDisabled(true)
            updateAnswers(position, value.toString())
            goDown()
            setTimeout(() => setNumpadDisabled(false), 250)
        }
        else if (value === 'down') goDown()
        else if (value === 'up') goUp()
    }
    const goUp = () => {
        if (position > 0) setPosition(prev => prev - 1)
    }
    const goDown = () => {
        if (position < numbers.length) setPosition(prev => prev + 1)
    }
    const handleSubmit = () => {
        setTimeLeft(timeLeft)
        navigation.replace('Result')

    }
    const [timeLeft] = useTimer(time*60, handleSubmit)


    return (
        <MainContainer>
            <View style={{flex: 1}}>          
                <View style={styles.timer}> 
                    <StyledText 
                    style={{ height: route.params.showTimer ? 'auto' : 0 }} 
                    > 
                    {timeLeft}    
                    </StyledText>
                    <StyledButton onPress={handleSubmit} title='submit' />
                </View>
                
                <View style={styles.numbersDiv}>
                    <View style={styles.answerLine} />
                    <FlatList 
                    ref={numbersRef} 
                    data={answers} 
                    keyExtractor={(i, idx) => idx.toString()} 
                    scrollEnabled={false}
                    renderItem={renderNumber}
                    removeClippedSubviews={true}
                    showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            <Numpad disabled={NumpadDisabled} onPress={handlePress} />
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    numbersDiv: {
        width: 100,
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    number: {
        height: 50,
        fontSize: 36,
        alignItems: 'center'
    },
    answerLine: {
        position: 'absolute',
        height: 50,
        width: '100%',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderColor: 'green',
        top: 100
    },
    timer: {
        position: 'absolute',
        left: -120,
        top: 100,
        width: 100,
        alignItems: 'center'
    }
})