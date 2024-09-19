import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';




function ResponsiveAppBar() { 

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

        <Box>
            <Tooltip title="mon profil Github">
                <IconButton href="https://github.com/orivoir">
                    <GitHubIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="mon profil Linked'in">
                <IconButton href="edin.com/in/samuel-gaborieau-597676326/">
                    <LinkedInIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Télécharger mon cv">
                <IconButton href="/public/CV_Samuel_Gaborieau_Dev_Fullstack_2024.pdf" download>
                    <DownloadIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Télécharger ma certification développeur web" >
                <IconButton href="/public/Certification_Développement.1e00d674.pdf" download>
                    <SchoolIcon />
                </IconButton>
            </Tooltip>

        </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;