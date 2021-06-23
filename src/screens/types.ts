import { StackNavigationProp } from "@react-navigation/stack"

export { StackParam, LandingScreenProps, KpauliScreenProps, renderNumberProps }

type StackParam ={
    Home: undefined,
    Kpauli: any,
    Launch: undefined,
    Result: undefined
}

type LandingScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Home'>
}

type KpauliScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Kpauli'>,
    data: any
}

type renderNumberProps = {
    index: number,
    item: any,
    numbers: number[]
}