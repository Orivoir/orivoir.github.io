import * as React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles"
import createTheme from "./theme"
import {KEY_THEME_MODE} from "./helper"
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header'

const App = () => {

    const [themeMode, setThemeMode] = React.useState<"dark" | "light">(
        localStorage.getItem(KEY_THEME_MODE) as "dark" | "light" | undefined || "light"
    )
    const theme = createTheme("dark")

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
        </ThemeProvider>
    )
}

const root = ReactDOM.createRoot(
    document.querySelector('main')
)

root.render(<App />)