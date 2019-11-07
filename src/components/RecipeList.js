import React, { Component } from 'react';
import {recipes} from '../tempList';
import Recipe from './Recipe';
import ReactSearch from './RecipeSearch';

 class RecipeList extends Component {
  state = {
    recipes:recipes,
    url:"https://www.food2fork.com/api/search?key=01839913ec5ff8a905156fd1f2768a75",
    base_url:"https://www.food2fork.com/api/search?key=01839913ec5ff8a905156fd1f2768a75",
    details_id:35380,
    search:'',
    query:'&q='
   }

   async getRecipes(){
    
    try{
      console.log(this.state.url);
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log('its data',jsonData);
      this.setState({recipes:jsonData.recipes});
    }
    catch(error){
      console.log(error);
    }
  }

  componentDidMount(){
    this.getRecipes();
    console.log('hhhhhhhhhhhhhh');
  }
  componentWillMount(){
    console.log('clicked');
    //this.getRecipes();
  }
  componentDidUpdate(){
    console.log('kkkk');
  }
  componentWillUpdate(){
    console.log('its greact');
  }
  handleChange = (e)=>{
      this.setState({search:e.target.value},()=>{
      console.log(this.state.search);
    })
   }
   handleSubmit = (e)=>{
     e.preventDefault();
      const {base_url,query,search} = this.state;
     this.setState(()=>{
       return {url:`${base_url}${query}${search}`,search:""}
     },()=>{console.log('display')})
     this.getRecipes();
   } 
  render() {
    const {recipes} = this.state;
    console.log(this.state.url);
    return (
      <React.Fragment>
         <ReactSearch value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <div className="container my-5">
          <div className="row">
            <div className="col-10 max-auto col-md-12 text-center text-uppercase mb-3">
              <h1 className="text-center text-slanted">Recipe List</h1>
              </div>
          </div>
          <div className="row">
          {recipes.map(recipe => {
             return(<Recipe key={recipe.recipe_id} recipe={recipe}/>);
          })}
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default RecipeList;