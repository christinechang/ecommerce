import prodarr from './prodarr';

import React, { Component } from 'react';
this.state = {
    name: '',
    description: '',
    category: '',
    width: '',
    height: '',
    depth: '',
    weight: '',
    size: ''
}
export default class ProductAdmin extends Component {
    //react way to declare method
    onChange = e => this.setState({[e.target.name]:e.target.value});

//method declaration in normal javascript class (react and normal - need to bind and create constructor)
    onClick = () => {
        console.log(this.state)
        //writes to database
        const url = "http://localhost:3010/products/add";
        fetch(url,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)        //need to stringify state to pass to body
        })
        .then((response)=>{
            if (response.ok) {
                response.json().then((resJson)=>{
                    
                })
            } else {
                //error handling - alert user?
            }
        }).catch((err)=>{
            
        })
    }

  render() { 
    return (
        <div>
            <div style = {styles.layout4col}>
                <h2>Products:</h2> 
            </div>
            <div style = {styles.allInput}  onChange = {this.onChange}>
                <div  style = {styles.layout1_7col}>
                    <label>Name</label>
                    <input type="text" name="prod_name" style={styles.input}></input>
                    <label>Category</label>
                    <input type="text" name="prod_category" style={styles.input}></input>
                    <label>Description</label>
                    <textarea name="description" cols="40" rows="5" style={styles.input}></textarea>
                </div>
                <div  style = {styles.layout_multi}>
                    <div>
                        <label>Width</label>
                        <input type="text" name="prod_width" style={styles.small_input}></input>
                    </div>
                    <div>
                        <label>Height</label>
                        <input type="text" name="prod_height" style={styles.small_input}></input>
                    </div>
                    <div>        
                        <label>Depth</label>
                        <input type="text" name="prod_year"style={styles.small_input}></input>
                    </div>
                </div>
                <div  style = {styles.layout_multi}>
                    <div>
                        <label>Weight</label>
                        <input type="text" name="prod_weight" style={styles.small_input}></input>
                    </div>
                    <div>               
                        <label>Size</label>
                        <input type="text" name="prod_size"  style={styles.small_input}></input>
                    </div>
                </div>
    
                <button  style = {styles.button} onClick = {this.onClick}>Add Product</button>
            </div>

            <div style = {styles.layout11col}>
                <div style = {styles.item}>E</div>
                <div style = {styles.item}>id</div>
                <div style = {styles.item}>name</div>
                <div style = {styles.item}>category</div>

                <div style = {styles.item}>description</div>
                <div style = {styles.item}>width</div>
                <div style = {styles.item}>height</div>
                <div style = {styles.item}>weight</div>
                <div style = {styles.item}>size</div>
                <div style = {styles.item}>I</div>
                <div style = {styles.item}>D</div>

            </div>
    </div> 

    );
  }
}

let styles = {
    allInput:{
        border: "1px grey solid",
        margin: "10px"
    },
    input: {
        width: "80%",
        justifySelf: "start",
        marginLeft: "10px"
    },
    small_input: {
        width: "50px",
        // justifySelf: "start"
        marginLeft: "10px"
    },
    layout4col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "10px",
        paddingLeft: "20px",
        paddingTop: "30px"
    },
    layout2col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px",
        padding: "20px"
    },
    layout1_7col: {
        display:"grid",
        gridTemplateColumns: "1fr 7fr",
        gridGap: "10px",
        padding: "20px"
    },
    layout1_5col: {
        display:"grid",
        gridTemplateColumns: "1fr 5fr",
        gridGap: "10px",
        padding: "20px"
    },
    layout_multi: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridGap: "10px",
        margin: "20px"
    },
    layout13col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridGap: "1px",
        backgroundColor: "grey",
        border: "3px solid grey",
        fontSize: '12px'
    },
    layout11col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 1fr 1fr",
        gridGap: "1px",
        backgroundColor: "grey",
        border: "3px solid grey",
        margin: "20px",
        fontSize: '12px'
    },  
    item: {
        backgroundColor: "white",
        // padding: '0 4px'
    },
    blackBg: {
        backgroundColor: "red"
    },
    button: {
        border: "1px solid black",
        padding: '10px',
        margin: '20px'
    }
}
