import React, {Component} from 'react'
// import Payment  from './Payment'
import Cart1Item  from './Cart1Item'
import { NavLink } from 'react-router-dom'

export default class Cart extends Component {
    state = {
        orderItems:[]  
    }

    updateCart = () => {

    }

    getOrderList = () => {
        let cb = () => {
            console.log(`orderItems: ${this.state.orderItems}`)
        }
        //get order info from localStorate
        let orderList = localStorage.getItem('orderList') || '';
        let orderItems = orderList ? JSON.parse(orderList) : [];
        this.setState({orderItems: orderItems }, cb)
    }
    updateOrderList = () => {
        let cb = () => {console.log(`orderItems: ${this.state.orderItems}`)}
        // debugger
        //get order info from localStorage
        let orderList = JSON.stringify(this.state.orderItems);
        localStorage.setItem('orderList',orderList);
    }
    changeQuantity = () => {
        //change quantity
        this.updateOrderList();
    }
    deleteItem = (position) => {
        let cb = () => {this.updateOrderList()} 
        let orderItems = this.state.orderItems.slice();     //copy from state
        orderItems.splice(position,1);                    // remove this item
        this.setState({orderItems: orderItems}, cb );       //reset the state
    }
    componentDidMount() {
        this.getOrderList();
    }

    render= () => {
        let subTotal = 0;
        // let totalAmount = 0;
        // let salesTaxRate = .0825;
        this.state.orderItems.map( (elem) => {
            subTotal += elem.price
        });
        // let tax = salesTaxRate * subTotal;
        // let shipping = .1 * subTotal;
        let visibility = (subTotal > 0) ? styles.visible : styles.invisible;
       
        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Shopping Cart:</h2>
                </div> 
                {/* //ITEMS IN CART */}
                {this.state.orderItems.map( (elem,i) => {
                    // debugger
                    return (
                        <Cart1Item item = {elem} idx = {i} deleteItem = {this.deleteItem}/>
                    )
                })}
                <div style = {styles.total_line}>
                    <div></div>
                    <h4 style = {styles.total}>Subtotal: </h4>
                    <h4 style = {styles.total}>${subTotal} </h4>
                   
                </div>                   
                   
                <div style = {Object.assign({},styles.checkoutContainer,visibility)}>
                    <NavLink to={'/checkout'} style={styles.navlink} subTotal = {subTotal}><div style = {styles.fakebutton}><p style = {styles.par}>Proceed to Checkout</p></div></NavLink>
                </div>
            </div>    
        );
    }
}
let styles = {
    boxBorder:{
        margin: "10px",
        marginBottom: "40px"
    },
    leftBorder:{
        borderLeft: "1px grey solid",
    },
    pageTitle: {
        marginLeft: "10px"
    },
    total_line: {
        display:"grid",
        gridTemplateColumns: "14fr 1fr 2fr",    //based on cart format
        gridGap: "0",
        backgroundColor: "white",
        width: "95%",
        alignSelf: 'center',
        justifySelf: 'center',
        border: "1px grey solid",
        margin: "0 10px"
    },
    total:{
        paddingLeft: 10,
        margin: 5
    },
    mainButton: {
        border: "1px solid black",
        margin:"15px auto",
        height: '30px',
        padding: '0 20px',
        width: "200px"
    },
    checkoutContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "95%",
        margin: "10px"
    },
    fakebutton: {
        border: "1px solid black",
        margin:"15px auto",
        padding: '20px',
        backgroundColor: "lightgrey",
        fontSize: "20px",
        display: "flex",
        alignItems: "center"
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
    },
    visible: {
        display: "flex"
    },
    invisible: {
        display: "none"
    }
}
