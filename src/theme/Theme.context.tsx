import React, { useCallback, useContext, useMemo, useState } from 'react'
import { DARK_THEME, LIGHT_THEME } from './theme'
import { ThemeProviderProps } from './theme.interfaces'

export { ThemeProvider, useTheme }

const Context = React.createContext({
    theme: DARK_THEME,
    toggleTheme: () => {}
})

const ThemeProvider = ((props:ThemeProviderProps) => {
    const [theme, setTheme] = useState(props.initial || DARK_THEME)

    const toggleTheme = () => {
        console.log('yes')
        if (theme.id === 'DARK_THEME') {
            setTheme(LIGHT_THEME)
        }
        else {
            setTheme(DARK_THEME)
        }
        console.log(theme)
    }

    // const MemoizedValue = useMemo(() => {
    //     const value = {
    //         theme,
    //         toggleTheme
    //     }
    //     return value
    // }, [theme, toggleTheme])

    return (
        <Context.Provider value={{theme, toggleTheme}}>
            {props.children}
        </Context.Provider>
    )
})

const useTheme = () => useContext(Context)