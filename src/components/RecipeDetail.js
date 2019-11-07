import React, { Component } from 'react';
import {recipe} from '../tempDetails';
import {Link} from 'react-router-dom';

export default class RecipeDetail extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     recipe:recipe,
  //     url:`https://www.food2fork.com/api/get?key=01839913ec5ff8a905156fd1f2768a75&rId=${this.props.id}
  //     `
  //   }
  // }
  // async componentDidMount(){
  // try{
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({recipes:jsonData.recipes});
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
   state = {
     recipe:recipe
   }
   async componentDidMount(){
    const id = this.props.match.params.id;
  
    const url = `https://www.food2fork.com/api/get?key=01839913ec5ff8a905156fd1f2768a75&rId=${id}`;
    try{
        const data = await fetch(url);
        const jsonData = await data.json();
        this.setState((state,props)=>{
          return{recipe:jsonData.recipe}
        },()=>{});
      }
      catch(error){
        console.log(error);
      }
    }
 
  render() {
    console.log(this.state.recipe);
    const {image_url,publisher,publisher_url,source_url,title,ingredients} = this.state.recipe;
    return (
      <React.Fragment>
       <div className="container">
         <div className="row">
           <div className="col-10 max-auto col-md-6 my-3">
             <Link to="/" className="btn btn-warning mb-3 text-capitalize">Back to recipe list</Link>
             <img src={image_url} className="d-block w-100" />
           </div>
           <div className="col-10 max-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize">Provided by {publisher}</h6>
            <a href={publisher_url} target="_blank" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
            <a href={source_url} target="_blank" className="btn btn-success mx-3 mt-2 text-capitalize">Recipe url</a>
           <ul className="list-group mt-4">
             <h2 className="mt-3 mb-4">Ingredients</h2>
             {ingredients.map((item,index)=>{
               return(
                 <li key={index} className="list-group-item text-slanted">{item}</li>
               );
             })
             }

           </ul>
           </div>
         </div>
       </div>
      </React.Fragment>
    )
  }
}
