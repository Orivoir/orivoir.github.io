import { createTheme as MUIcreateTheme } from '@mui/material'

export default function createTheme(defaultTheme: 'dark' | 'light' = 'light') {
  return MUIcreateTheme({
    palette: {
      mode: defaultTheme
    }
  })
} 
