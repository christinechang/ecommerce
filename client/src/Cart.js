import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Payment  from './Payment'


export default class Cart extends Component {
    state = {
        orderArr:[],
    }

/////////
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

        //get order info from localStorage
        let orderList = JSON.stringify(this.state.orderArr);
        localStorage.setItem('orderList',orderList);
    }
    changeQuantity = () => {
        //change quantity
        this.updateOrderList();
    }
    deleteItem = (position) => {
        let orderArr = this.state.orderArr.splice(position,1);  
        this.setState({orderArr: orderArr})   //delete 1 item
        this.updateOrderList();
    }
    componentDidMount() {
        this.getOrderList();
    }
    payNow() {
        console.log("pay now");
    }
    render= () => {
        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Shopping Cart:</h2>
                </div> 
                {/* //ITEMS IN CART */}
                {this.state.orderArr.map( (elem,i) => {
                    return (
                        <div style = {styles.layout_checkout} key = {i}> 
                            <div >
                                <p> {i})</p>
                                <p>{elem._id}</p> 
                                <div> <FontAwesomeIcon icon="trash-alt" /> </div> 
                            </div>
                            <div style = {styles.imgContainer}>
                                <img  style = {styles.artImg} src = {elem.imgurl} width = "300px" />
                            </div>
                            <div>
                                <p> {elem.name} </p>
                                <p>quantity{elem.quantity} @ $45{elem.price}</p>
                                <p> size: {elem.size} </p>
                            </div>
                            <div  style = {styles.leftBorder}>
                            <h3>$$$</h3>
                            </div>
                        </div>)
                })}
                <div><h3>TOTAL: $$$$$</h3></div>
                <div style = {styles.rightInDiv}>
                    <Payment 
                        name = 'christine chang' 
                        description = 'order 1234'
                        amount = {10} 
                        />
                </div>
            </div>    
        );
    }
}
let styles = {
    boxBorder:{
        border: "1px grey solid",
        margin: "10px"
    },
    leftBorder:{
        borderLeft: "1px grey solid",
    },
    pageTitle: {
        marginLeft: "10px"
    },
    layout_checkout: {
        display:"grid",
        gridTemplateColumns: "1fr 4fr 4fr 2fr",
        gridGap: "0",
        backgroundColor: "pink",
        width: "95%",
        alignSelf: 'center',
        justifySelf: 'center',
        border: "1px grey solid",
        margin: "10px"
    }  ,
    imgContainer: {
        width: "300px",
    },
    artImg: {
        width: "100%",
        maxWidth: "300px",
    },
    mainButton: {
        border: "1px solid black",
        margin:"15px auto",
        height: '30px',
        padding: '0 20px',
        width: "200px"
    },
    rightInDiv: {
        width: "100%",
        display: "flex",
        // marginLeft: "3%",
        // textAlign: "center",
        justifyContent: "flex-end"

    },
}
