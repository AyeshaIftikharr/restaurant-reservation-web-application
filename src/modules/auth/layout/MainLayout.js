import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// Material UI Core
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AppBarContent from '../common/AppBarContent';
// Routes
import Routes from './Routes';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

const MainLayout = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <AppBarContent />
      </AppBar>
      <main>
        <Route render={props => <Routes {...props} />} />
      </main>
    </div>
  );
};

MainLayout.displayName = 'AuthLayout';

MainLayout.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MainLayout);
