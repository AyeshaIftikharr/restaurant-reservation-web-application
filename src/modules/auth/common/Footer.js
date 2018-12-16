import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    height: 90,
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
  },
  p: {
    color: '#fff',
    display: 'block',
    padding: 30,
    paddingBottom: 0,
  },
  a: {
    color: '#5C9233',
    '&:hover': {
      color: '#00710A',
      textDecoration: 'none',
    },
  },
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.container}>
      <p className={classes.p}>
        &copy; Copyright, 2015{' '}
        <a className={classes.a} href="http://mamaskitchen.com">
          MamasKitchen.{' '}
        </a>
        Theme by{' '}
        <a className={classes.a} href="http://themewagon.com">
          ThemeWagon
        </a>
      </p>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Footer);
