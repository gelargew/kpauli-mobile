import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export { StackParam, LandingScreenProps, KpauliScreenProps, renderNumberProps, LaunchScreenProps }

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

type renderNumberProps = {
    index: number,
    item: any,
    numbers: number[]
}