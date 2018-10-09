
import React, { Component } from 'react';
this.state = {
    username: '',
    password: ''
}
export default class UserAdmin extends Component {
    //react way to declare method
    onChange = e => this.setState({[e.target.name]:e.target.value});

//method declaration in normal javascript class (react and normal - need to bind and create constructor)
    onClick = () => {
        console.log(this.state)
        //writes to database
        const url = "http://localhost:3010/admin/login";
        fetch(url,{
            method: 'GET',
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
                <h2>User Admin</h2> 
                <p> for managing user accounts</p>
            </div>
            <div style = {styles.allInput}  onChange = {this.onChange}>
                <div  style = {styles.layout1_7col}>
                    <label>Username</label>
                    <input type="text" name="username" style={styles.input}></input>
                    <label>Password</label>
                    <input type="text" name="password" style={styles.input}></input>
                </div>

                <button  style = {styles.button} onClick = {this.onClick}>Add User</button>
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
