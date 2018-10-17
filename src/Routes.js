import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoader from './modules/common/PageLoader';

const AuthLayout = Loadable({
  loader: () => import('./modules/auth/layout/MainLayout'),
  loading: PageLoader,
});
const NoMatchPage = Loadable({
  loader: () => import('./modules/not-found/NoMatchPage'),
  loading: PageLoader,
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/auth" />} />
      <Route path="/auth" component={AuthLayout} />
      <Route component={NoMatchPage} />
    </Switch>
  );
};

export default Routes;
