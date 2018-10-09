import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'


export default class AdminArtEdit extends Component {

//this displays icon and sets up link

    render() { 
        const styles =  this.props.styles;
        const _id = this.props._id;
        return (
            <NavLink to={`/admin/artworks/update/${_id}`} >
                <div  style = {styles.item}>  
                    <FontAwesomeIcon icon="pencil-alt" />  
                </div>
            </NavLink>
        )
    }
}

