import React from 'react'
import { View, GestureResponderEvent } from 'react-native'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { StyledButton } from './commons'

export { Numpad }

const NUMBERS = [1,2,3,4,5,6,7,8,9]

const Numpad = () => {
    const styles = useThemeAwareObject(createStyle)

    const handlePress = (value:string | number) => {
        console.log(value)
    }

    return (
        <View style={styles.container}>
            {NUMBERS.map(num => 
                <StyledButton fontSize={36} style={styles.button} 
                onPress={() => handlePress(num)} title={num.toString()} />
             )}
             <StyledButton fontSize={36} style={styles.button} 
             onPress={() => handlePress('left')} title='left' />
             <StyledButton fontSize={36} style={styles.button} 
             onPress={() => handlePress(0)} title='0' />
             <StyledButton fontSize={36} style={styles.button} 
             onPress={() => handlePress('right')} title='right' />
        </View>
    )
}

const createStyle = (theme:Theme) => ({
    button: ({pressed}:{pressed: boolean}) => ({
        width: '32%',
        backgroundColor: pressed ? theme.color.bg3 : 'none',
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