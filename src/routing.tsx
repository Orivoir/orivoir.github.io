import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import ContainerRoute from './ContainerRoute';

import { StaticRouter } from 'react-router-dom/server';

function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/about">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/about']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function TabsNavigation() {
  const routeMatch = useRouteMatch(['/about', '/carrier', '/ressources', '/contact']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab} variant='fullWidth'>
      <Tab label="A propos" value="/about" to="/about" component={Link} />
      <Tab label="Parcours" value="/carrier" to="/carrier" component={Link} />
      <Tab label="Autres informations" value="/ressources" to="/ressources" component={Link} />
      <Tab label="Contact" value="/contact" to="/contact" component={Link} />
    </Tabs>
  );
}

export default function TabsRouter() {
  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <TabsNavigation />
        <Routes>
          <Route path="*" element={<ContainerRoute />} />
        </Routes>
      </Box>
    </Router>
  );
}