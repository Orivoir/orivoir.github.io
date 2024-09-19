import * as React from "react"
import ReactDOM from "react-dom/client"


const App = () => (
    <h1>Hello React !</h1>
)

const root = ReactDOM.createRoot(
    document.querySelector('main')
)

root.render(<App />)