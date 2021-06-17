import React from "react";

export { ColorTheme, ThemeProviderProps }

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