import { Provider } from 'react-redux';
import * as React from 'react';

export const reduxStory = (story: any, store: any) => (
    <Provider store={store}>
        { story() }
        </Provider>
);
