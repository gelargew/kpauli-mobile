import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export { 
    StackParam, 
    LandingScreenProps, 
    KpauliScreenProps, 
    renderNumberProps, 
    LaunchScreenProps,
    ResultScreenProps,
    LoadingScreenProps,
}

type StackParam ={
    Home: undefined,
    Kpauli: any,
    Launch: undefined,
    Result: undefined,
    Loading: undefined
}

type LandingScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Home'>
}

type KpauliScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Kpauli'>,
    route: {
        params: {
            length: number,
            time: number
        }
    }
}

type LaunchScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Launch'>
}

type ResultScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Result'>
}

type LoadingScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Loading'>
}

type renderNumberProps = {
    index: number,
    item: any,
    numbers: number[]
}