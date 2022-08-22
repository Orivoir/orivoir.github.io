import React from 'react';
import Header from './Header'
import Address from './Address'
import Box from '@mui/material/Box';

import Profil from './Profil';
import Skills from './Skills';
import Exp from './Exp';
import Training from './Training';
import Other from './Other';
import { useTheme } from '@mui/material/styles';

const App = () => {

  const theme = useTheme();

  return (
    <>
    <Header />
    <Address />

      <Box sx={{
        [theme.breakpoints.down("md")]: {
          width: "100%"
        },
        width: "70%",
        margin: "auto"
      }}>
          <Box sx={{
            bgcolor: theme => theme.palette.background.default,
            color: theme => theme.palette.text.primary,
            // padding: theme => theme.spacing(2)
            padding: theme => theme.spacing(2, 1, 2, 1)
          }}>

            <Profil />
            <Skills />

            <Exp />
            <Training />
            <Other />

          </Box>
      </Box>

    </>
  );
}

export default App;