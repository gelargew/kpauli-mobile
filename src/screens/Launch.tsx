import React, { useState } from 'react'
import { View, Text, Animated } from 'react-native'
import { MainContainer, StyledButton, StyledText } from '../components/commons'
import { Slider } from 'react-native-elements'
import { LaunchScreenProps } from './types'

export const Launch = ({navigation}:LaunchScreenProps) => {
    const [length, setLength] = useState(1000)
    const [time, setTime] = useState(20)
    const [operation, setOperation] = useState('addition')
    const [numeralSystem, setNumeralSystem] = useState('latin')


    return (
        <MainContainer>
            <View style={styles.container}>

                <StyledText>length: {length}</StyledText>

                <Slider 
                style={styles.slider}
                maximumValue={5000} 
                minimumValue={100} 
                step={100} 
                value={length} 
                onValueChange={setLength}
                thumbStyle={{ ...styles.thumbSize, backgroundColor: 'white' }}    
                thumbTouchSize={styles.thumbSize}
                />

                <StyledText>duration: {time} minutes</StyledText>

                <Slider 
                style={styles.slider}
                minimumValue={1}
                maximumValue={120} 
                step={1} 
                value={time} 
                onValueChange={setTime}
                thumbStyle={{ ...styles.thumbSize, backgroundColor: 'white' }}
                thumbTouchSize={styles.thumbSize} 
                 />

                 <StyledButton title='START' onPress={() => navigation.navigate('Kpauli', {length, time})} />
                
            </View>
        </MainContainer>
    )
}

const styles = {
    container: {
        width: 200,
        padding: 10,
        borderColor: 'red',
        borderWidth: 3
    },
    thumbSize: {
        height: 10,
        width: 10,
    },
    slider: {
        width: '100%'
    }
}