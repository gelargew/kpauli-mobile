export { getRandomInt, randomArray, sumArray }

const getRandomInt = (max=9) => Math.floor(Math.random() * max) + 1

const randomArray = ({max=9, length=50}) => [... new Array(length)].map(() => getRandomInt(max))

const sumArray = (arr: number[]) => arr.reduce((total, val) => total + val, 0)