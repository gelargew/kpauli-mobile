import React, { useContext, useMemo } from 'react'
import { View, FlatList } from 'react-native'
import { Storage } from '../MainRoutes'
import Svg, { Circle, Rect, G } from 'react-native-svg'
import { PieChart } from 'react-native-chart-kit'

export { Scatter, Pie }

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
        height: '1',
        width: '1'
    }
    return <Rect {...props} />
}


const Scatter = () => {
    const {results} = useContext(Storage)
    const d = [1,-1, 1, ...new Array(4997).fill(0)]

    return (
        <Svg width='100%' height='100%' >
            <G scale='2'>
                {d.map((value, index) => <ScatterThick key={index} value={value} index={index} />)}
            </G>
            
        </Svg>
    )
}

const Pie = ({r=50}) => {
    const results = [...new Array(800).fill(0), ...new Array(100).fill(1), ...new Array(100).fill(-1)]
    const resultCount = results.reduce((accumulator, curValue) => {
        accumulator[curValue + 1]++
        return accumulator
    }, [0, 0, 0])
    const pieProps = useMemo(() => 
      getPieDashArrayAndOffset(resultCount, r, results.length), [r])
    
    console.log(pieProps)

    return (
      <Svg width='100%' height='100%'>
        <G>
          {pieProps.map((props, idx) => 
          <Circle key={idx} cx='100' cy='100' r='50' fill='transparent' {...props} strokeWidth={100} />)}
        </G>
      </Svg>
    )
}




const sumOfArray = (arr:number[]) => arr.reduce((preVal, curVal) => preVal + curVal)


const pieColor = ['red', 'yellow', 'green']

const getPieDashArrayAndOffset = (values:number[], r:number, total:number) => {
  const circumference = 2 * 3.1415927 * r
  let dashOffset = 0
  let pieProps:{strokeDasharray: number[], strokeDashoffset: number, stroke: string}[] = []
  values.forEach((count, idx) => {
    const offset = dashOffset
    const strokeDashLength = count * circumference / total
    dashOffset = dashOffset - strokeDashLength
    pieProps.push({
      strokeDasharray: [strokeDashLength, total - strokeDashLength],
      strokeDashoffset: offset,
      stroke: pieColor[idx]
    })
  })
  return pieProps
}