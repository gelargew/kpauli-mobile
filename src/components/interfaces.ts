import { PressableProps, ViewStyle, ViewProps } from "react-native";

export { CustomButtonProps, MainContainerProps, NumpadProps }


interface CustomButtonProps extends PressableProps {
    title: string,
    addStyle?: ViewStyle,
    fontSize?: number
}

interface MainContainerProps extends ViewProps {
    children: any
}

interface NumpadProps extends ViewProps {
    onPress?: (value: string | number) => void,
    disabled?: boolean
}