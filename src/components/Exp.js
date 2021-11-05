import React from 'react';
import Box from '@mui/material/Box';
import ExpItem from './ExpItem';
import Subtitle from './Subtitle';
import { Divider } from '@mui/material';

const Exp = () => {
  return (
    <Box>
      <Subtitle>
        Experience
      </Subtitle>

      <Box sx={{marginLeft: theme => theme.spacing(2)}}>
        <ExpItem
          from="Depuis 01/2019"
          to="Aujourd'hui"
          title="Maintener packages NPM"
          linkMore="https://www.npmjs.com/~orivoir21">
            Sous l'environnement de Nodejs je cherche des solutions au problématique couramment rencontré,
            je les distribues sous forme de packages via NPM
            j'utilise mon expérience d'utilisateur de Nodejs pour trouvé ce qui pourrait être automatisé, amélioré où simplement existé.
            je conçoit un service ré utilisable et je le distribue.
        </ExpItem>

        <Divider />

        <ExpItem
          from="2 Juin 2018"
          to="4 Juin 2018"
          title="Hackathon Dijon"
          linkMore="https://twitter.com/WebForce3/status/1003554210254901249">
            Durant ma formation chez Webforce3 je participe à un hackathon,<br />
            en coopération avec d'autres apprenants nous prenons en main un projet présenté par des entrepreneur,<br />
            nous avons durant 2 jours développé une application web méttant en valeur l'idée original d'un projet.
        </ExpItem>
      </Box>

    </Box>
  );
}

export default Exp;
