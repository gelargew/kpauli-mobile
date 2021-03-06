import React from 'react'
import { useMemo } from 'react'
import { ViewProps } from 'react-native'
import { TextProps, TextInput, TextInputProps, View, Pressable, Text } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { MainContainerProps, CustomButtonProps, CustomTextProps } from './interfaces'



export { StyledButton, MainContainer, Numpad, StyledText, PlainButton, PlainCard }

const PlainButton = (props:CustomButtonProps) => {
    const {theme} = useTheme()

    return (
    <Pressable  style={({pressed}) => [
        {
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
        ...props.style
        },
        {}
    ]} {...props} >
        <Text style={{
                color: theme.color.textMain,
                textAlign: 'center',
                fontSize: props.fontSize
            }}>{props.title}</Text>
    </Pressable>
    )
}

const StyledButton = (props:CustomButtonProps) => {
    const {theme} = useTheme()

    return (
    <Pressable {...props} style={({pressed}) => [
        {
        margin: 5,
        backgroundColor: pressed ? theme.color.bg3 : theme.color.bg1,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        shadowColor: theme.color.shadow,
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 5,
        elevation: 1,
        ...props.style
        },
        {}
    ]} >
        <Text style={{
                color: theme.color.textMain,
                textAlign: 'center',
                fontSize: props.fontSize
            }}>{props.title}</Text>
    </Pressable>
    )
}

const StyledText = (props:CustomTextProps) => {
    const {theme} = useTheme()
    return <Text {...props} style={{
        alignSelf: 'center', 
        color: theme.color.textMain, 
        ...props.style}} />
}

const MainContainer = (props:MainContainerProps) => {
    const {theme} = useTheme()

    return <View {...props}
                style={{
                    margin: 3, 
                    flex: 1,
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: theme.color.bgMain,
                    ...props.style
            }}>
            </View>
}



const Numpad = ({onPress}: {onPress?: () => void}) => {

    return (
        <View style={{flex: 1, minWidth: 300, flexWrap: 'wrap', flexDirection: 'row', marginBottom: 10, borderRadius: 5}}>
            {[1,2,3,4,5,6,7,8,9].map(num => {
                return <StyledButton style={{width:'32%', height: '24%',  margin: 'auto', backgroundColor: 'grey'}} fontSize={36} onPress={() => console.log(num)} title={num.toString()}/>
            })}

        </View>
    )
}


const PlainCard = (props: MainContainerProps) => {
    const {theme} = useTheme()

    return (
        <View {...props} style={{
            padding: 20,
            borderRadius: 5,
            shadowColor: theme.color.shadow,
            backgroundColor: theme.color.bg1,
            shadowOffset: {width: 4, height: 4},
            shadowRadius: 5,
            ...props.style
        }} />
    )
}
    

        
    