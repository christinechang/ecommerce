import React, { Component } from 'react';
import AdminArtEdit from './AdminArtEdit';
import AdminArtDelete from './AdminArtDelete';
import UploadImages from './UploadImages';


export default class AdminArtItem extends Component {
    render() { 
        let {artwork} = this.props
        const {styles} =  this.props;

        return (
            <div style = {styles.layoutArtList}>
                <AdminArtEdit 
                    _id = {artwork._id} 
                    styles = {styles}
                    history = {this.props.history}/>
                <UploadImages  _id =  {artwork._id}/>

                <div style = {styles.item}>{artwork.name }</div>
                <div style = {styles.item}>{artwork.category }</div>
                <div style = {styles.item}>{artwork.media }</div>
                <div style = {styles.item}>{artwork.width} </div>
                <div style = {styles.item}>{artwork.height }</div>
                <div style = {styles.item}>{artwork.price }</div>
                <div style = {styles.item}>{artwork.sortId }</div>
                <AdminArtDelete 
                    _id = {artwork._id} 
                    public_id = {artwork.public_id} 
                    styles = {styles} 
                    handleDelete = {this.props.handleDelete} />
            </div>
        )
    }
}

