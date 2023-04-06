import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import authReducer from './store/reducers/authReducer';
import teamReducer from './store/reducers/teamReducer';
import boardReducer from './store/reducers/boardReducer';
import reportReducer from './store/reducers/reportReducer';
import templateReducer from './store/reducers/templateReducer';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({auth : authReducer, team: teamReducer, board: boardReducer, template: templateReducer, report :reportReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
