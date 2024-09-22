import About from './routes/About'
import Carrier from './routes/Carrier'
import Ressources from './routes/Ressources'
import Contact from './routes/Contact'
import { matchPath, useLocation } from 'react-router-dom'

export const KEY_THEME_MODE = 'theme-mode'

export const ASSOCIATION_PATHNAME_COMPONENT = {
  '/about': About,
  '/carrier': Carrier,
  '/ressources': Ressources,
  '/contact': Contact
}

export function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation()

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = matchPath(pattern, pathname)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}
