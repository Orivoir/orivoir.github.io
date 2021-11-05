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
          fontSize: 18,
          lineHeight: "2.25rem",
          letterSpacing: ".12rem"
      }}>
        Passionné du web j'exploite le libre accès.<br />
        Je débute mon parcours sur <strong>Openclassrooms</strong>,<br />
        j'expérimente certains concept grâce au documentations du web.<br />
        J'intégre la formation intensif de <strong>WebForce3</strong> (Bourgogne Franche-Compté) en 2018,<br />
        où je découvre et approfondie encore aujourd'hui certaines technologies/méthodologies et bonne pratiques.
      </Typography>
    </Box>
  );
}

export default Profil;