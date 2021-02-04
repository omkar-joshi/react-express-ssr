import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute: React.FC<RouteProps> = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component as React.ComponentType, {
      // eslint-disable-next-line react/display-name
      onRedirecting: () => <div>Loading...</div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;
