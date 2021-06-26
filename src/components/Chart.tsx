import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import { Storage } from '../MainRoutes'
import { useTheme } from '../theme/Theme.context'
import { randomArray } from '../utils'

export { Scatter }

const getScatterThickColor = (value:number) => {
    if (value === 1) return 'green'
    if (value === 0) return 'yellow'
    if (value === -1) return 'red'
    return 'grey'
}

const renderScatterThick = ({ item, index }: { item: number, index: number}) => (
    <View 
    key={index.toString()} 
    style={{
        backgroundColor: getScatterThickColor(item),
        height: 2,
        width: 2,
        margin: 1
    }} />
)


const Scatter = () => {
    const {results} = useContext(Storage)
    const {theme} = useTheme()

    return (
        <FlatList 
        horizontal={false} 
        numColumns={20}
        keyExtractor={(item, idx):any => idx.toString()} 
        data={results} 
        renderItem={renderScatterThick} />
    )
}
