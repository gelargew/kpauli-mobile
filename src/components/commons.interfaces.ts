import { ViewProps } from "react-native";
import { PressableProps } from "react-native";

export { ButtonProps, MainContainerProps }

interface ButtonProps extends PressableProps {
    title: string
}

interface MainContainerProps extends ViewProps {
    children: any
}