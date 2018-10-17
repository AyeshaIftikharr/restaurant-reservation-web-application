import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// Material UI Core
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subheading: {
    color: '#5c9233',
    textTransform: 'uppercase',
    margin: theme.spacing.unit * 2,
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  navGroup: {
    marginRight: 100,
  },
  logo: {
    marginLeft: 100,
  },
});

const AppBarContent = ({ classes }) => {
  return (
    <Toolbar className={classes.container}>
      <img className={classes.logo} src="/src/static/images/logo.png" alt="careem-logo" />
      <div className={`row ${classes.navGroup}`}>
        <Typography
          component={NavLink}
          to="/auth/menu"
          variant="body2"
          className={classes.subheading}
        >
          Menu
        </Typography>
        <Typography
          component={NavLink}
          to="/auth/pricing"
          variant="body2"
          className={classes.subheading}
        >
          Pricing
        </Typography>
        <Typography
          component={NavLink}
          to="/auth/reservation"
          variant="body2"
          className={classes.subheading}
        >
          Reservation
        </Typography>
        <Typography
          component={NavLink}
          to="/auth/about"
          variant="body2"
          className={classes.subheading}
        >
          About
        </Typography>
        <Typography
          component={NavLink}
          to="/auth/contact"
          variant="body2"
          className={classes.subheading}
        >
          Contact
        </Typography>
      </div>
    </Toolbar>
  );
};

AppBarContent.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AppBarContent);
