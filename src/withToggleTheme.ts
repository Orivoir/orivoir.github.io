import { Theme } from '@mui/material'
import createTheme from './theme'
import React from 'react'
import { KEY_THEME_MODE } from './helper'

interface WithToggleThemeOptions {
    themeState: ['dark' | 'light' ,React.Dispatch<React.SetStateAction<'dark' | 'light'>>],
    themeMode: 'dark' | 'light'
}

export default function withToggleTheme({
  themeMode,
  themeState
}: WithToggleThemeOptions): Theme & { toggleThemeMode: () => void; getThemeMode: () => 'dark' | 'light' } {

  const setThemeMode = themeState[1]

  return {
    ...createTheme(themeMode),
    toggleThemeMode: () => {
      setThemeMode(currentThemeMode => {
        const nextThemeMode = currentThemeMode == 'dark' ? 'light': 'dark'
        localStorage.setItem(KEY_THEME_MODE, nextThemeMode)
        return nextThemeMode
      })
    },
    getThemeMode: (): 'dark' | 'light' => (
      themeState[0]
    )
  }
}
