import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Features from 'components/Features';
import Layout from 'components/Layout';

const Home: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <h2>Welcome {user?.name}</h2>
          <Features />
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </Layout>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};

export default Home;
