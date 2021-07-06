import React, { useRef } from 'react'
import { useEffect } from 'react'
import { Easing, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Animated } from 'react-native'
import {View} from 'react-native'
import { getRandomInt, randomArray } from '../utils/commons.utils'
import { StyledText } from './commons'
import { ContainerProps } from './interfaces'



export const AnimatedLogo = () => {
    const r1Y = useRef(new Animated.Value(0)).current
    const r2Y = useRef(new Animated.Value(0)).current
    const r3Y = useRef(new Animated.Value(0)).current

    const animateTranslate = (ref: Animated.Value, toValue=0, duration=200) => {
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
        animateLoop(r2Y, [-1, 0, 1, 0])
        animateLoop(r3Y, [0, 1, -1, 0])
    }, [])


    return (
        <View style={styles.container}> 
            <AnimatedView style={{
                transform: [
                    {
                        translateY: r1Y.interpolate({
                            inputRange: [-1, 1],
                            outputRange: [-75, 25]
                        })
                    }
                ]
            }} />
            <AnimatedView style={{
                transform: [
                    {
                        translateY: r2Y.interpolate({
                            inputRange: [-1, 1],
                            outputRange: [-75, 25]
                        })
                    }
                ]
            }} />
            <AnimatedView style={{
                transform: [
                    {
                        translateY: r3Y.interpolate({
                            inputRange: [-1, 1],
                            outputRange: [-75, 25]
                        })
                    }
                ]
            }} />
        </View>
    )
}

const AnimatedView = (props: ContainerProps) => {
    const [top, bot] = randomArray({length: 2})
    const middle = randomArray({length: 3})

    return (
        <Animated.View style={[
            styles.animatedContainer, props.style
        ]}>
            <View style={[styles.number, { borderTopWidth: 0 }]}>
                <StyledText style={{ fontSize: 28 }}>{top}</StyledText>
            </View>
            {middle.map(num => (
                <View style={styles.number} key={num}>
                    <StyledText style={{ fontSize: 28 }}>{num}</StyledText>
                </View>
            ))}
            <View style={[styles.number, { borderBottomWidth: 0 }]}>
                <StyledText style={{ fontSize: 28 }}>{bot}</StyledText>
            </View>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        overflow: 'hidden'
    },
    animatedContainer: {
        justifyContent: 'center',
        width: 50,
        height: 160,
        borderColor: 'grey',
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    number: {
        width: 50,
        height: 50,
        borderColor: 'grey',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center'
    }
})