import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import ReactDOM from 'react-dom';
import FavoriteRecipesList from './components/FavoriteRecipesList/FavoriteRecipesList';

const store = createStore(rootReducer);

// show up store
store.subscribe(() => console.log('store: ', store.getState()));


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/favorites' component={FavoriteRecipesList} />
			</Switch>
		</BrowserRouter>
	</Provider>, document.getElementById('root'));