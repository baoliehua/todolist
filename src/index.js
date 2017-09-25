import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './App';
import registerServiceWorker from './registerServiceWorker';
import Provider from './Provider.js';
import store from './Store.js';

ReactDOM.render(
	<Provider store={store}>
	<TodoApp />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
