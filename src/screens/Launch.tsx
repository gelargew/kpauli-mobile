import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { MainContainer, StyledButton } from '../components/commons'
import { Slider } from 'react-native-elements'


export const Launch = () => {
    const [length, setLength] = useState(1000)
    const [time, setTime] = useState(20)
    const [operation, setOperation] = useState('addition')
    const [numeralSystem, setNumeralSystem] = useState('latin')


    return (
        <MainContainer>
            <View>
                <Text>length: {length}</Text>
                <Slider maximumValue={5000} minimumValue={100} step={100} value={length} onValueChange={setLength} />
                <Text>duration: {time} minutes</Text>
                <Slider maximumValue={120} step={1} value={time} onValueChange={setTime} />
                
            </View>
        </MainContainer>
    )
}