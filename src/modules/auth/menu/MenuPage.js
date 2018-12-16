import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  container: {
    height: '100vh',
  },
  image: {
    display: 'block',
    width: '100%',
    height: 600,
    marginTop: 10,
  },
});

const MenuPage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src="/src/static/images/1.jpg" alt="" />
    </div>
  );
};

MenuPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MenuPage);
