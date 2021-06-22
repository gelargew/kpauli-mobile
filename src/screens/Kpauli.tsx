import React, { useRef, useState } from 'react'
import { FlatList, Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { MainContainer } from '../components/commons'
import { Numpad } from '../components/Numpad'
import { KpauliScreenProps } from './types'
import { randomArray } from '../utils'



export const Kpauli = ({data, navigation}: KpauliScreenProps) => {
    const [numbers, setNumbers] = useState(() => randomArray({length: 1000}))
    const [answers, setAnswers] = useState(() => new Array(1000).fill(''))
    const [results, setResults] = useState(() => new Array(1000).fill(0))
    const numbersRef = useRef<FlatList>(null!)
    const [position, setPosition] = useState(0)

    const renderNumber = ({item, index}:any) => (
        <View key={index}>
            <Text style={styles.number}>{item}</Text>
            <Text style={styles.number}>{answers[index]}</Text>
        </View>
    )

    const handlePress = (value: number | string) => {
        setPosition(prev => prev + 1)
        numbersRef.current.scrollToIndex({index: position})
    }

    return (
        <MainContainer>
            <View style={{flex: 1}}>
                <View style={styles.numbersDiv}>
                    <FlatList 
                    ref={numbersRef} 
                    data={numbers} 
                    keyExtractor={(i, idx) => i + idx.toString()} 
                    scrollEnabled={false} 
                    renderItem={renderNumber} />
                </View>
            </View>
            <Numpad onPress={handlePress} />
        </MainContainer>
    )
}


const styles = StyleSheet.create({
    numbersDiv: {
        width: 100,
        height: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        color: 'white',
        height: 50,
        fontSize: 36,
        alignItems: 'center'
    }
})