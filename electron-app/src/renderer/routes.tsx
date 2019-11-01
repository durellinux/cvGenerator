import * as React from 'react';
import { Route, Switch } from 'react-router';
import MainContainer from "./view/MainContainer";
import LandingPage from "./view/landing/LandingPage";
import { CvEditorContainer } from './view/cveditor/CvEditorContainer';
import CvEditorReduxContainer from './view/cveditorredux/CvEditorReduxContainer';

// TODO: Route should be defined with constants so that no mistakes are done upon push(route) call.
export default () => (
  <MainContainer>
    <Switch>
      <Route exact={true} path="/cvRedux" component={CvEditorReduxContainer} />
      <Route exact={true} path="/cvLocalState" component={CvEditorContainer} />
      <Route exact={true} path="/" component={LandingPage} />
      <Route component={LandingPage} />
    </Switch>
  </MainContainer>
);
