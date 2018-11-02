import React, { Component } from 'react';
import AdminArtItem from './AdminArtItem';
import NavButton from './NavButton';


export default class AdminArtGrid extends Component {
    //react way to declare method
 
    state = {
        artWorks: [],
        message: ''
    }   
 
    onClick() {
        console.log("add artwork component")
    }
    getData = async ()=> {
        const url = "http://localhost:3010/artworks/";
        let token = localStorage.getItem('authToken');
        try{
            let response = await   //get statement doesn't need any params
            fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:token 
                }
            }) 
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
   
    handleDelete = async (_id) =>{
        const url = "http://localhost:3010/artworks/delete"; //goes to server and uses these commands
                                //server and mongo server must be running
        // console.log ('deleting artwork: ',_id );
        try{
            let response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({_id: _id})        //need to stringify state to pass to body
                })       
            if (response.ok) {
                let resJson = await response.json()
                // 
                if (resJson) {
                    this.getData()
                }
            } else {
                //error handling - alert user?
                alert(`item ${this.props._id} NOT deleted`)
            }
        }
        catch(e) {
            alert(e)
        }
    } 
    
componentDidMount() {
    //if logged in show art or prod or user admin choice
    if(!localStorage.getItem('token')) {
        this.props.history.push('/admin/login')
    }
    this.getData();
}
render() { 
    let {artWorks} = this.state;
    // let {styles} = this.props; //destructuring
    return (
        <div  style = {styles.boxBorder}>
            <div  style = {styles.pageTitle}>
                <h2>Current Artwork:</h2>
            </div>
 
            <div  style = {styles.tableGrid}> 
                <div style = {styles.layoutArtList}>
                    <div style = {styles.item}> </div>
                    <div style = {styles.item}> </div>

                    <div style = {styles.item}>name</div>
                    <div style = {styles.item}>cat</div>
                    <div style = {styles.item}>media</div>
                    <div style = {styles.item}>W</div>
                    <div style = {styles.item}>H</div>
                    <div style = {styles.item}>$$</div>
                    <div style = {styles.item}>^v</div>
                    <div style = {styles.item}> </div>
                </div>      
                {artWorks.map((elem,i)=>(
                    <div  key = {i}>
                        <AdminArtItem 
                            artwork = {elem} 
                            styles =  {styles} 
                            handleDelete = {this.handleDelete}
                            handleEdit = {this.handleEdit} 
                            history = {this.props.history}/>
                    </div>
                ))}
            </div>   
            <div style = {styles.navButContainer}>
                <NavButton url = "/admin/artworks/add" bText = "Add Artwork" history = {this.props.history}/>
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
    layoutArtList: {
        display:"grid",
        gridTemplateColumns: "25px 25px 2fr 1fr 1fr 50px 50px 60px 50px 25px",
        gridGap: "1px",
        backgroundColor: "grey",
        border: "1px solid grey",
        margin: "0 10px",
        fontSize: '16px'
    },  
    item: {
        backgroundColor: "white",
        padding: "0 5px"
    },
    
    tableGrid: {
        marginTop: "50px",
        marginBottom: "50px"
    },
    pageTitle: {
        marginLeft: "10px"
    },
    navButContainer: {
        display: "flex",
        justifyContent: "flex-end"
    }

}
