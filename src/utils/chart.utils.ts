import { PieCircleProps } from "../components/interfaces"

export {
    getPieCircleProps,
    getScatterThickColor,
    getRowNums,
    reshapeScatterData
}

const getRowNums = (number: number) => {
  const row = Math.floor(Math.sqrt(number*0.7)/ 10)*10
  if (row === 10 && number > 300) return 20
  return row || 10
}

const getPieCircleProps = ({data, r}: PieCircleProps) => {
    const total = data.reduce((total, obj) => total + obj.value, 0)
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

const reshapeScatterData = (results: number[], rows=10) => {
    let data: any[] = []   

    data.push(results.reduce((prev, cur, idx) => {
      if (prev.y + prev.height > rows) {
        data.push(prev)
        return { 
          value: cur, 
          height: 1, 
          y: 1, 
          x: prev.x + 1
        }
      }    
      if (prev.value != cur) {
        data.push(prev)
        return { 
          value: cur, 
          height: 1, 
          y: prev.y + prev.height, 
          x: prev.x 
        }
      }    
      prev.height++
      return prev
     
    }, {value: 0, height: 0, y: 1, x: 1}))

    return data
}