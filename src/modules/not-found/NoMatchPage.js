import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Material UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    textAlign: 'center',
    marginTop: 90,
  },
  sadFace: {
    margin: 10,
    maxHeight: 150,
  },
  subheading: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  button: {
    margin: theme.spacing.unit * 2,
    color: '#fff',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none',
    },
  },
});

const NoMatchPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img className={classes.sadFace} src="/src/static/images/sad-face.svg" alt="careem-logo" />
      <Typography variant="display4" gutterBottom>
        404
      </Typography>
      <Typography variant="display1" gutterBottom>
        OOPS, SORRY WE CANNOT FIND THAT PAGE!
      </Typography>
      <Typography className={classes.subheading} variant="subheading" gutterBottom>
        Either something went wrong or the page does not exist anymore.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component={Link}
        to="/"
      >
        Home Page
      </Button>
    </div>
  );
};

NoMatchPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NoMatchPage);
