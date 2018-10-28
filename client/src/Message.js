import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Message extends Component {
    state = {
        visible: true
    }
    onClick1 = () => {
        this.setState({visible: false})
    }
    onClick2 = () => {
        this.setState({visible: false})
        // this.props.history.push('/what')
    }
    render = () => {
        const {msg1, button1Msg, button1Url, button2Msg, button2Url} = this.props

        return (
            (this.state.visible ?
                <div style = {styles.allOverlay}>
                    <div style = {styles.overlayMsgBox}> 
                        <h2  style = {styles.message}>{msg1}</h2>
                        <div style = {styles.overlayButtonBox}>
                            <NavLink to={button1Url} style={styles.navlink}><div style = {styles.fakebutton}><p style = {styles.par}>{button1Msg}</p></div></NavLink>
                            <NavLink to={button2Url} style={styles.navlink}><div style = {styles.fakebutton}><p style = {styles.par}>{button2Msg}</p></div></NavLink>
                        </div>
                    </div>
                </div>
                : '' )
        )
    }   
}

let styles = {
    allOverlay: {
        visibility: "visible",        //"hidden"
        zIndex: "10",
        width: "80%",
        height: "70%",
        position: "absolute",
        top: "100px",
        left: "0",
        backgroundColor: "#f4f4f4",
        opacity: "1", 
        margin:"0 5%",
        border: "lightgrey 1px solid"
    },
    overlayMsgBox: {
        // zIndex: "11",
        width: "80%",
        height: "200px",
        margin: "10% 10%",
        marginBottom: "20px",
        backgroundColor: "#3e90bc",
        color: "#f9f0c7",
        textAlign: "center",
    },
    message: {
        alignSelf: 'center',
        justifySelf: 'center',
        padding: "40px",
        margin: 0
    },
    overlayButtonBox: {
        width: "80%",
        margin: "0 10%",
        color: "#f9f0c7",
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    },
    fakebutton: {
        border: "1px solid black",
        margin:"15px auto",
        height: '50px',
        padding: '0 20px',
        width: "70%",
        backgroundColor: "lightgrey",
        fontSize: "20px",
    },
    navlink: {
        textDecoration: "none",
        margin:0,
        color: "black",
        display: "flex",
        alignItems: "center"
    },
    par: {
        textAlign: "center",
        margin: "0"
    }
}




