import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers/index'
import App from './App';


const createStorewithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
<Provider store={createStorewithMiddleware(reducers)}>
<App />
</Provider>

 ,
  document.getElementById('root')
);


