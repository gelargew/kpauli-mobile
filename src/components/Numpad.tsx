import React from 'react'
import { View, FlatList } from 'react-native'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { PlainButton } from './commons'
import { NumpadProps } from './interfaces'

export { Numpad }

const NUMBERS = [1,2,3,4,5,6,7,8,9, 'down', 0, 'up']

const Numpad = (props:NumpadProps) => {
    const styles = useThemeAwareObject(createStyle)

    const handlePress = (value:string | number) => {
        if (props.onPress) props.onPress(value)
    }

    return (
        <View style={styles.container} {...props}>
            {NUMBERS.map(val => 
                <PlainButton disabled={props.disabled} key={val.toString()} fontSize={36} style={styles.button} 
                onPress={() => handlePress(val)} title={val.toString()} />
             )}
        </View>
    )
}

const createStyle = (theme:Theme) => ({
    button: ({pressed}:{pressed: boolean}) => ({
        backgroundColor: pressed ? theme.color.bg3 : theme.color.bg1,
        width: '32%',
        margin: 'auto',
        alignText: 'center',
        borderRadius: 5,
        heigth: '24%',
        minHeight: '24%',
        justifyContent: 'center'
    }),
    container: {
        flexDirection: 'row',
        flex: 1,
        borderRadius: 5,
        minWidth: 300,
        flexWrap: 'wrap',
        backgroundColor: theme.color.bg1
    }
})