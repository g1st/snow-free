import React from 'react';
import Button from 'material-ui/Button';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { HashLink as Link } from 'react-router-hash-link';

import classes from './Hero.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#252525' },
  },
});

const hero = () => (
  <div className={classes.Hero}>
    <div className={classes.Background}>
      <div className={classes.Container}>
        <span className={classes.Heading}>NEW BRANDING AGENCY</span>
        <span className={classes.Heading2}>We are about to change the way</span>
        <span className={classes.Heading3}>you publish on the web</span>
        <div className={classes.Button}>
          <MuiThemeProvider theme={theme}>
            <Button variant="raised" color="primary" size="large">
              let it snow
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
    </div>
    <Link to="/#about" smooth>
      <div className={classes.ScrollDown}>v</div>
    </Link>
  </div>
);

export default hero;
