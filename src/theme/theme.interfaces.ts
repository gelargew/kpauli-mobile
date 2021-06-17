export { ColorTheme, ThemeProviderProps, Theme }

interface ColorTheme {
    id: string;
    bgMain: string;
    bg1: string;
    bg2: string;
    bg3: string;
    shadow: string;
    textMain: string;
    textDim: string;
}

interface ThemeProviderProps {
    initial?: ColorTheme,
    children?: any
}

interface Theme {
    id: string;
    color: ColorTheme
}