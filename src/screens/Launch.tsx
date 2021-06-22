import React from 'react'
import { View } from 'react-native'
import { MainContainer, StyledButton } from '../components/commons'


export const Launch = () => {

    return (
        <MainContainer>
            <View>
                <StyledButton title='START' />
                <StyledButton title='length' />
            </View>
        </MainContainer>
    )
}