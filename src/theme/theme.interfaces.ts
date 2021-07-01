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
    chart: {
        red: string;
        yellow: string;
        green: string;
    }
}

interface ThemeProviderProps {
    initial?: Theme,
    children?: any
}

interface Theme {
    id: string;
    color: ColorTheme
}