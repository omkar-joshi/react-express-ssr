import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider, AppState } from '@auth0/auth0-react';

const Auth0ProviderWithHistory: React.FC = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN as string}
      clientId={process.env.AUTH0_CLIENT_ID as string}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
