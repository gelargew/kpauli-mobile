import React, { PureComponent, useContext, useLayoutEffect, useRef, useState } from 'react'
import { FlatList, Text, View, useWindowDimensions, StyleSheet, Alert } from 'react-native'

import { MainContainer, StyledButton } from '../components/commons'
import { Numpad } from '../components/Numpad'
import { KpauliScreenProps, renderNumberProps } from './types'
import { Timer } from '../components/Timer'
import { useStorage } from '../storage'
import { useEffect } from 'react'


class RenderNumber extends PureComponent<renderNumberProps> {
    render() {
        return (
        <View key={this.props.index}>
            <Text style={styles.number}>{this.props.numbers[this.props.index]}</Text>
            <Text style={styles.number}>{this.props.item}</Text>
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
        updateAnswers
    } = useStorage()
    const numbersRef = useRef<FlatList>(null!)
    const [NumpadDisabled, setNumpadDisabled] = useState(false)

    useLayoutEffect(() => {
        setTimeout(() => numbersRef.current.scrollToOffset({offset: position * 100}), 100)
    }, [position])

    useEffect(() => navigation.addListener('beforeRemove', e => {
        e.preventDefault()
        Alert.alert('Discard changes?',
        'You have unsaved changes. Are you sure to discard them and leave the screen?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => {} },
          {
            text: 'Discard',
            style: 'destructive',
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    }), [])


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
        navigation.navigate('Result')
    }

    return (
        <MainContainer>
            <View style={{flex: 1}}>          
                <View style={styles.timer}>
                    <Timer initialTime={time*60} performTimesUp={handleSubmit} />
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
                    removeClippedSubviews={true} />
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
        color: 'white',
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