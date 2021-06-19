import React from 'react'
import { useMemo } from 'react'
import { ButtonProps, Button, StyleSheet, TextInput, TextInputProps, View, ViewProps } from 'react-native'
import { useTheme, useThemeAwareObject } from '../theme/Theme.context'
import { MainContainerProps } from './commons.interface'



export { ButtonMain, MainContainer }

const ButtonMain = (props:ButtonProps) => {
    const {theme} = useTheme()

    return (
    <View style={{margin: 15}}>
        <Button color={theme.color.bg3} {...props} />
    </View>
    )
}

const MainContainer = (props:MainContainerProps) => {
    const {theme} = useTheme()

    return <View 
                style={{
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    backgroundColor: theme.color.bgMain
                }} 
                {...props}>
            </View>
}

const ButtonNumpad = (props:ButtonProps) => <Button color='red' {...props} />


const Input = (props:TextInputProps) => <TextInput {...props} />

        
    