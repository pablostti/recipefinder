import React, { Component } from 'react';
import SearchRecipes from './components/SearchRecipes/SearchRecipes';
import RecipeList from './components/RecipeList/RecipeList';
import './styles/index.css';

class App extends Component {

	render(){
		return (
			<div>
				<h1>Recipe Finder</h1>
				<SearchRecipes />
				<RecipeList />
			</div>
		)
	}

}

export default App;