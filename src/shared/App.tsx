import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setLocale } from 'store/app/actions';
import { Locale } from 'store/app/types';
import PostLoginRoutes from 'Navigation/PostLoginRoutes';
import { ReactComponent as ReactLogo } from 'assets/react.svg';
import Home from 'pages/Home';
import routes from 'Navigation/routes';
import css from './App.module.css';
import favicon from './assets/favicon.png';

const App: React.FC<any> = () => {
  const dispatch = useDispatch();
  const handleLocaleChange = useCallback(
    (e: React.FormEvent<HTMLButtonElement>) => {
      dispatch(setLocale(e.currentTarget.value as Locale));
    },
    [dispatch],
  );
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <Helmet
        defaultTitle="React + Express + SSR starter kit"
        titleTemplate="%s – React + Express + SSR starter kit"
        link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
      />
      <h1>
        <ReactLogo className={css.reactLogo} /> React + Express + SSR starter
        kit
      </h1>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <PostLoginRoutes />
        <Route render={() => '404!'} />
      </Switch>
      <h2>{t('i18n-example')}</h2>
      <p>
        <button value="de_DE" onClick={handleLocaleChange}>
          Deutsch
        </button>
        <br />
        <br />
        <button value="en_US" onClick={handleLocaleChange}>
          English
        </button>
      </p>
    </div>
  );
};

export default App;
