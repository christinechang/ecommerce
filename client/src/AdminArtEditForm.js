import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class AdminArtEditForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        media: '',
        width:'',
        height:'',
        year: ''
    }   

    onChange = e => {
        this.setState({[e.target.name]:e.target.value}); //send to parent
        // console.log({[e.target.name]:e.target.value})   
    }
    handleClick = () => {
        var obj = {
            name:this.state.name || this.props.artInfoOld.name,
            description: this.state.description || this.props.artInfoOld.description,
            category: this.state.category || this.props.artInfoOld.category,
            media: this.state.media || this.props.artInfoOld.media,
            width: this.state.width || this.props.artInfoOld.width,
            height: this.state.height || this.props.artInfoOld.height,
            year: this.state.year || this.props.artInfoOld.year
        }
        this.props._getEditInfo(obj)
        // this.props.history.push('/admin/artworks')

    }
   
    render() { 
        const styles = this.props.styles;
        if(this.props.artInfoOld){
            // this.props.artInfoOld.width(height, year) should not be 'null' ;'' is fine
            // or make it required in model
            return (
                <div>
                    <div  style = {styles.layout1_5col}    >
                        <label>Name</label>
                        <input type="text" name="name" style={styles.input} onChange = {this.onChange}
                                    value = {this.state.name || this.props.artInfoOld.name}></input>
                        <label>Category</label>
                        <input type="text" name="category"style={styles.input} onChange = {this.onChange}
                                    value = {this.state.category || this.props.artInfoOld.category}></input>
                        <label>Media</label>
                        <input type="text" name="media" style={styles.input} onChange = {this.onChange}
                                    value = {this.state.media || this.props.artInfoOld.media}></input>
                        <label>Description</label>
                        <textarea name="description" cols="40" rows="5"style={styles.input} onChange = {this.onChange}
                                    value = {this.state.description || this.props.artInfoOld.description}></textarea>
                    </div>
                    <div  style = {styles.layout_multi} >
                        <div>
                            <label>Width</label>
                            <input type="text" name="width" style={styles.small_input} onChange = {this.onChange}
                                    value = {this.state.width || this.props.artInfoOld.width}></input>
                        </div>
                        <div>
                            <label>Height</label>
                            <input type="text" name="height" style={styles.small_input} onChange = {this.onChange}
                                    value = {this.state.height || this.props.artInfoOld.height}></input>
                        </div>
                        <div>        
                            <label>Year</label>
                            <input type="text" name="year"style={styles.small_input} onChange = {this.onChange}
                                    value = {this.state.year || this.props.artInfoOld.year}></input>
                        </div>
                    </div>
                    <div style= {styles.layout_2button}>
                        <NavLink to={`/admin/artworks`} style={styles.fakebutton}>
                            <p style = {styles.par}>Cancel</p>
                        </NavLink>

                        <button  style = {styles.addArtButton} onClick = {this.handleClick}>Update Artwork</button>
                    </div>
                </div>
                );
        } else return null
    }
}
