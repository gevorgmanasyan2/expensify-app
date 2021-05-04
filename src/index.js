import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import './styles/styles.css';
import App from './App';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from '../src/router/AppRouter';
import reportWebVitals from './reportWebVitals';

const store= configureStore();

store.dispatch(addExpense({description:'Water bill'}));
store.dispatch(addExpense({description:'Gaz bill'}));
store.dispatch(setTextFilter('water'))

const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
     <AppRouter />
  </Provider>,    
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
