import { PressableProps, ViewStyle, ViewProps, TextProps } from "react-native";

export { CustomButtonProps, MainContainerProps, NumpadProps, CustomTextProps }



interface CustomButtonProps extends PressableProps {
    title: string,
    addStyle?: ViewStyle,
    fontSize?: number,
    style?: object | (() => object)
}

interface MainContainerProps extends ViewProps {
    children: any
}

interface NumpadProps extends ViewProps {
    onPress?: (value: string | number) => void,
    disabled?: boolean
}

interface CustomTextProps extends TextProps {
    style?: object
    children?: any
}