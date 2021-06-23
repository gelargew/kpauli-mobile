import React, { PureComponent, useLayoutEffect, useRef, useState } from 'react'
import { FlatList, Text, View, useWindowDimensions, StyleSheet } from 'react-native'
import { MainContainer } from '../components/commons'
import { Numpad } from '../components/Numpad'
import { KpauliScreenProps, renderNumberProps } from './types'
import { randomArray } from '../utils'



export const Kpauli = ({data, navigation}: KpauliScreenProps) => {
    const dimension = useWindowDimensions()
    const [numbers, setNumbers] = useState(() => randomArray({length: 100}))
    const [answers, setAnswers] = useState(() => new Array(100).fill(''))
    const [results, setResults] = useState(() => new Array(100).fill(0))
    const numbersRef = useRef<FlatList>(null!)
    const [NumpadDisabled, setNumpadDisabled] = useState(false)
    const [position, setPosition] = useState(0)

    useLayoutEffect(() => {
        setTimeout(() => numbersRef.current.scrollToOffset({offset: position * 100}), 100)
    }, [position])

    const renderNumber = ({item, index}:any) => (
        <RenderNumber item={item} index={index} numbers={numbers} />
        // <View key={index}>
        //     <Text style={styles.number}>{numbers[index]}</Text>
        //     <Text style={styles.number}>{item}</Text>
        // </View>
    )

    const handlePress = async (value: number | string) => {
        if (typeof value === 'number') {
            setNumpadDisabled(true)
            setAnswers(prev => {
                prev[position] = value
                return [...prev]
            })
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

    return (
        <MainContainer>
            <View style={{flex: 1}}>
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

class RenderNumber extends PureComponent<renderNumberProps> {
    render() {
        return (
        <View key={this.props.index}>
            <Text style={styles.number}>{this.props.numbers[this.props.index]}</Text>
            <Text style={styles.number}>{this.props.item}</Text>
        </View>)
    }
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
    }
})