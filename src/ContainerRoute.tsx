import React from 'react'
import { useLocation } from 'react-router-dom'
import { ASSOCIATION_PATHNAME_COMPONENT } from './helper'
import { Container } from '@mui/material'

export default function ContainerRoute() {
  const location = useLocation()

  const ComponentRoute = ASSOCIATION_PATHNAME_COMPONENT[location.pathname]

  return (
    <Container maxWidth="xl" sx={{marginTop:  '20px'}}>
      <ComponentRoute />
    </Container>
  )
}