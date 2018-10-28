import React, { Component } from 'react';
import AdminArtInputDesc from './AdminArtInputDesc';
import AdminArtInputDims from './AdminArtInputDims';
import NavButton from './NavButton';

export default class AdminArtInput extends Component {
    //react way to declare method
 
    state = {
        name: '',
        description: '',
        category: '',
        media: '',
        width:'',
        height:'',
        year: '',
        imgurl: '',
        public_id: '',
        alt: ''
    }
 
    _getInputData = (data) => {
        console.log('got the data',data);
        
        this.setState(data);
    }

    addArtwork = async () => {
        //writes to database
        const url = "http://localhost:3010/artworks/add";
        let token = localStorage.getItem('authToken')
        try{
            let response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    Authorization: token,
                    body: JSON.stringify(this.state)        //need to stringify state to pass to body
                })
            // 

            if (response.ok) {
                let resJson = await response.json()
                
                //get id from resJson
                this.props.history.push('/admin/artworks')
            } else {
                alert("Art input not added")
                //error handling - alert user?
            }
        }
        catch(err) {    //big error - server problem
            alert(err);
        } 
    }

render() { 
    return (
        <div style = {styles.boxBorder}>
            <div style = {styles.pageTitle}><h2>Add/Edit Artwork</h2></div>
            <AdminArtInputDesc _getInputData = {this._getInputData} styles = {styles}/>
            <AdminArtInputDims _getInputData = {this._getInputData} styles = {styles}/>
            <div style= {styles.layout_2button}>

                <NavButton url = "/admin/artworks" bText = "Cancel"/>

                <button  style = {styles.addArtButton} onClick = {this.addArtwork}>Add Artwork</button>
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
    input: {
        width: "80%",
        justifySelf: "start",
        marginLeft: "10px"
    },
    small_input: {
        width: "50px",
        marginLeft: "10px"
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
    pageTitle: {
        marginLeft: "10px"
    },   
    layout_2button: {
        paddingTop: "20px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "40px"
    },

    addArtButton: {
        backgroundColor: "lightgrey",
        border: "1px solid black",
        height: '55px',
        width: "30vw",
        fontSize: "20px",
        padding: '0',
        margin: "0",
        cursor: "pointer"
    }
}