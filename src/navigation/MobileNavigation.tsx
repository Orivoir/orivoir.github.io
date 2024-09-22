import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRouteMatch } from '../helper'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'

import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import CallIcon from '@mui/icons-material/Call'

export default function MobileNavigation() {

  const navigate = useNavigate()
  const routeMatch = useRouteMatch(['/about', '/carrier', '/ressources', '/contact'])
  const currentTab = routeMatch?.pattern?.path
  
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels value={currentTab} onChange={(ev, newValue: string) => {
        navigate(newValue)
      }}>
        <BottomNavigationAction label="A propos" value="/about" icon={<PersonIcon />} />
        <BottomNavigationAction label="Parcours" value="/carrier" icon={<WorkIcon />} />
        <BottomNavigationAction label="Autres" value="/ressources" />
        <BottomNavigationAction label="Contact" value="/contact" icon={<CallIcon />} />
      </BottomNavigation>
    </Paper>
  )
}