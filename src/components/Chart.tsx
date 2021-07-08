import React, { useContext, useLayoutEffect, useMemo, useState } from 'react'
import Svg, { Circle, Rect, G } from 'react-native-svg'
import { PieCircleProps, PieProps, ScatterProps, ScatterThickProps } from './interfaces'
import { getPieCircleProps, getScatterThickColor, reshapeScatterData } from '../utils/chart.utils'

export { Scatter, Pie }


const ScatterThick = ({ data, index }: ScatterThickProps) => {
    const props = {
        y: data.y,
        x: data.x,
        fill: getScatterThickColor(data.value),
        height: data.height,
        width: '1'
    }
    return <Rect {...props} />
}


const Scatter = ({results, scale=1, numRows=30}:ScatterProps) => {
  const data = reshapeScatterData(results, numRows)
  const scaler = 140 / (Math.sqrt(results.length))

  return (
    <Svg width='200' height='150' >
        <G scale={scaler}>
          
        {data.map((dat, index) => 
            <ScatterThick key={index} data={dat} index={index} />)}
                   
        </G>     
    </Svg>
)}


const Pie = ({r=50, data, scale=0.6}: PieProps) => {
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



