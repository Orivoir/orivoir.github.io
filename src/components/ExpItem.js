import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import StrongText from './StrongText';

const ExpItem = ({
  from,
  to,
  title,
  children,
  linkMore,
  actions
}) => {
  return (
    <Box sx={{margin: theme => theme.spacing(2, 0, 2, 0)}}>

      <Typography variant="subtitle1">

        <StrongText isInline>
          {title}
        </StrongText>
        &nbsp;- {from} / {to}
      </Typography>

      <Typography variant="body1">
        {children}
      </Typography>

      {linkMore && (
        <Box sx={{marginTop: theme => theme.spacing(2)}}>
          <Button href={linkMore} target="_blank" variant="outlined">
            voir plus
          </Button>
        </Box>
      )}

      {actions && (
        <ListItem sx={{
          display: "flex",
          justifyContent: { xs: "baseline", sm: "baseline", lg: "space-around", md: "space-around"},
          flexWrap: "wrap"}}>
          {actions.map((action, index) => (
            <ListItemIcon key={index}>
              {action}
            </ListItemIcon>
          ))}
        </ListItem>
      )}

    </Box>
  );
}

export default ExpItem;
