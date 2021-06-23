import React from 'react'
import { View, FlatList } from 'react-native'
import { randomArray } from '../utils'

export { Scatter }

const Scatter = () => {
    const d1 = new Array(2000).fill(0)
    const d2 = new Array(3000).fill(1)
    const d = [...d1, ...d2]

    const renderItem = ({item, index}:any) => <View key={index.toString()} 
    style={{
        backgroundColor: item === 0 ? 'blue' : 'red',
        height: 2,
        width: 2,
        margin: 1
    }} />
    
    

    return (
        <FlatList horizontal={false} numColumns={100} keyExtractor={(item, idx):any => idx.toString()} data={d} renderItem={renderItem} />
    )
}
