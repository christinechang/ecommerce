import React, { Component } from 'react';

export default class AdminArtInputDesc extends Component {

    onChange = e => {
        this.props._getInputData({[e.target.name]:e.target.value}); //send to parent
        // console.log({[e.target.name]:e.target.value})           
    }

    render() { 
        const styles = this.props.styles;
        return (
            <div  style = {styles.layout1_5col}   onChange = {this.onChange} >
                <label>Name</label>
                <input type="text" name="name" style={styles.input}></input>
                <label>Category</label>
                <input type="text" name="category" style={styles.input}></input>
                <label>Media</label>
                <input type="text" name="media" style={styles.input}></input>
                <label>Description</label>
                <textarea name="description" cols="40" rows="5" style={styles.input}></textarea>
                <label>Note</label>
                <textarea name="note" cols="40" rows="2"style={styles.input}></textarea>
            </div>
        );
    }
}
