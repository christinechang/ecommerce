import React, { Component } from 'react';
import GalleryCol from './GalleryCol';

export default class What extends Component {
 
  state = {
    artWorks: []
  }   

  getData = async ()=> {
    const url = "http://localhost:3010/artworks/";  //find all
    try{
        let response = await fetch(url)   //get statement doesn't need any params
            // 
        if (response.ok) {
            let resJson = await response.json()
            this.setState({artWorks:resJson})
            // 
            return resJson;
        } else {
            //error handling - alert user?
        }
    }
    catch(err) {    //big error - server problem
        console.log("in getData catch")
        alert(err);
    }
  }

  //delete function is here and passed down to button


  componentDidMount() {
    this.getData();   //read in art database  -- id, 
  }
  render() { 
      return (
        <div>
          <div style = {styles.layout3col}>
            <GalleryCol artarr = {this.state.artWorks} mod = {0}/>
            <GalleryCol artarr = {this.state.artWorks} mod = {1}/>
            <GalleryCol artarr = {this.state.artWorks} mod = {2}/>
          </div>
        </div>
      );
    }
  }

let styles = {
  layout3col: {
    display:"grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "2%",
    margin: "2%"
    // marginTop: "20px"
  },
  navBar: {
    width: "100%",
    backgroundColor: "white",
    border: "grey 1px solid"
  }
  
}
