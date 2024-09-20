import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Theme, useTheme } from '@mui/material';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ActionToggleTheme() {

    const theme: Theme & {toggleThemeMode: () => void; getThemeMode: () => "dark" | "light"; } = useTheme()

    const onSetTheme = () => (
        theme.toggleThemeMode()
    )

    const currentThemeMode = theme.getThemeMode() 

    return (
    <Tooltip title={`Mode ${currentThemeMode === "dark" ? "clair": "sombre"}`}>
        <IconButton onClick={onSetTheme} >
            {
                currentThemeMode === "dark" ?
                <LightModeIcon /> :
                <DarkModeIcon />
            }
        </IconButton>
    </Tooltip>
    )
}