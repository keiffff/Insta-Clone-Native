import React from 'react';
import { Auth0Provider } from './providers/Auth0';
import { Home } from './screens/Home';

export const App = () => (
  <Auth0Provider>
    <Home />
  </Auth0Provider>
);
