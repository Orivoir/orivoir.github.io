import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button'
import Subtitle from './Subtitle';
import ExpItem from './ExpItem';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Training = () => {

  const createActionDownloadItem = ({
    href,
    title,
    fileSize
  }) => {

  const createActionItem = type => () => {

    if(type === "download") {
      anchorLinkDownload.current.click();
    } else {// open
      window.open(href);
    }
  }

    const anchorLinkDownload = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = (anchorEl instanceof HTMLElement);

    return (
      <>
      <a ref={anchorLinkDownload} href={href} download></a>
      <Button
        sx={{display: "flex", alignItems: "center"}}
        onClick={(event) => {
          // setOpen(true);
          setAnchorEl(event.target);
        }}
      >
        <DownloadIcon />&nbsp;
        <Typography variant="caption">{title}</Typography>
        <PictureAsPdfIcon sx={{marginLeft: theme => theme.spacing(2)}} />&nbsp;
        <Typography variant="caption">{fileSize} Ko</Typography>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
          setAnchorEl(null)
          createActionItem("open")();
        }}>Ouvrir</MenuItem>
        <MenuItem onClick={() => {
          setAnchorEl(null);
          createActionItem("download")();
        }}>Téléchargé</MenuItem>
      </Menu>
    </>
    );
  }

  return (
    <Box>
      <Subtitle>Formation</Subtitle>

      <Box sx={{marginLeft: theme => theme.spacing(2)}}>
        <ExpItem
        from="12 mars 2018"
        to="12 juillet 2018"
        title="Webforce 3 - développement / intégration web"
        actions={[
          createActionDownloadItem({
            href: "./public/PDF/Certification_Développement.1e00d674.pdf",
            title: "Certification Développement",
            fileSize: 987
          }),
          createActionDownloadItem({
            href: "./public/PDF/Certification_Intégration.f11ffefb.pdf",
            title: "Certification Intégration",
            fileSize: 592
          })
        ]}>
          Une formation intensive de 3 mois dans les bureaux de l'IUT au Creusot (Bourgogne Franche Comté)
          où j'apprend en accéléré des langages, outils, méthodologies de développement web que j'approfondie encore aujourd'hui sur le libre accés.
        </ExpItem>
      </Box>

    </Box>
  );
}

export default Training;