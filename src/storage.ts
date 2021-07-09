import React, { useState, useContext } from "react";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import { randomArray } from "./utils/commons.utils";

export { Storage, storage, useStorage, useCreateStorage}

interface storage { 
    length: number; 
    time: number; 
    numbers: number[]; 
    answers: string[]; 
    results: number[]; 
    position: number;
    timeLeft: number;
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setPosition: React.Dispatch<React.SetStateAction<number>>;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
    launch: (t:number, l:number) => void;
    updateResults: (position: number, answer: number) => void; 
    updateAnswers: (position: number, answer: string) => void;
    answerChangedCount: number
}

const useCreateStorage = () => {
    const [length, setLength] = useState(1000)
    const [time, setTime] = useState(20)
    const [numbers, setNumber] = useState<number[]>([])
    const [answers, setAnswers] = useState<string[]>([])
    const [results, setResults] = useState<number[]>([])
    const [position, setPosition] = useState(0)
    const [answerChangedCount, setAnswerChangedCount] = useState(0)
    const [timeLeft, setTimeLeft] = useState(time*60)

    const launch = (t=20, l=2000)  => {
        setLength(l)
        setTime(t)
        setNumber(randomArray({length: l}))
        setAnswers(new Array(l).fill(''))
        setResults(new Array(l).fill(0))
        setPosition(0)
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
        timeLeft,
        setTimeLeft,
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