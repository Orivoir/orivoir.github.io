import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useRouteMatch } from '../helper'
import { Link } from 'react-router-dom'

export default function DesktopNavigation() {
  const routeMatch = useRouteMatch(['/about', '/carrier', '/ressources', '/contact'])
  const currentTab = routeMatch?.pattern?.path
  
  return (
    <Tabs value={currentTab} variant='fullWidth'>
      <Tab label="A propos" value="/about" to="/about" component={Link} />
      <Tab label="Parcours" value="/carrier" to="/carrier" component={Link} />
      <Tab label="Autres informations" value="/ressources" to="/ressources" component={Link} />
      <Tab label="Contact" value="/contact" to="/contact" component={Link} />
    </Tabs>
  )
}