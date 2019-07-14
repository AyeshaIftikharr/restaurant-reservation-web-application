import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';

const styles = () => ({
  p: {
    background: 'transparent',
  },
  section: {
    display: 'flex',
    backgroundColor: 'black',
  },
});

const TRUE = true;
const FALSE = false;

const Slider = () => (
  <Carousel
    dynamicHeight={TRUE}
    autoPlay={TRUE}
    showThumbs={FALSE}
    showArrows={TRUE}
    infiniteLoop={TRUE}
    interval="3000"
    showStatus={FALSE}
    stopOnHover={FALSE}
  >
    <div>
      <img src="/src/static/images/1.PNG" alt="" />
      <p> Some Text </p>
    </div>
    <div>
      <img src="/src/static/images/2.PNG" alt="" />
    </div>
    <div>
      <img src="/src/static/images/3.PNG" alt="" />
    </div>
  </Carousel>
);

Slider.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Slider);
