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
            let sortArr = this.sortArtWorks(resJson)
            this.setState({artWorks:sortArr})
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
  sortArtWorks = (artArray) => {
    let sortedArr = [];
    let newIdx = 0
    artArray.map((elem,i)=> {  //place all sorted elems first into array
      if (elem.sortId && !(isNaN(elem.sortId))) {   //if sortId is a number
        //copy the elem to index of sortId
          newIdx = elem.sortId - 1    //(sortId starts at #1)
          debugger
        while (sortedArr[newIdx]) {  //while there is something here, go on -make sure nothing already in this slot
            newIdx ++;
        }
        sortedArr[newIdx]= JSON.parse(JSON.stringify(elem))
      }
    })
    newIdx = 0;    //reset idx
    artArray.map((elem,i)=> { //test if elem is null, if so, stick in the element
      if (!(elem.sortId)) {
        while (sortedArr[newIdx]) {  //find next open slot
          newIdx ++;
        }
        sortedArr[newIdx]= JSON.parse(JSON.stringify(elem))    //write the elem
      }
    })   
    sortedArr.map((elem, i)=>{console.log(elem.sortId,elem.name)})
    return (sortedArr) 
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
