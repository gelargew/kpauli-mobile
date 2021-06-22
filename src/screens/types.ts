import { StackNavigationProp } from "@react-navigation/stack"

export { StackParam, LandingScreenProps, KpauliScreenProps }

type StackParam ={
    Home: undefined,
    Kpauli: any,
    Launch: undefined
}

type LandingScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Home'>
}

type KpauliScreenProps = {
    navigation: StackNavigationProp<StackParam, 'Kpauli'>,
    data: any
}