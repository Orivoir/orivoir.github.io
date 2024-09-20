import About from "./routes/About"
import Carrier from "./routes/Carrier"
import Ressources from "./routes/Ressources"
import Contact from "./routes/Contact"

export const KEY_THEME_MODE = "theme-mode"

export const ASSOCIATION_PATHNAME_COMPONENT = {
    "/about": About,
    "/carrier": Carrier,
    "/ressources": Ressources,
    "/contact": Contact
}
