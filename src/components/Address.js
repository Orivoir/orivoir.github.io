import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RoomIcon from '@mui/icons-material/Room';
import Link from '@mui/material/Link';

const Address = () => {
  return (
    <Box sx={{
      backgroundColor: theme => theme.palette.primary.dark,
      display: "flex",
      justifyContent: "space-around",
      padding: theme => theme.spacing(2),
      flexDirection: {
        xs: "column",
        sm: "column",
        md: "row",
        lg: "row"
      }
    }}>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <AlternateEmailIcon />
        <Typography sx={{marginLeft: theme => theme.spacing(1)}} variant="subtitle1">

          <Link color="inherit" sx={{textDecoration: "none"}} href="mailto:sam.gabor@hotmail.com">
            sam.gabor@hotmail.com
          </Link>
        </Typography>
      </Box>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <PhoneAndroidIcon />
        <Typography sx={{marginLeft: theme => theme.spacing(1)}} variant="subtitle1">
            06.42.42.28.35
        </Typography>
      </Box>

      <Box sx={{display: "flex", alignItems: "center"}}>
        <RoomIcon />
        <Typography sx={{marginLeft: theme => theme.spacing(1)}} variant="subtitle1">
          Lieu dit les clous, 03170 Doyet
        </Typography>
      </Box>
    </Box>
  );
}

export default Address;