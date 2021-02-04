import React from 'react';

import ProtectedRoute from 'components/ProtectedRoute';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';
import Layout from 'components/Layout';
import routes from './routes';

const PostLoginRoutes: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <ProtectedRoute exact path={routes.page1} component={Page1} />
      <ProtectedRoute exact path={routes.page2} component={Page2} />
    </Layout>
  );
};

export default PostLoginRoutes;
