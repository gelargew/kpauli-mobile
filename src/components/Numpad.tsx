import React from 'react'
import { View } from 'react-native'
import { useThemeAwareObject } from '../theme/Theme.context'
import { Theme } from '../theme/theme.interfaces'
import { StyledButton } from './commons'

export { Numpad }

const NUMBERS = [1,2,3,4,5,6,7,8,9]

const Numpad = () => {
    const styles = useThemeAwareObject(createStyle)

    return (
        <View>
            {NUMBERS.map(num => 
                <StyledButton style={styles.button} onPress={() => console.log(num)} title={num.toString()} />
             )}
             <StyledButton style={styles.button} onPress={() => console.log('left')} title='left' />
             <StyledButton style={styles.button} onPress={() => console.log('0')} title='0' />
             <StyledButton style={styles.button} onPress={() => console.log('right')} title='right' />
        </View>
    )
}

const createStyle = (theme:Theme) => ({
    button: ({pressed}:{pressed: boolean}) => ({
        width: '32%',
        margin: 'auto',
        backgroundColor: pressed ? theme.color.bg3 : 'none',
        alignText: 'center',
        borderRadius: 5
    }),
    container: {
        flex: 1,
        borderRadius: 5,
        minWidth: 300
    }
})