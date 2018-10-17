import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Theme from './styles/muiTheme';
import Routes from './Routes';

const THEME = createMuiTheme(Theme);
// console.log(THEME);

const App = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
