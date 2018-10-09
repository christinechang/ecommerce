import React, { Component } from 'react';
import GalleryOneImg from './GalleryOneImg';

import { NavLink } from 'react-router-dom'

///  //read in art database  -- id==ref_id, image.photo_url, image.alt

export default class GalleryCol extends Component {

  render() {
    var {artarr, mod} = this.props;
    //find this artwork and then find that image
    return (
      <div style = {styles.layout1col} >
        {  artarr.map((elem,i) => {
            return ((i%3 === mod)?(
              <NavLink  key = {i}  to={`/artwork/${elem._id}`}   ><GalleryOneImg key = {i}  artInfo = {elem} /></NavLink>
            ) : null)
          })}
      </div>  
    );
  }

  
}
  

let styles = {
  layout1col: {
    gridTemplateColumns: "1fr",
    gridGap: "2%",
  },
  imgContainer: {
      width: "100%",
      marginBottom: "20px"
  },
  artImg: {
      width: "100%",
  }
}




