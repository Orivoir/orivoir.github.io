import React from 'react'

import { Stack } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadIcon from '@mui/icons-material/Download'
import SchoolIcon from '@mui/icons-material/School'
import ActionToggleTheme from './actionToggleTheme'

export default function HeaderActionsList() {

  return (
    <Stack direction="row" spacing={1}>
      <ActionToggleTheme />

      <Tooltip title="mon profil Github">
        <IconButton href="https://github.com/orivoir">
          <GitHubIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="mon profil Linked'in">
        <IconButton href="https://www.linkedin.com/in/samuel-gaborieau-597676326/">
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Télécharger mon cv">
        <IconButton href="/public/CV_Samuel_Gaborieau_Dev_Fullstack_2024.pdf" download>
          <DownloadIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Télécharger ma certification développeur web" >
        <IconButton href="/public/Certification_Développement.1e00d674.pdf" download>
          <SchoolIcon />
        </IconButton>
      </Tooltip>

    </Stack>
  )
}