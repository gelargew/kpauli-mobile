import { useState, useEffect } from "react";
import { randomArray } from "./utils";

export { storage, useStorage}

interface storage { 
    length: number; 
    time: number; 
    numbers: number[]; 
    answers: string[]; 
    results: number[]; 
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    launch: () => void;
    updateResults: (position: number, answer: number) => void; 
    updateAnswers: (position: number, answer: string) => void;
}


interface launch {
    length: number,
    time: number
}

const useStorage = () => {
    const [length, setLength] = useState(0)
    const [time, setTime] = useState(0)
    const [numbers, setNumber] = useState<number[]>([])
    const [answers, setAnswers] = useState<string[]>([])
    const [results, setResults] = useState<number[]>([])

    const launch = ()  => {
        setLength(length)
        setTime(time)
        setNumber(randomArray({length: length}))
        setAnswers(new Array(length).fill(''))
        setResults(new Array(length).fill(0))
    }
    const updateAnswers = (position:number, answer:string) => {
        setAnswers(prev => {
            prev[position] = answer
            return [...prev]
        })
    }
    const updateResults = () => {}

    return {
        length, 
        time, 
        numbers, 
        answers, 
        results,
        setLength,
        setTime, 
        launch, 
        updateResults,
        updateAnswers,
    }
}