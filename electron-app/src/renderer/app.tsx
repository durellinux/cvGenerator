import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from "./Root";
import { AppContainer } from "react-hot-loader";
import { configureStore, history} from "./configureStore";

const store = configureStore();

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
      , mainElement);
};

render();
