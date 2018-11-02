import React, {Component} from 'react'
import Cart1Item  from './Cart1Item'
import NavButton from './NavButton';

export default class Cart extends Component {
    state = {
        orderItems:[],
        subTotal: 0
    }
    getSubTotal = () => {
        let subTotal = 0
        this.state.orderItems.map( (elem) => {
            subTotal += (elem.price * elem.quantity)
        });
        this.setState({subTotal: subTotal})
        // console.log("subtotal: ",this.state.subTotal)
    }
    getOrderList = () => {
        let cb = () => {
            this.getSubTotal();
            console.log(`orderItems: ${this.state.orderItems}`)
        }
        //get order info from localStorate
        let orderList = localStorage.getItem('orderList') || '';
        let orderItems = orderList ? JSON.parse(orderList) : [];
        this.setState({orderItems: orderItems }, cb)
    }
    updateOrderList = () => {
        // let cb = () => {console.log(`orderItems: ${this.state.orderItems}`)}
        // debugger
        //get order info from localStorage
        let orderList = JSON.stringify(this.state.orderItems);
        localStorage.setItem('orderList',orderList);
    }
    updateTotal = () => {
        this.updateOrderList(); 
        this.getSubTotal()        
    }
    changeQuant = (position, quant) => {
        //change quantity
        let orderItems = this.state.orderItems;
        orderItems[position].quantity = quant;
        this.setState({orderItems: orderItems}, this.updateTotal );       //reset the state
    }
    deleteItem = (position) => {
        let orderItems = this.state.orderItems.slice();     //copy from state
        orderItems.splice(position,1);                    // remove this item
        this.setState({orderItems: orderItems}, this.updateTotal );       //reset the state
    }
    componentDidMount() {
        this.getOrderList();
    }

    render= () => {

        let visibility = (this.state.subTotal > 0) ? styles.visible : styles.invisible;
       
        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Shopping Cart:</h2>
                </div> 
                {/* //ITEMS IN CART */}
                {this.state.orderItems.map( (elem,i) => {
                    // debugger
                    return (
                        <Cart1Item key = {i} item = {elem} idx = {i} deleteItem = {this.deleteItem} 
                                    changeQuant = {this.changeQuant}/>
                    )
                })}
                <div style = {styles.total_line}>
                    <div></div>
                    <h4 style = {styles.total}>Subtotal: </h4>
                    <h4 style = {styles.total}>${this.state.subTotal} </h4>
                </div>                   
                   
                <div style = {Object.assign({},styles.checkoutContainer,visibility)}>
                    <NavButton url = "/checkout" bText = "Proceed to Checkout"/>
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
    checkoutContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "95%",
        margin: "10px"
    },
    
    visible: {
        display: "flex"
    },
    invisible: {
        display: "none"
    }
}
