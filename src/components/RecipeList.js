import React, { Component } from 'react';
import {recipes} from '../tempList';
import Recipe from './Recipe';
import ReactSearch from './RecipeSearch';
import loader from "./image/ajax-loader.gif";
import './style.css';
import axios from 'axios';

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
     let show = document.getElementById('bol');
     show.style.display = 'block';
     document.getElementById('loaderjob').style.display='block';
     const {search} = this.state;
       axios.get(`https://www.food2fork.com/api/search?key=01839913ec5ff8a905156fd1f2768a75&q=${search}`)
      //.then(jsonData => console.log(jsonData))
      .then(jsonData => {
        this.setState({recipes:jsonData.data.recipes});
         show.style.display = 'none';
         document.getElementById('loaderjob').style.display='none';
     })
    .catch(error => {
        console.log(error);
    });
   
   } 
  render() {
    const {recipes} = this.state;
    // console.log(this.state.url);
    // const recipeDisplay = () => {
    //     return recipes.map(recipe => {
    //       return(<Recipe key={recipe.recipe_id} recipe={recipe}/>);
    //    })
    // }
    // const searchNotFound = (
    //   <div className="text-danger">
    //     <h1>Search item not found try once again!</h1>
    //   </div>
    // );
    
    // const firstValue = (
    //   <div>Hi it has value</div>
    // );
     
    // const secondValue = (
    //   <p>Its has empty value</p>
    // );
    //   var loginButton;
    //   var loggedIn = true;
    //   if (recipes.length>0) {
    //     loginButton = recipes.map(recipe => {
    //       return(<Recipe key={recipe.recipe_id} recipe={recipe}/>);
    //    });
    //   } else {
    //     loginButton = (<div className="text-danger">
    //     <h1>Search item not found try once again!</h1>
    //   </div>);
    //   }
   

    return (
      <React.Fragment>
         <ReactSearch value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
         <div className="blackoverlay" id="bol"> </div>
          <div className="container my-5">
          
         <img src={loader} className="loaderjob" id="loaderjob" />
          
          <div className="row">
            <div className="col-10 max-auto col-md-12 text-center text-uppercase mb-3">
              <h1 className="text-center text-slanted">Recipe List</h1>
              </div>
          </div>
          <div className="row">
          {recipes.length > 0 ? (recipes.map(recipe => {
             return(<Recipe key={recipe.recipe_id} recipe={recipe}/>);
          })) :(<div className="container">
            <div className="text-danger text-center">
          <p className="text-center">Search item not found try once again!</p>
        </div></div>)}
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default RecipeList;