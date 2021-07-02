import React, { useContext, useMemo } from 'react'
import { View, FlatList } from 'react-native'
import { Storage } from '../MainRoutes'
import Svg, { Circle, Rect, G } from 'react-native-svg'
import { PieCircleProps, PieProps, ScatterProps, ScatterThickProps } from './interfaces'
import { getPieCircleProps, getScatterThickColor } from '../utils/chart.utils'
import { sumArray } from '../utils/commons.utils'

export { Scatter, Pie }


const ScatterThick = ({ value, index, numRows=10 }: ScatterThickProps) => {
    const props = {
        y: index % numRows,
        x: Math.floor(index/numRows),
        fill: getScatterThickColor(value),
        height: '1',
        width: '1'
    }
    return <Rect {...props} />
}


const Scatter = ({results, scale=1, numRows=30}:ScatterProps) => (
    <Svg width='100%' height='100%' >
        <G scale={scale*3}>
            {results.map((value, index) => 
              <ScatterThick key={index} value={value} index={index} numRows={Math.floor(numRows)} />)}
        </G>      
    </Svg>
)


const Pie = ({r=50, data, scale=0.5}: PieProps) => {
    const circleProps = useMemo(() => 
      getPieCircleProps({data, r}), [r])
  
    return (
      <Svg fill='grey'>
        <G scale={scale}>
          {circleProps.map((props, idx) => 
          <Circle key={idx} cx='50%' cy='50%' r={r} fill='transparent' {...props} strokeWidth={100} />)}
        </G>
      </Svg>
    )
}



