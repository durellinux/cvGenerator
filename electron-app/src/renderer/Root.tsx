import * as React from 'react';
import { History } from 'history';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import * as Redux from "redux";
import Routes from './routes';

interface IRootType {
  store: Redux.Store<any>;
  history: History<any>
};

export default function Root({ store, history }: IRootType) {
  return (
    <Provider store={store as any} >
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
