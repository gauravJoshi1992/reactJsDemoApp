import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
// import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import User from './components/user.component';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<User />
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
