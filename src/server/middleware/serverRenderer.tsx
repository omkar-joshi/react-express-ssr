import React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { Auth0Provider } from '@auth0/auth0-react';

import IntlProvider from '../../shared/i18n/IntlProvider';
import App from '../../shared/App';
import Html from '../components/HTML';

const helmetContext = {};
const routerContext = {};

const serverRenderer: any = () => (
  req: express.Request & { store: Store },
  res: express.Response,
) => {
  const content = renderToString(
    <Provider store={res.locals.store}>
      <Router location={req.url} context={routerContext}>
        <IntlProvider>
          <HelmetProvider context={helmetContext}>
            <Auth0Provider
              domain={process.env.AUTH0_DOMAIN as string}
              clientId={process.env.AUTH0_CLIENT_ID as string}
            >
              <App />
            </Auth0Provider>
          </HelmetProvider>
        </IntlProvider>
      </Router>
    </Provider>,
  );

  const state = JSON.stringify(res.locals.store.getState());

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          css={[
            res.locals.assetPath('bundle.css'),
            res.locals.assetPath('vendor.css'),
          ]}
          helmetContext={helmetContext}
          scripts={[
            res.locals.assetPath('bundle.js'),
            res.locals.assetPath('vendor.js'),
          ]}
          state={state}
        >
          {content}
        </Html>,
      ),
  );
};

export default serverRenderer;
