import * as React from 'react';
import { Route, Switch } from 'react-router';
import MainContainer from "./view/MainContainer";
import CvEditorReduxContainer from './view/cveditorredux/CvEditorReduxContainer';

// TODO: Route should be defined with constants so that no mistakes are done upon push(route) call.
export default () => (
  <MainContainer>
    <Switch>
      <Route exact={true} path="/" component={CvEditorReduxContainer} />
      <Route component={CvEditorReduxContainer} />
    </Switch>
  </MainContainer>
);
