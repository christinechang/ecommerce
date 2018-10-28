import React, { Component } from 'react';
import NavButton from './NavButton';

export default class UserLogin extends Component {
   state = {
        username: '',
        password: '',
        visibility: styles.invisible
    }
    //react way to declare method
    onChange = e => this.setState({[e.target.name]:e.target.value});

    //method declaration in normal javascript class (react and normal - need to bind and create constructor)
    onClick = () => {
        //writes to database
        let loggedIn = false;
        const url = "http://localhost:3010/admins/login";
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
                loggedIn = true;
                console.log("TEST for password here")  //browser message
                response.json().then((resJson)=>{
                    //console.log('===>token is created and stored locally',resJson.token); //browser message
                    localStorage.setItem('token',resJson.token);
                    this.props.history.push('/admin/artworks')
                })
            } else {
                console.log("===>mongoDB: ERROR in UserLogin") //mongodb console error
                //client code doesn't get here??
            }
        }).catch((err)=>{
            console.log("===>mongoDB: CATCH ERROR in UserLogin") //mongodb console error
        })
        setTimeout(()=>{    ///delay to let logging in succeed
            if (!loggedIn) {
                this.setState({visibility:styles.visible}); 
            }
        }, 500);
      
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
                    <input type="password" name="password" style={styles.input}></input>
                </div>
                <div style = {this.state.visibility}>
                    <h4 style = {styles.errorMsg}>ERROR in Username or Password</h4>
                </div>
                <div style = {styles.centerInDiv}>
                    <button style = {styles.mainButton}  onClick = {this.onClick}>Enter</button>
                </div>
                <div style = {styles.rightInDiv}>
                    <NavButton url = "/admin/register" bText = "(or create new account)"/>
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
    centerInDiv: {
        textAlign: "center"
    },
    rightInDiv: {
        display: "flex",
        justifyContent: "flex-end"
    },
    pageTitle: {
        marginLeft: "10px"
    },
    mainButton: {
        backgroundColor: "lightgrey",
        border: "1px solid black",
        height: '55px',
        width: "30vw",
        fontSize: "20px",
        padding: '0',
        margin: "0",
        cursor: "pointer"
    },
    errorMsg: {
        color: "red",
    },
    visible: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        visibility: "visible"
    },
    invisible: {
        visibility: "hidden"
    },
}
