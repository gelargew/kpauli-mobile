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
    const {results} = useContext(Storage)
    const resultCount = results.reduce((accumulator, curValue) => {
        accumulator[curValue + 1]++
        return accumulator
    }, [0, 0, 0])
    const {dashLengths, dashRotations} = useMemo(() => 
      getPieDashLengthAndRotation(resultCount, r, results.length), [r])

    return (
      <Svg width='100%' height='100%'>
        <Circle cx='100' cy='100' r='100' fill='transparent' strokeDasharray={[100, 528]} stroke='red' strokeWidth={100}  />
        <Circle cx='100' cy='100' r='100' fill='transparent' 
        strokeDasharray={[50, 578]} stroke='blue' strokeWidth={100} strokeDashoffset={-100} />
        <Circle cx='100' cy='100' r='100' fill='transparent' 
        strokeDasharray={[628 - 150, 150]} stroke='yellow' strokeWidth={100} strokeDashoffset={-150} />
      </Svg>
    )
}




const sumOfArray = (arr:number[]) => arr.reduce((preVal, curVal) => preVal + curVal)

const getPieDashLengthAndRotation = (values:number[], r:number, length:number) => {
  const circumference = 2 * 3.1415927 * r
  const dashLengths =  values.map(count => count * circumference / length)
  let dashRotations:number[] = []
  dashLengths.reduce((preVal, curVal) => {
    dashRotations.push(preVal)
    return preVal + curVal
  }, 0)

  return {dashLengths, dashRotations}
}