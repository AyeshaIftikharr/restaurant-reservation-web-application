import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import PageLoader from '../../common/PageLoader';

// Auth Pages
const MenuPage = Loadable({
  loader: () => import('../menu/MenuPage'),
  loading: PageLoader,
});
const PricingPage = Loadable({
  loader: () => import('../pricing/PricingPage'),
  loading: PageLoader,
});
const ReservationPage = Loadable({
  loader: () => import('../reservation/ReservationPage'),
  loading: PageLoader,
});
const ContactPage = Loadable({
  loader: () => import('../contact/ContactPage'),
  loading: PageLoader,
});
const AboutPage = Loadable({
  loader: () => import('../about/AboutPage'),
  loading: PageLoader,
});
const NoMatchPage = Loadable({
  loader: () => import('../../not-found/NoMatchPage'),
  loading: PageLoader,
});

const Routes = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={MenuPage} />
      <Route path={`${match.url}/menu`} component={MenuPage} />
      <Route path={`${match.url}/pricing`} component={PricingPage} />
      <Route path={`${match.url}/reservation`} component={ReservationPage} />
      <Route path={`${match.url}/about`} component={AboutPage} />
      <Route path={`${match.url}/contact`} component={ContactPage} />
      <Route component={NoMatchPage} />
    </Switch>
  );
};

Routes.propTypes = {
  match: PropTypes.object,
};

export default Routes;
