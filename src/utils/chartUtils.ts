import { PieCircleProps } from "../components/interfaces"

export {
    getPieCircleProps,
    getScatterThickColor
}


const getPieCircleProps = ({data, r, total}: PieCircleProps) => {
    const circumference = 2 * 3.1415927 * r
    let dashOffset = 0
    let pieProps:{
      strokeDasharray: number[], 
      strokeDashoffset: number, 
      stroke: string
    }[] = []
    data.forEach((dat, idx) => {
      const offset = dashOffset
      const strokeDashLength = dat.value * circumference / total
      dashOffset = dashOffset - strokeDashLength
      pieProps.push({
        strokeDasharray: [strokeDashLength, total - strokeDashLength],
        strokeDashoffset: offset,
        stroke: dat.color
      })
    })
    return pieProps
  }

const getScatterThickColor = (value:number) => {
    if (value === 1) return 'green'
    if (value === 0) return 'yellow'
    if (value === -1) return 'red'
    return 'grey'
}