import React, { Component } from 'react';
import AdminArtEditForm from './AdminArtEditForm'

export default class AdminArtUpdate extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        media: '',
        width:'',
        height:'',
        year: '',
        size: '',
        imgurl: '',
        public_id: '',
        alt: '',
        note: '',
        sortId: '',
        price: ''
    }
    _getCurrentData = async ()=> {
        const url = `http://localhost:3010/artworks/${this.props.match.params._id}`;
        console.log(url);
        
        let token = localStorage.getItem('authToken');
        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:token 
                }
            })
            if (response.ok)    {
                let resJson = await response.json();

                this.setState({artInfoOld: resJson});
                this.setState({'name': this.state.artInfoOld.name})
                // console.log("response.ok")
                // console.log(this.state.artInfoOld)

                return resJson;
            } else {
                console.log("Error in fetch response")
            }
        }
        catch(e){
            alert(`Error in Update read function: ${e}`)
        }
    }
    componentDidMount = () =>{
        this._getCurrentData();
    }
    _getEditInfo = (data) => {
        var cb = () =>{
            this.updateDatabase();
            this.props.history.push('/admin/artworks')
        }
        this.setState({...data},cb);
        
    }
    updateDatabase = async () => {
        //fetch and stuff
        let oneArt = ((({name,description,category,media,width,height,year,size,imgurl,public_id,alt,note,sortId,price})=>({name,description,category,media,width,height,year,size,imgurl,public_id,alt,note,sortId,price}))(this.state));
        oneArt._id = this.props.match.params._id;
        // console.log("just the state we want: ",oneArt)
        const url = "http://localhost:3010/artworks/update";
        let token = localStorage.getItem('authToken');
        try{
            let response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    Authorization: token,
                    body: JSON.stringify(oneArt)        //need to stringify state to pass to body
                })
            if (response.ok) {
                let resJson = await response.json()
                // console.log("art edit ok, resJson : ",resJson)
                //get id from resJson
                this.props.history.push('/admin/artworks')
            } else {
                alert("Art input not updated")
                //error handling - alert user?
            }
        }
        catch(err) {    //big error - server problem
            alert(err);
        } 
    }
    render() {
        return(
            <div style = {styles.boxBorder}>
                <div style = {styles.pageTitle}><h2>Edit Artwork</h2></div>
                <AdminArtEditForm _getEditInfo = {this._getEditInfo} styles = {styles} artInfoOld = {this.state.artInfoOld}/>

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
        // justifySelf: "start"
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

