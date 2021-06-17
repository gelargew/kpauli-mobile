import React, { useCallback, useContext, useMemo, useState } from 'react'
import { DARK_THEME, LIGHT_THEME } from './theme'
import { ThemeProviderProps } from './theme.interfaces'

export { ThemeProvider, useTheme }

const Context = React.createContext({
    theme: DARK_THEME,
    toggleTheme: () => {}
})

const ThemeProvider = React.memo<ThemeProviderProps>((props) => {
    const [theme, setTheme] = useState(props.initial || DARK_THEME)

    const toggleTheme = useCallback(() => {
        if (theme.id === 'DARK_Theme') {
            setTheme(LIGHT_THEME)
        }
        else {
            setTheme(DARK_THEME)
        }
    }, [])

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