import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import About from './views/About';
import Explore from './views/Explore';
import Collection from './views/Collection';
import Collection_Create from './views/Collection_Create';
import Artists from './views/Artists';
import Nft_Page from './views/Nft_Page';
import Nft_Options from './views/Nft_Options';
import Profile from './views/Profile';

import MyItem from './views/MyItem';


import Edit_Profile from './views/Edit_Profile';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/explore" component={Explore} layout={LayoutDefault} />
          <AppRoute exact path="/collection" component={Collection} layout={LayoutDefault} />
          <AppRoute exact path="/collection_create" component={Collection_Create} layout={LayoutDefault} />
          <AppRoute exact path="/edit_profile" component={Edit_Profile} layout={LayoutDefault} />
          <AppRoute exact path="/artists" component={Artists} layout={LayoutDefault} />
          <AppRoute exact path="/nft_page" component={Nft_Page} layout={LayoutDefault} />
          <AppRoute exact path="/nft_options" component={Nft_Options} layout={LayoutDefault} />
          <AppRoute exact path="/profile" component={Profile} layout={LayoutDefault} />
          <AppRoute exact path="/myitems" component={MyItem} layout={LayoutDefault} />
        </Switch>
      )} 
    />
  );
}

export default App;