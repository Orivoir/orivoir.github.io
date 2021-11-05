import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Subtitle from './Subtitle';

const Skills = () => {
  return (
    <Box>
      <Subtitle>
        Compétences
      </Subtitle>

      <List>
        <ListItem>
          <ListItemText>HTML 5 / CSS 3 <Typography sx={{fontSize: 14}} variant="caption" component="span">(Avancé)</Typography></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Javascript (ES6) <Typography sx={{fontSize: 14}} variant="caption" component="span">(Avancé)</Typography></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Typescript <Typography variant="caption" component="span">(Intermédiaire)</Typography></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Bootstrap 3 / 4 / 5 <Typography variant="caption" component="span">(Intermédiaire)</Typography></ListItemText>
        </ListItem>
        <ListItem>
        <ListItemText>Préprocesseur SASS <Typography variant="caption" component="span">(Débutant)</Typography></ListItemText>
        </ListItem>

        {/* <Divider /> */}

        <ListItem>
          <ListItemText>Nodejs / NPM <Typography sx={{fontSize: 14}} variant="caption" component="span">(Avancé)</Typography></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>React.js <Typography sx={{fontSize: 14}} variant="caption" component="span">(Avancé)</Typography></ListItemText>
        </ListItem>

        {/* <Divider /> */}

        {/* <Divider /> */}

        <ListItem>
          <ListItemText>PHP 7 / 8 <Typography variant="caption" component="span">(Intermédiaire)</Typography></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Symfony 4 / 5 <Typography variant="caption" component="span">(Débutant)</Typography></ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>Git / Github <Typography variant="caption" component="span">(Intermédiaire)</Typography></ListItemText>
        </ListItem>
      </List>

    </Box>
  );
}

export default Skills;