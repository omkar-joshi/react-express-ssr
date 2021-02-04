import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('router-headline')}</h2>
      <ul>
        <li>
          <Link to="/">{t('nav.home')}</Link>
        </li>
        <li>
          <Link to="/page-1">{t('nav.page-1')}</Link>
        </li>
        <li>
          <Link to="/page-2">{t('nav.page-2')}</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

export default Layout;
