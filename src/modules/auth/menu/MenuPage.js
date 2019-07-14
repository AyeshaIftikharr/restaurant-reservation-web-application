import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Carousel from './components/Slider';

const styles = () => ({
  section: {
    marginBottom: 20,
  },
});

const MenuPage = ({ classes }) => {
  return (
    <div>
      <section className={classes.section}>
        <Carousel className={classes.carousel} />
      </section>
    </div>
  );
};

MenuPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MenuPage);
