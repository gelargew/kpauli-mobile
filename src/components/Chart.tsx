import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import { Storage } from '../MainRoutes'
import { useTheme } from '../theme/Theme.context'
import { randomArray } from '../utils'
import Svg, { Circle, Rect } from 'react-native-svg'

export { Scatter }

const getScatterThickColor = (value:number) => {
    if (value === 1) return 'green'
    if (value === 0) return 'yellow'
    if (value === -1) return 'red'
    return 'grey'
}

const ScatterThick = ({ value, index }: { value: number, index: number}) => {
    const props = {
        y: index % 50,
        x: Math.floor(index/50),
        fill: getScatterThickColor(value),
        width: 1,
        heigth: 1
    }
    return <Rect {...props} />
}


const Scatter = () => {
    const {results} = useContext(Storage)
    const {theme} = useTheme()
    const arr = new Array(1000).fill(0)
    const arr2 = new Array(1000).fill(1)
    const arr3 = new Array(1000).fill(-1)
    const d = arr.concat(arr2, arr3)

    return (
        <Svg viewBox='0 0 200 300'>
            {d.map((value, index) => <ScatterThick value={value} index={index} />)}
            <Circle cx='2' cy='2' r='2' fill='green' />
        </Svg>
    )
}

