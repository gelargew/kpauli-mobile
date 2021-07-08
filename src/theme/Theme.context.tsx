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
        setTheme(prev => {
            if (prev.id === 'DARK_THEME') return LIGHT_THEME
            return DARK_THEME
        })  
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

const useThemeAwareObject = (createStyle: (theme:Theme, ...args: any) => any) => {
    const {theme} = useTheme()

    const themeAwareObject = useMemo(() => createStyle(theme)
    ,[createStyle, theme])

    return themeAwareObject
}