import React, { useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../theme/Theme.context'

export { LogoMain }

const LogoMain = () => {
    const {theme} = useTheme()

    return <Text style={{
        color: theme.color.textMain,
        position: 'absolute',
        left: 20,
        top: 20,
        fontSize: 48,
        fontWeight: 'bold'
            }}>
            Kpauli
            </Text>
}