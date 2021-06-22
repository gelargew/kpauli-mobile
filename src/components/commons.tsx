import React from 'react'
import { useMemo } from 'react'
import { ButtonProps, Button, TextInput, TextInputProps, View, Pressable, Text } from 'react-native'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { MainContainerProps, CustomButtonProps } from './interfaces'



export { StyledButton, MainContainer, Numpad }

const StyledButton = (props:CustomButtonProps) => {
    const {theme} = useTheme()

    return (
    <Pressable style={({pressed}) => [
        {
        margin: 10,
        backgroundColor: pressed ? theme.color.bg3 : theme.color.bg1,
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        shadowColor: theme.color.shadow,
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 5,
        width: '100%',
        elevation: 4
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
                return <StyledButton style={{width:'32%', height: '24%',  margin: 'auto', backgroundColor: 'grey'}} fontSize={36} onPress={() => console.log(num)} title={num.toString()}/>
            })}

        </View>
    )
}


const Input = (props:TextInputProps) => <TextInput {...props} />

        
    