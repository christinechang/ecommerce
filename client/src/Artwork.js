import React, { Component } from 'react';
import Message from './Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    //needed - don't believe the warning

import { NavLink } from 'react-router-dom'

///  //read in art database  -- id==ref_id, image.photo_url, image.alt
export default class Artwork extends Component {
    state = {
        artInfo:'',
        showMsg: false,
        size: '1',
        quantity: '1'
    }
    getData = async ()=> {
        const url = `http://localhost:3010/artworks/${this.props.match.params._id}` ;  //find one
        try{
            let response = await fetch(url)   //get statement doesn't need any params
                // 
            if (response.ok) {
                let resJson = await response.json()
                this.setState({artInfo:resJson})
                // 
                return resJson;
            } else {
                //error handling - alert user?
            }
        }
        catch(err) {    //big error - server problem
            console.log("in getData catch")
            alert(err);
        }
    }
    
    componentDidMount= ()=>{
        this.getData();   //read in art database  -- id, 
    }

    addCart = () => { 
        console.log(`add to cart item #: ${this.state.artInfo._id}`)
        //add item to orderList
        let itemInfo = {_id: this.state.artInfo._id, size: this.state.size, quantity: this.state.quantity,
        name: this.state.artInfo.name,price: this.state.artInfo.price, imgurl:this.state.artInfo.imgurl , alt:this.state.artInfo.alt}
        let orderList = localStorage.getItem('orderList') || '';
        let orderArr = (orderList ? JSON.parse(orderList) : []);
        orderArr.push(itemInfo);
        localStorage.setItem('orderList',JSON.stringify(orderArr))
        this.setState({showMsg: true});
    }
    onClick1 = () => { 
        console.log(`back to shopping`)
        this.setState({showMsg: false});
    }
    onClick2 = () => { 
        console.log(`go to cart`)
        this.setState({showMsg: false});
    }
    onChangeDetails = (e) => { 
        //get quantity and size
        let cb = () => {console.log(`size:${this.state.size};quantity:${this.state.quantity}`)}
        this.setState({[e.target.name]:e.target.value}); 
    }
    render = () =>{
        let artInfo = this.state.artInfo;
        return (
            <div style = {styles.layout4_1col}>
                <div style = {styles.floating_product}>
                    <NavLink to="/what">
                        <div style = {styles.closeMe} ><FontAwesomeIcon icon="times-circle" /></div>
                    </NavLink>
                <div style = {styles.imgContainer} >
                        <img style = {styles.artImg} src = {artInfo.imgurl} alt={artInfo.name}/>
                    </div>
                </div>
                <div>
                    <div style = {styles.artInfoBox}>
                        <p style = {styles.artHeading}> {artInfo.name}</p>
                        <p style = {styles.artInfo}>{artInfo.media}</p>
                        <p style = {styles.artInfo}>{artInfo.width} x {artInfo.height}</p>
                        <p>{artInfo.description}</p>
                    </div>

                    <div style = {styles.orderInfoBox} onChange = {this.onChangeDetails}>
                        <div style = {styles.layout2col}>
                            <label>Quantity</label>
                            <input type="number" name="quantity" style={styles.small_input} min="1" step="1"></input>
                        </div>
                        <div style = {styles.layout2col}>
                            <label>Size</label>
                            <input type="number" name="size" style={styles.small_input} min="1" step="1"></input>
                        </div>                    
                    </div>                    
                    <div style = {styles.centerInDiv}>
                        <button style = {styles.addCartButton} onClick = {this.addCart}>Add to Cart</button>
                        {/* <p>{this.state.artInfo._id}</p> */}
                    </div>
                    <div style = {styles.relatedItems}>
                        <p style = {styles.artInfo}>related items</p>
                    </div>
                </div>
                {(this.state.showMsg) ?
                    // (<div style = {styles.overlay} >
                    (<div>
                        <Message msg1 = {"Item Added to Cart"}   
                        button1Msg = {"Continue Shopping"} button1Url = {"/what"} button2Msg = {"Go To Cart"} button2Url = "/cart" />
                    </div>)
                    : ''}
                </div>
        )
    }
}

let styles = {
    layout4_1col: {
        display:"grid",
        gridTemplateColumns: "4fr 1fr",
        gridGap: "2%",
        backgroundColor: "white",
        // height: "92vh",
        width: "95%",
        alignSelf: 'center',
        justifySelf: 'center',
        marginLeft:"3%",
        zIndex: "5",
        visibility: "visible"   //hidden
    },
    layout2col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "5%",
        backgroundColor: "white",
        alignSelf: 'center',
        justifySelf: 'center',
    },
    floating_product: {
        // alignSelf: 'center',
        justifySelf: 'center',
        backgroundColor: "white",
        padding: "2%"  ,
        border: "lightgrey solid 1px",
    },

    imgContainer: {
        width: "100%",
    },
    artImg: {
        width: "100%",
        maxWidth: "600px",
    },
    closeMe: {
        float: "right",
        marginBottom:"5px",
        color: "black"
    },
    artHeading: {
        fontSize: "16px",
        padding: '10px',
    },
    artInfo: {
        fontSize: "14px",
        padding: '0 10px'
    },
    artInfoBox: {
        width: "100%",
        border: "lightgrey solid 1px",
        margin: "2%"   
    },
    orderInfoBox: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "5%",
        backgroundColor: "white",
        alignSelf: 'center',
        justifySelf: 'center',
        width: "100%",
        margin: "2% 0 2% 2% "   
    },
    relatedItems: {
        width: "100%",
        minHeight: "200px",
        border: "lightgrey 1px solid"    ,
        margin: "2%"   
    },
    addCartButton: {
        border: "1px solid black",
        margin:"15px auto",
        height: '30px',
        padding: '0 20px',
        width: "200px"
    },
    centerInDiv: {
        width: "100%",
        marginLeft: "3%",
        textAlign: "center"
    },
    overlay: {
        zIndex: "10",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "80px",
        left: "0",
        backgroundColor: "green",
        opacity: ".8", 
        visibility: "visible"        //"hidden"
    },
    small_input: {
        width: "30px",
    }
}




