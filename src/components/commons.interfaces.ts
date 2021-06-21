import { ViewProps } from "react-native";
import { PressableProps, ViewStyle } from "react-native";

export { CustomButtonProps, MainContainerProps }


interface CustomButtonProps extends PressableProps {
    title: string,
    addStyle?: ViewStyle,
    fontSize?: number
}

interface MainContainerProps extends ViewProps {
    children: any
}