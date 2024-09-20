import React from 'react'
import { useLocation } from "react-router-dom";
import { ASSOCIATION_PATHNAME_COMPONENT } from "./helper"

export default function ContainerRoute() {
  const location = useLocation();

  const ComponentRoute = ASSOCIATION_PATHNAME_COMPONENT[location.pathname]

  return (
    <>
        <ComponentRoute />
    </>
  );
}