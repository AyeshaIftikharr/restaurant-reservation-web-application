import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  container: {
    margin: 10,
    marginLeft: '4%',
    marginRight: '7%',
    height: 483,
  },
  typography: {
    marginTop: 30,
  },
  column: {
    marginTop: '4%',
    textAlign: 'justify',
  },
});

const AboutPage = ({ classes }) => {
  return (
    <div className={`row ${classes.container}`}>
      <div className={`col-md-5 ${classes.column}`}>
        <img src="/src/static/images/About-C-bg.jpg" alt="" height="375" width="500" />
      </div>
      <div className={`col-md-2 ${classes.aboutImage}`}>
        <img src="/src/static/images/about.png" alt="" />
      </div>
      <div className={`col-md-5 ${classes.column}`}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography className={classes.typography} variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate,
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Quos blanditiis
          tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate,numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography className={classes.typography} variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate,
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. Quos blanditiis
          tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate,numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
    </div>
  );
};

AboutPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AboutPage);
