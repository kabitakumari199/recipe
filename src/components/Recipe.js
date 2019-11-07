import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Recipe extends Component {
   constructor(props){
     super(props);
   }
  
  render() {
      const {image_url,title,publisher,source_url,recipe_id} = this.props.recipe;
       return (
        <React.Fragment>
          <div className="col-10 max-auto col-md-6 col-lg-4 my-3">
            <div className="card">
              <img src={image_url} style={{height:"14rem"}} />
              <div className="card-body text-capitalize">
                <h6>{title}</h6>
                <h6 className="text-warning text-slanted">{publisher}</h6>
              </div>
              <div className="card-footer">
                <Link to={"/detail/"+recipe_id} className="btn btn-primary text-capitalize">Detail</Link>
                <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank">recipe url</a>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
  }
}
export default Recipe;
