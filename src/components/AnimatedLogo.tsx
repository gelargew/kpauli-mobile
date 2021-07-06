import React, { useRef } from 'react'
import { useEffect } from 'react'
import { Easing, StyleSheet } from 'react-native'
import { Animated } from 'react-native'
import {View} from 'react-native'
import { getRandomInt } from '../utils/commons.utils'
import { StyledText } from './commons'



export const AnimatedLogo = () => {
    const r1Y = useRef(new Animated.Value(0)).current

    const animateTranslate = (ref: Animated.Value, toValue=0, duration=400) => {
        duration = duration + (duration/getRandomInt(3))
        const delay = (duration + (duration/getRandomInt(4))) * 2
        return [
            Animated.delay(delay), 
            Animated.timing(ref, {
                toValue,
                duration,
                useNativeDriver: true
            })
        ]
    }

    const animateLoop = (ref: Animated.Value, seq: number[]) => {
        Animated.loop(
            Animated.sequence(seq.flatMap(val => animateTranslate(ref, val)))
        ).start()
    }

    useEffect(() => {
        animateLoop(r1Y, [1, -1, 0])
    }, [])

    

    return (
        <View style={styles.container}> 
            <Animated.View style={[styles.r1, {
                transform: [
                    {
                        translateY: r1Y.interpolate({
                            inputRange: [-1, 1],
                            outputRange: [-40, 30]
                        })
                    }
                ]
            }]}>
                <StyledText>{getRandomInt()}</StyledText>
            </Animated.View>
            <View style={styles.r2}>
                <StyledText>{getRandomInt()}</StyledText>
            </View>
            <View style={styles.r3}>
                <StyledText>{getRandomInt()}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    r1: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
        justifyContent: 'center'
    },
    r2: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        justifyContent: 'center'
    },
    r3: {
        backgroundColor: 'teal',
        width: 50,
        height: 50,
        transform: [{translateY: 40}],
        justifyContent: 'center'
    }
})