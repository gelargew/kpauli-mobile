import React, { useState, useContext } from "react";
import { randomArray } from "./utils/commons.utils";

export { Storage, storage, useStorage, useCreateStorage}

interface storage { 
    length: number; 
    time: number; 
    numbers: number[]; 
    answers: string[]; 
    results: number[]; 
    position: number;
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setPosition: React.Dispatch<React.SetStateAction<number>>;
    launch: () => void;
    updateResults: (position: number, answer: number) => void; 
    updateAnswers: (position: number, answer: string) => void;
    answerChangedCount: number
}

const useCreateStorage = () => {
    const [length, setLength] = useState(1000)
    const [time, setTime] = useState(20)
    const [numbers, setNumber] = useState<number[]>([])
    const [answers, setAnswers] = useState<string[]>([])
    const [results, setResults] = useState<number[]>([
        ...new Array(1000).fill(0), 
        ...new Array(500).fill(-1),
        ...new Array(1000).fill(1),
        ...new Array(1000).fill(-1),
        ...new Array(500).fill(0),
        ...new Array(1000).fill(1)
    ])
    const [position, setPosition] = useState(0)
    const [answerChangedCount, setAnswerChangedCount] = useState(0)

    const launch = ()  => {
        setLength(length)
        setTime(time)
        setNumber(randomArray({length: length}))
        setAnswers(new Array(length).fill(''))
        setResults(new Array(length).fill(0))
    }
    const updateAnswers = (position:number, answer:string) => {
        setAnswers(prev => {
            if (prev[position] != '') setAnswerChangedCount(previous => previous + 1)
            prev[position] = answer
            return [...prev]
        })
        updateResults(parseInt(answer))
    }
    const updateResults = (answer:number) => {
        setResults(prev => {
            let correctAns = (numbers[position] + numbers[position + 1]) % 10
            prev[position] = answer === correctAns ? 1 : -1
            return prev
        })
    }

    return {
        length, 
        time, 
        numbers, 
        answers, 
        results,
        position,
        setPosition,
        setLength,
        setTime, 
        launch, 
        updateResults,
        updateAnswers,
        answerChangedCount
    }
}

const Storage = React.createContext<storage>(null!)

const useStorage = () => useContext(Storage)