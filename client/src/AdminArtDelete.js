import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class OneArtDelete extends Component {
   
    render() { 
        const styles =  this.props.styles;
        
        return (               
            <div  style = {styles.item} onClick = {()=>this.props.handleDelete(this.props._id)}>
                <FontAwesomeIcon icon="trash-alt" /> 
            </div>
        )
        //remember!: this onClick calling function 'handleDelete' passed down as property must define as function
    }
}

///STYLES are passed in as argument from AdminArtGrid->AdminArtItem->here



