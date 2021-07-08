import React, { useState } from 'react'
import { View, Switch, Image } from 'react-native'
import { MainContainer, StyledButton, StyledText } from '../components/commons'
import { Slider } from 'react-native-elements'
import { LaunchScreenProps } from './types'
import { useContext } from 'react'
import { useStorage } from '../storage'

export const Launch = ({navigation}:LaunchScreenProps) => {
    const {launch} = useStorage()
    const [time, setTime] = useState(20)
    const [length, setLength] = useState(2000)
    const [showTimer, setShowTimer] = useState(false)

    const handleStart = () => {
        launch(time, length)
        navigation.navigate('Kpauli')
    }


    return (
        <MainContainer>
            <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100, alignSelf: 'center'}}
                source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

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

                <View style={styles.showTimer as object}>
                    <StyledText>show timer: </StyledText>
                    <Switch onValueChange={() => setShowTimer(!showTimer)} value={showTimer} />
                </View>

                <StyledButton title='START' style={{ marginTop: 40}} onPress={handleStart} />
                
                
                
                
            </View>
        </MainContainer>
    )
}

const styles = {
    container: {
        width: 200,
        padding: 10
    },
    thumbSize: {
        height: 10,
        width: 10,
    },
    slider: {
        width: '100%'
    },
    showTimer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}