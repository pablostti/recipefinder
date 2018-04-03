import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from '../RecipeItem/RecipeItem';

import { Link } from 'react-router-dom';

class FavoriteRecipesList extends Component {


	render(){
		console.log('favorite recipes: ', this.props.favoriteRecipes);
		return(
			<div>
				<h4 className="link"><Link to='/'>Home</Link></h4>
				<h2>FavoriteRecipes</h2>
				{
					this.props.favoriteRecipes.map((recipe, index) =>{
						return (
							<RecipeItem 
								key={index} 
								recipe={recipe}
								favoriteButton={false} 
							/>
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		favoriteRecipes: state.favoriteRecipes
	}
}

export default connect(mapStateToProps, null)(FavoriteRecipesList);