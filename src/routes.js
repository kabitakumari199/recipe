import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import DetailRecipe from './components/RecipeDetail';

class Routing extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={RecipeList} />
					<Route exact path="/detail/:id" component={DetailRecipe} />
				</Switch>
			</Router>
		)
	}
}

export default Routing;
