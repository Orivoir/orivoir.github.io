import React from 'react';
import Header from './Header'
import Address from './Address'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Profil from './Profil';
import Skills from './Skills';
import Exp from './Exp';
import Training from './Training';
import Other from './Other';

const App = () => {
  return (
    <>
    <Header />
    <Address />

    <Container>
      <Container maxWidth="lg">
          <Box sx={{
            bgcolor: theme => theme.palette.background.paper,
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
      </Container>
    </Container>

    </>
  );
}

export default App;