import { ColorTheme } from "./theme.interfaces";

export { LIGHT_THEME, DARK_THEME }

const DARK_THEME: ColorTheme = {
    id: 'DARK_THEME',
    bgMain: '#121212',
    bg1: 'rgba(255, 255, 255, 0.04)',
    bg2: 'rgba(255, 255, 255, 0.07)',
    bg3: 'rgba(255, 255, 255, 0.11)',
    textMain: '#fff',
    textDim: 'rgba(255, 255, 255, 0.5)',
    shadow: '#000'
}

const LIGHT_THEME: ColorTheme = {
    id: 'LIGHT_THEME',
    bgMain: '#fff',
    bg1: '#5d7c8b85',
    bg2: '#5d7c8b85',
    bg3: '#b8b8b8',
    textMain: 'rgba(0, 0, 0, 0.8)',
    textDim: 'rgba(0, 0, 0, 0.5)',
    shadow: '#121212'
}
