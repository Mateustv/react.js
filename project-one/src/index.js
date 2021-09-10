import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {grey,blue} from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: blue[600],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

