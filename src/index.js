import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './theme';

import App from './components/App';

const Main = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

ReactDOM.render(<Main />, document.querySelector('main'))