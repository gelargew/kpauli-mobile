import React from 'react'
import { useMemo } from 'react'
import { ButtonProps, Button, TextInput, TextInputProps, View, Pressable, Text } from 'react-native'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { MainContainerProps, CustomButtonProps } from './commons.interfaces'



export { ButtonMain, MainContainer, Numpad }

const ButtonMain = (props:CustomButtonProps) => {
    const {theme} = useTheme()

    return (
    <Pressable {...props} style={({pressed}) => [
        {
        margin: 15,
        backgroundColor: pressed ? theme.color.bg3 : 'none',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5
        },
        {}
    ]} {...props}>

        <Text style={{
                color: theme.color.textMain,
                textAlign: 'center',
                fontSize: props.fontSize
            }}>{props.title}</Text>

    </Pressable>
    )
}

const MainContainer = (props:MainContainerProps) => {
    const {theme} = useTheme()

    return <View 
                style={{
                    margin: 3,
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: theme.color.bgMain
                }} 
                {...props}>
            </View>
}

const Numpad = ({onPress}: {onPress?: () => void}) => {

    return (
        <View style={{flex: 1, minWidth: 300, flexWrap: 'wrap', flexDirection: 'row', marginBottom: 10, borderRadius: 5}}>
            {[1,2,3,4,5,6,7,8,9].map(num => {
                return <ButtonMain style={{width:'32%', height: '24%',  margin: 'auto', backgroundColor: 'grey'}} fontSize={36} onPress={() => console.log(num)} title={num.toString()}/>
            })}

        </View>
    )
}


const Input = (props:TextInputProps) => <TextInput {...props} />

        
    