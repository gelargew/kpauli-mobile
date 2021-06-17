import React, { useState } from 'react'
import { FillView } from './Wrapper'
import { FlatList, Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { withTheme } from 'react-native-elements'


export const Kpauli = () => {
    const [numbers, setNumbers] = useState([2,4,3,1,1])
    const [answers, setAnswers] = useState(['A', 'A', 'A', '', ''])

    const renderNumber = ({item, index}:any) => (
        <View key={index}>
            <Text style={styles.number}>{item}</Text>
            <Text style={styles.number}>{answers[index]}</Text>
        </View>
    )

    return (
        <View style={{flex: 1}}>
            <View style={styles.numbersDiv}>
                <FlatList data={numbers} renderItem={renderNumber} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    numbersDiv: {
        width: 100,
        height: '40%',
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
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