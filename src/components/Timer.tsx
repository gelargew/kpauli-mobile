import React, { useEffect, useState } from 'react'

import { StyledText } from './commons'
import { TimerProps } from './interfaces'

export { Timer, useTimer }

const useTimer = (initialTime=600, performTimesUp?:Function) => {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
        if (time > 0 ) {
            const timer = setTimeout(() => {
                setTime(prev => prev - 1)
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
        }
        else if (performTimesUp) performTimesUp()
    }, [time])

    return [time, performTimesUp] as const
}

const Timer = (props:TimerProps) => {
    const [time] = useTimer(props.initialTime, props.performTimesUp)
    
    return <StyledText {...props}>{time}</StyledText>
}

