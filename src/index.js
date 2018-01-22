import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <MuiThemeProvider>
                    <Route path='/' component={App} />
                </MuiThemeProvider>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();