import React, { Component } from 'react';

///  //read in art database  -- id==ref_id, image.photo_url, image.alt

export default class GalleryOneImg extends Component {
  
  render() {
    let {artInfo} = this.props;
    
    if (artInfo){
        return (
            <div style = {styles.imgContainer} >
                <img style = {styles.artImg} src = {artInfo.imgurl} alt={artInfo.name}/>
            </div>
        )                       
    } else return null
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




