import React, { Component } from 'react';

export default class AdminArtInputDims extends Component { 
    state = {
        width:'',
        height:'',
        year: ''
    }   
    
    onChange = e => {
    //  this.setState({[e.target.name]:e.target.value});
        this.props._getInputData({[e.target.name]:e.target.value}) //send to parent
    }

    render() { 
        const styles = this.props.styles;
        return (
            <div  style = {styles.layout_multi}   onChange = {this.onChange}>
                <div>
                    <label>Width</label>
                    <input type="number" name="width" style={styles.small_input}></input>
                </div>
                <div>
                    <label>Height</label>
                    <input type="number" name="height" style={styles.small_input}></input>
                </div>
                <div>        
                    <label>Year</label>
                    <input type="number" name="year"style={styles.small_input}></input>
                </div>
            </div>
        );
    }
}
