import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArtworkGrid from './ArtworkGrid';
import ArtworkInput from './ArtworkInput';

export default class ArtworkAdmin extends Component {
    //react way to declare method
 
    state = {
        artWorks: [],
        message: ''
    }   

    render() { 
        let {artWorks} = this.state;

        return (
            <div>
                <div style = {styles.layout4col}>
                    <h2>Artwork:</h2>
                </div>
    
            <ArtworkInput styles =  {styles}/>
            <ArtworkGrid  styles =  {styles}/>
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
    layout2_1col: {
        display:"grid",
        gridTemplateColumns: "2fr 1fr",
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

    layoutArtList: {
        display:"grid",
        gridTemplateColumns: "25px 25px 4fr 2fr 2fr 50px 50px 25px",
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
    blackBg: {
        backgroundColor: "red"
    },
    button: {
        border: "1px solid black",
        marginLeft: '70%',
        height: '30px',
        padding: '0 20px'
    },
    tableGrid: {
        marginTop: "50px",
        marginBottom: "50px"
    },
    message: {
        visibility: "hidden",
        visibility: "visible"
    },
    pageTitle: {
        marginLeft: "10px"
    }
}
