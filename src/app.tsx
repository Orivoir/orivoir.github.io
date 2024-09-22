import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import {KEY_THEME_MODE} from './helper'
import CssBaseline from '@mui/material/CssBaseline'
import Routing from './routing'
import withToggleTheme from './withToggleTheme'

const App = () => {

  const defaultThemeMode = localStorage.getItem(KEY_THEME_MODE) as 'dark' | 'light' | undefined || 'light'

  const themeState = React.useState<'dark' | 'light'>(defaultThemeMode)
    
  const theme = withToggleTheme({
    themeMode: defaultThemeMode,
    themeState
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(
  document.querySelector('main')
)

root.render(<App />)