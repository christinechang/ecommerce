import React, { Component } from 'react';
// import ProductInputDesc from './ProductInputDesc';
// import ProductInputDims from './ProductInputDims';

export default class ProductInput extends Component {
    //react way to declare method
 
    state = {
        name: '',
        category: '',
        description: '',
        width:'',
        height:'',
        depth:'',
        weight:'',
        size: ''
    }
 
    _getData = (data) => {
        console.log('got the data',data);
        this.setState(data);
    }
    
    onClick = async () => {
        //writes to database
        const url = "http://localhost:3010/products/add";
        try{
            let response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)        //need to stringify state to pass to body
                })

            if (response.ok) {
                let resJson = await response.json()
                //get id from resJson

            } else {
                //error handling - alert user?
            }
        }
        catch(err) {    //big error - server problem
            alert(err);
        } 
    }

render() { 
    const {styles} =  this.props;

    return (
        <div style = {styles.allInput}>
            <ProductInputDesc _getData = {this._getData} styles = {styles}/>
            <ProductInputDims _getData = {this._getData} styles =  {styles}/>
                <button  style = {styles.button} onClick = {this.onClick}>Add Product</button>
            <p id="message" style = {styles.message}>{this.state.message}</p>
        </div>
    );
  }
}
