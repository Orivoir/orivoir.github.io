import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

import HeaderActionsList from './headerActionsList'

export default function Header({tabs}: {tabs: React.JSX.Element}) {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
              }}
            >
                Portfolio
            </Typography>

            <Typography
              noWrap
              sx={{
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 400
              }}
            >
                Samuel Gaborieau
            </Typography>
          </Box>

          <Box sx={{flexGrow: .1}} />

          <Box>
            <Tooltip title="Samuel GABORIEAU">
              <Avatar alt="Samuel GABORIEAU" src="/static/images/avatar/2.jpg" />
            </Tooltip>
          </Box>

          <Box sx={{flexGrow: 1}} />
        
          <HeaderActionsList />

        </Toolbar>

        <Box sx={theme => ({
          [theme.breakpoints.down('md')]: {
            display: 'none'
          }
        })}>
          {tabs}
        </Box>
      </Container>
    </AppBar>
  )
}