import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Scatter } from '../components/Chart'
import { Storage } from '../MainRoutes'
import { StyledText } from '../components/commons'


export const Result = () => {
    return (
        <View>  
            <Scatter />
        </View>
    )
}