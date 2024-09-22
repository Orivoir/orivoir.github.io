import * as React from 'react'
import Box from '@mui/material/Box'
import {
  MemoryRouter,
  Route,
  Routes
} from 'react-router-dom'
import ContainerRoute from './ContainerRoute'

import Header from './header'


import { StaticRouter } from 'react-router-dom/server'

import MobileNavigation from './navigation/MobileNavigation'
import DesktopNavigation from './navigation/DesktopNavigation'

function Router(props: { children?: React.ReactNode }) {
  const { children } = props
  if (typeof window === 'undefined') {
    return <StaticRouter location="/about">{children}</StaticRouter>
  }

  return (
    <MemoryRouter initialEntries={['/about']} initialIndex={0}>
      {children}
    </MemoryRouter>
  )
}

export default function Routing() {

  return (
    <Router>
      <Box sx={{ width: '100%' }}>
      
        <Header tabs={<DesktopNavigation />} />
      
        <Routes>
          <Route path="*" element={<ContainerRoute />} />
        </Routes>

        <Box sx={theme => ({
          [theme.breakpoints.up('md')]: {
            display: 'none'
          }
        })}>
          <MobileNavigation />
        </Box>      
      </Box>
    </Router>
  )
}