import React, { useContext, useLayoutEffect, useMemo, useState } from 'react'
import Svg, { Circle, Rect, G } from 'react-native-svg'
import { PieCircleProps, PieProps, ScatterProps, ScatterThickProps } from './interfaces'
import { getPieCircleProps, getScatterThickColor } from '../utils/chart.utils'

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


const Scatter = ({results, scale=1, numRows=30}:ScatterProps) => {

  return (
    <Svg width='200' height='150' >
        <G scale={scale*2}>
          
        {results.map((value, index) => 
            <ScatterThick key={index} value={value} index={index} numRows={Math.floor(numRows)} />)}
                   
        </G>     
    </Svg>
)}


const Pie = ({r=50, data, scale=0.7}: PieProps) => {
    const circleProps = useMemo(() =>  
      getPieCircleProps({data, r}), [r])
    const position = useMemo(() => `${r/scale}%`, [scale, r])

    return (
      <Svg width='150' height='150'>
        <G  scale={scale}>
          {circleProps.map((props, idx) => 
          <Circle key={idx} cx={position} cy={position} r={r} fill='transparent' {...props} strokeWidth={100} />)}
        </G>
      </Svg>
    )
}



