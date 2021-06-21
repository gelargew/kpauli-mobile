import React from 'react'
import { Pressable, Text, View } from 'react-native'

export { Stuff }

const Stuff = () => {
    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
            <Pressable style={{justifyContent: 'center', width: '40%', backgroundColor:'blue'}}>
                <Text style={{fontSize: 26, backgroundColor: 'grey', textAlign: 'center'}}>yoyo</Text>
            </Pressable>
            <Pressable style={{justifyContent: 'center', width: '40%'}}>
                <Text style={{fontSize: 26, backgroundColor: 'grey', textAlign: 'center'}}>yoyo</Text>
            </Pressable>
            <Pressable style={{justifyContent: 'center', width: '40%'}}>
                <Text style={{fontSize: 26, backgroundColor: 'grey', textAlign: 'center'}}>yoyo</Text>
            </Pressable>
            <Pressable style={{justifyContent: 'center', width: '40%'}}>
                <Text style={{fontSize: 26, backgroundColor: 'grey', textAlign: 'center'}}>yoyo</Text>
            </Pressable>
            <Pressable style={{justifyContent: 'center', width: '40%'}}>
                <Text style={{fontSize: 26, backgroundColor: 'grey', textAlign: 'center'}}>yoyo</Text>
            </Pressable>
        </View>
        
    )
}