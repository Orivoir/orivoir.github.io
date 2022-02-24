import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Subtitle from './Subtitle';

const Profil = () => {
  return (
    <Box>
      <Subtitle>
        Profil
      </Subtitle>

      <Typography variant="subtitle1" sx={{
          marginLeft: theme => theme.spacing(2),

          fontSize: {sm: 18, md: 18, lg: 18, xs: 16},
          lineHeight: {md: "2.25rem", lg: "2.25rem", sm: "2.25rem", xs: "1.9rem"},
          letterSpacing: {md: ".12rem", lg: ".12rem", sm: ".12rem", xs: ".085rem"}
      }}>
        Passionner du web, j'exploite le libre accès.<br />
        Je débute mon parcours sur Openclassrooms,
        j'expérimente certains concepts grâce aux documentations du web.<br />
        J'intègre la formation intensive de WebForce3 (Bourgogne-Franche-Comté) en 2018,<br />
        où je découvre et approfondie encore aujourd'hui certaines technologies/méthodologies et bonne pratiques.
      </Typography>
    </Box>
  );
}

export default Profil;
