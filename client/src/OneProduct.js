import React, { Component } from 'react';

export default class OneProduct extends Component {

    render() {
        var {id, name, description, width, height, depth, weight, price, category, imageURL} = this.props;

        return (<div style = {styles.imgContainer}>
                    <div style = {prodStyle}></div>
                </div>)
    }
}
let styles = {
  layout1col: {
    display:"grid",
    gridTemplateColumns: "1fr",
    gridGap: "2%",
    border: "purple 3px solid"
  },
  imgContainer: {
      width: "50%",
      backgroundColor: "pink"
  },
  artImg: {
      width: "50%",
      height: "100px",
      backgroundColor: "green"
  }
}




