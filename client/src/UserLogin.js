
import React, { Component } from 'react';

export default class UserLogin extends Component {
   state = {
        username: '',
        password: ''
    }
    //react way to declare method
    onChange = e => this.setState({[e.target.name]:e.target.value});

    //method declaration in normal javascript class (react and normal - need to bind and create constructor)
    onClick = () => {
        console.log(this.state)
        //writes to database
        const url = "http://localhost:3010/admin/login";
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)        //need to stringify state to pass to body
        })
        .then((response)=>{
            
            if (response.ok) {
                response.json().then((resJson)=>{
                    //message here
                    localStorage.setItem('token',resJson.token);
                    this.props.history.push('/admin/artworks')
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
            <div style = {styles.pageTitle}>
                <h2>LOGIN:</h2> 
            </div>
            <div style = {styles.boxBorder}  onChange = {this.onChange}>
                <div  style = {styles.layout1_7col}>
                    <label style={styles.label}>Name</label>
                    <input type="text" name="username" style={styles.input}></input>
                    <label style={styles.label}>Password</label>
                    <input type="text" name="password" style={styles.input}></input>
                </div>
                <div style = {styles.centerInDiv}>
                    <button style = {styles.mainButton}  onClick = {this.onClick}>Enter</button>
                </div>
                <div style = {styles.rightInDiv}>
                    <button style = {styles.otherActButton} onClick = {this.onClick}>Create New Account</button>
                </div>
            </div>
        </div> 
    );
  }
}

let styles = {
    boxBorder:{
        border: "1px grey solid",
        margin: "10px"
    },
    label: {
        margin: "10px"
    },
    input: {
        width: "80%",
        justifySelf: "start",
        margin: "10px",
        fontSize: "20px"
    },
    layout1_7col: {
        display:"grid",
        gridTemplateColumns: "1fr 7fr",
        gridGap: "10px",
        padding: "20px",
        fontSize: "20px"
    },
    mainButton: {
        border: "1px solid black",
        padding: '10px',
        margin: '10px auto',
        width: "200px"
    },
    otherActButton: {
        border: "1px solid black",
        padding: '5px',
        margin: '10px',
        width: "150px"
    },
    centerInDiv: {
        textAlign: "center"
    },
    rightInDiv: {
        textAlign: "right"
    },
    pageTitle: {
        marginLeft: "10px"
    }
}
