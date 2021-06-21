import { ViewProps } from "react-native";
import { PressableProps } from "react-native";

export { CustomButtonProps, MainContainerProps }

interface CustomButtonProps extends PressableProps {
    title: string,
    fontSize?: number
}

interface MainContainerProps extends ViewProps {
    children: any
}