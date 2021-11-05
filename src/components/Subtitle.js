import React from 'react';
import Typography from '@mui/material/Typography';

const Subtitle = ({children}) => {
  return (
    <Typography
      variant="h5"
      sx={{margin: theme => theme.spacing(2, 0, 2, 0), color: theme => theme.palette.primary.dark}}
    >
      {children}
    </Typography>
  );
}

export default Subtitle;