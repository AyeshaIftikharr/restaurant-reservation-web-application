import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
// Styled Components
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Code Splitting
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

const Transition = styled(TransitionGroup)`
  & .fade-enter {
    opacity: 0;
  }
  & .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  & .fade-exit {
    opacity: 0;
  }
`;

const Routes = ({ match, location }) => {
  return (
    <Transition>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch>
          <Route exact path={`${match.url}`} component={MenuPage} />
          <Route path={`${match.url}/menu`} component={MenuPage} />
          <Route path={`${match.url}/pricing`} component={PricingPage} />
          <Route path={`${match.url}/reservation`} component={ReservationPage} />
          <Route path={`${match.url}/about`} component={AboutPage} />
          <Route path={`${match.url}/contact`} component={ContactPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </CSSTransition>
    </Transition>
  );
};

Routes.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
};

export default Routes;
