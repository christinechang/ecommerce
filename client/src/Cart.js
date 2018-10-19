import React, {Component} from 'react'
// import Payment  from './Payment'
import Cart1Item  from './Cart1Item'
import { NavLink } from 'react-router-dom'

export default class Cart extends Component {
    state = {
        orderArr:[],
    }

    updateCart = () => {

    }

    getOrderList = () => {
        let cb = () => {
            console.log(`orderArr: ${this.state.orderArr}`)
        }
        //get order info from localStorate
        let orderList = localStorage.getItem('orderList') || '';
        let orderArr = orderList ? JSON.parse(orderList) : [];
        this.setState({orderArr: orderArr }, cb)
    }
    updateOrderList = () => {
        let cb = () => {console.log(`orderArr: ${this.state.orderArr}`)}
        // debugger
        //get order info from localStorage
        let orderList = JSON.stringify(this.state.orderArr);
        localStorage.setItem('orderList',orderList);
    }
    changeQuantity = () => {
        //change quantity
        this.updateOrderList();
    }
    deleteItem = (position) => {
        let cb = () => {this.updateOrderList()} 
        let orderArr = this.state.orderArr.slice();     //copy from state
        orderArr.splice(position,1);                    // remove this item
        this.setState({orderArr: orderArr}, cb );       //reset the state
    }
    componentDidMount() {
        this.getOrderList();
    }
    payNow() {
        console.log("pay now");
    }
    render= () => {
        let subTotal = 0;
        let salesTaxRate = .0825;
        this.state.orderArr.map( (elem) => {
            subTotal += elem.price
        });
        let tax = salesTaxRate * subTotal;
        let shipping = .1 * subTotal;
        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Shopping Cart:</h2>
                </div> 
                {/* //ITEMS IN CART */}
                {this.state.orderArr.map( (elem,i) => {
                    // debugger
                    return (
                        <Cart1Item item = {elem} idx = {i} deleteItem = {this.deleteItem}/>
                    )
                })}
                <div style = {styles.total_line}>
                    <div></div>
                    <h4 style = {styles.total}>Subtotal: </h4>
                    <h4 style = {styles.total}>${subTotal} </h4>

                    <div></div>
                    <h4 style = {styles.total}>Tax: </h4>
                    <h4 style = {styles.total}>${tax} </h4>

                    <div></div>
                    <h4 style = {styles.total}>Shipping: </h4>
                    <h4 style = {styles.total}>${shipping} </h4>

                    <div></div>
                    <h3 style = {styles.total}>Total: </h3>
                    <h3 style = {styles.total}>${subTotal + tax + shipping} </h3>
                </div>                   
                    {/* <div  style = {styles.total}>
                        <h4>Tax: </h4>
                        <h4>Shipping: </h4>
                        <h3>TOTAL: </h3>
                    </div>
                    <div  style = {styles.total}>
                        <h4>${tax}</h4>
                        <h4>${shipping}</h4>
                        <h3>${subTotal + tax + shipping}</h3>
                    </div> */}
                <div style = {styles.checkoutContainer}>
                    <NavLink to={'/checkout'} style={styles.navlink}><div style = {styles.fakebutton}><p style = {styles.par}>Proceed to Checkout</p></div></NavLink>
                </div>
            </div>    
        );
    }
}
let styles = {
    boxBorder:{
        margin: "10px"
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
    }
}
