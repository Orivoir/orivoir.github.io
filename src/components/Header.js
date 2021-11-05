import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Header = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>

        <Box sx={{marginRight: (theme) => theme.spacing(2)}}>
          <Button>
            <Avatar alt="Samuel GABORIEAU" src="/public/images/identity-thumbnails.jpg" />
          </Button>
        </Box>

        <Typography variant="h5" component="h6" sx={{ flexGrow: 1, display: {md: "block", lg: "block", xs: "none", sm: "none"} }}>
          S.GABORIEAU
        </Typography>

        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          Développeur web fullstack junior
        </Typography>

        <Box>

          <Box component="a" href="https://github.com/Orivoir/" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>

          <IconButton sx={{margin: theme => theme.spacing(2)}} href="https://www.linkedin.com/in/samuel-gaborieau/" target="_blank">
            <LinkedInIcon sx={{color: "#0077b7"}} />
          </IconButton>

          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>

        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Header;