import React, { useContext } from 'react'
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

const Pie = () => {
    const {results} = useContext(Storage)
    const [wrong, empty, correct] = results.reduce((accumulator, curValue) => {
        accumulator[curValue + 1]++
        return accumulator
    }, [0, 0, 0])
    const data2 = [
        {
            name: 'correct',
            count: correct,
            color: 'green',
            legendFontColor: "#7F7F7F",
    legendFontSize: 15
        },
        {
            name: 'empty',
            count: empty,
            color: 'yellow',
            legendFontColor: "#7F7F7F",
    legendFontSize: 15
        },
        {
            name: 'wrong',
            count: wrong,
            color: 'red',
            legendFontColor: "#7F7F7F",
    legendFontSize: 15
        }
    ]
    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ]

    return <PieChart
    data={data}
    width={200}
    height={100}
    accessor={"population"}
    backgroundColor={"transparent"}
    paddingLeft={"15"}
    center={[10, 50]}
    absolute
  />
}

