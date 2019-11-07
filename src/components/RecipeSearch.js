import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {value,handleSubmit,handleChange} = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 max-auto col-md-12 text-centter mt-5 text-center ">
             <h1 className="text-slanted text-capitalize text-center">search for recipe with <strong className="text-danger">Food2Fork</strong></h1>
             <form className="mt-5" onSubmit={handleSubmit} >
               <label htmlFor="search" className="text-capitalize">
                 type recipes seperated by comma
               </label>
               <div className="input-group">
                 <input type="text"
                  name="search" value={value} 
                  placeholder="chiken,onions,carrots"
                  className="form-control"
                  onChange={handleChange}
                   />
                 <div className="input-group-append">
                 <button type="submit" className="input-group-text bg-primary text-white">
                   <i className="fas fa-search"></i>
                 </button>
               </div>
               </div>
               
             </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
