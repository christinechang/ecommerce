import React, {Component} from 'react'
import Payment  from './Payment'
import CheckoutContactInfo  from './CheckoutContactInfo'
import CheckoutTotals  from './CheckoutTotals'

export default class Checkout extends Component {
    state = {
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        stateUS: '',
        postal: '',
        country: '',
        phone: '',
        emailaddress: '',
        cc_fullname:'',
        orderNumber: '',
        subTotal: 0,
        tax: 0,
        shipping: 0,
        totalAmount: 0,

        orderItems:[] 
    }
   
    getSubTotal = () => {
        let subTotal = 0;
        let cb = () => {
            console.log(`===>GETSUBTOTAL:  subtotal = ${this.state.subTotal}`)
        }
        //get order info from localStorate
        let orderList = localStorage.getItem('orderList') || '';
        let orderItems = orderList ? JSON.parse(orderList) : [];
        orderItems.map((elem)=> {
            subTotal += (elem.price * elem.quantity)
        })
        this.setState({subTotal:subTotal}, this.calcTotals)
    }

    getContactInfo = (firstname, lastname, address1, address2, city, stateUS, postal, country, phone, emailaddress, cc_fullname) => {
        
        this.setState({firstname:firstname,lastname,address1,address2,city,stateUS,
            postal, country, phone, emailaddress, cc_fullname});
    }
    getExtras = (tax,shipping,totalAmount) => {
        this.setState({tax,shipping,totalAmount},()=>{console.log(`EXTRAS: ${this.state.tax},${this.state.shipping},${this.state.totalAmount}`)})
    }

    componentDidMount= () => {
        this.getSubTotal();
    }
    
    render= () => {
        // console.log("subTotal:",this.state.subTotal)
        let visibility = (this.state.firstname && this.state.lastname && this.state.address1 && 
            this.state.city && this.state.us_state && this.state.postal && this.state.emailaddress && 
            this.state.phone && this.state.cc_fullname) ? styles.visible : styles.invisible;
        
        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Check Out:</h2>
                </div> 

                <CheckoutContactInfo getContactInfo = {this.getContactInfo}/>
                <CheckoutTotals subTotal = {this.state.subTotal} stateUS = {this.state.stateUS} getExtras = {this.getExtras} />
               
                <div style = {Object.assign({},styles.rightInDiv,visibility)}>
                    <div style = {styles.paymentContainer}>
                        <Payment 
                            name = {this.state.cc_fullname}
                            description = {this.state.orderNumber}
                            amount = {this.props.subTotal}   
                            />
                    </div>
                </div>
            </div>    
        );
    }
}
let styles = {
    boxBorder:{
        margin: "10px 10px 40px",
        color: "#666"
    },
    pageTitle: {
        marginLeft: "10px"
    },
    rightInDiv: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "95%",
        margin: "10px"
    },
    paymentContainer: {
        backgroundColor: "lightBlue",
        padding: "30px"
    },
    note: {
        fontSize: 14,
        marginLeft: 15,
        fontStyle: "normal"
    },
    note2me: {
        color: "red"
    },
    visible: {
        display: "flex"
    },
    invisible: {
        display: "none"
    }
}
