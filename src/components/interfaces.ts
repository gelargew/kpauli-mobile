import React from "react";
import { PressableProps, ViewStyle, ViewProps, TextProps } from "react-native";
import { CircleProps } from "react-native-svg";

export { 
    CustomButtonProps, 
    MainContainerProps, 
    NumpadProps, 
    CustomTextProps, 
    TimerProps,
    PieProps,
    PieCircleProps,
    ScatterProps,
    ScatterThickProps,
    MainContainerProps as ContainerProps
}



interface CustomButtonProps extends PressableProps {
    title: string,
    addStyle?: ViewStyle,
    fontSize?: number,
    style?: object | (() => object)
}

interface MainContainerProps extends ViewProps {
    children?: any,
    style?: object
}

interface NumpadProps extends ViewProps {
    onPress?: (value: string | number) => void,
    disabled?: boolean
}

interface CustomTextProps extends TextProps {
    style?: object
    children?: any
}

interface TimerProps extends CustomTextProps {
    ref: any,
    performTimesUp?: Function,
    initialTime?: number,
    setTimeLeft?: () => void
}


// charts
interface PieDataProps {
    data: { value: number, color: string }[]
}

interface PieProps extends PieDataProps {
    r?: number,
    scale?: number
}

interface PieCircleProps extends PieDataProps {
    r: number,
}

interface ScatterProps {
    results: number[],
    scale?: number,
    numRows?: number
}

interface ScatterThickProps {
    data: any,
    index: number,
    numRows?: number
}