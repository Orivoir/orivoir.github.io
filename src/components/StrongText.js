import React from 'react';

import Typography from '@mui/material/Typography';

const StrongText = ({children, isInline=false}) => {
  return (
    <Typography variant="subtitle1" component={isInline ? "span": "div"} sx={{color: theme => theme.palette.primary.main, fontSize: 18}}>
      {children}
    </Typography>
  );
}

export default StrongText;