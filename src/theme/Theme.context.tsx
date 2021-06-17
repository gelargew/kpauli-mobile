import React, { useCallback, useContext, useMemo, useState } from 'react'
import { DARK_THEME, LIGHT_THEME } from './theme'
import { ThemeProviderProps, Theme } from './theme.interfaces'

export { ThemeProvider, useTheme, useThemeAwareObject }

const Context = React.createContext({
    theme: DARK_THEME,
    toggleTheme: () => {}
})

const ThemeProvider = React.memo((props:ThemeProviderProps) => {
    const [theme, setTheme] = useState(props.initial || DARK_THEME)

    const toggleTheme = useCallback(() => {
        if (theme.id === 'DARK_THEME') setTheme(LIGHT_THEME)    
        else setTheme(DARK_THEME)      
    },[])

    const MemoizedValue = useMemo(() => {
        const value = {
            theme,
            toggleTheme
        }
        return value
    }, [theme, toggleTheme])

    return (
        <Context.Provider value={MemoizedValue}>
            {props.children}
        </Context.Provider>
    )
})

const useTheme = () => useContext(Context)

const useThemeAwareObject = (createStyle: (theme:Theme) => any) => {
    const {theme} = useTheme()

    const themeAwareObject = useMemo(() => createStyle(theme)
    ,[createStyle, theme])

    return themeAwareObject
}