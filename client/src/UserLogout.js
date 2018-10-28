
import React, { Component } from 'react';

export default class UserLogout extends Component {

    componentDidMount() {
        //delete the token
        // localStorage.clear();
        localStorage.removeItem('token');
    }
    render() { 
        setTimeout(()=>{                    ///delay to show logout screen then redirect
            this.props.history.push('/admin/login')
        }, 1000);
        return (
            <div>
                <div style = {styles.pageTitle}>
                    <h2>User Successfully logged out:</h2> 
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
    pageTitle: {
        marginLeft: "10px"
    }
}
