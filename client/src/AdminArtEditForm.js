import React, { Component } from 'react';
import NavButton from './NavButton';

export default class AdminArtEditForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        media: '',
        width:'',
        height:'',
        year: '',
        size: '',
        note: '',
        sortId: '',
        price: ''
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
            year: this.state.year || this.props.artInfoOld.year,
            size: this.state.size || this.props.artInfoOld.size,
            note: this.state.note || this.props.artInfoOld.note,
            sortId: this.state.sortId || this.props.artInfoOld.sortId,
            price: this.state.price || this.props.artInfoOld.price
        }
        this.props._getEditInfo(obj)    //sends up to AdminArtUpdate.js
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
                        <label>Note</label>
                        <textarea name="note" cols="40" rows="2"style={styles.input} onChange = {this.onChange}
                                    value = {this.state.note || this.props.artInfoOld.note}></textarea>
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
                        <div>        
                            <label>Price</label>
                            <input type="text" name="price"style={styles.small_input} onChange = {this.onChange}
                                    value = {this.state.price || this.props.artInfoOld.price}></input>
                        </div>
                        <div>        
                            <label>Sort ID</label>
                            <input type="text" name="sortId"style={styles.small_input} onChange = {this.onChange}
                                    value = {this.state.sortId || this.props.artInfoOld.sortId}></input>
                        </div>
                    </div>
                    <div style= {styles.layout_2button}>
                        <NavButton url = "/admin/artworks" bText = "Cancel" />

                        <button  style = {styles.addArtButton} onClick = {this.handleClick}>Update Artwork</button>
                    </div>
                </div>
                );
        } else return null
    }
}

///STYLES are passed in as argument from AdminArtGrid->AdminArtItem->here
