import React, {Component} from 'react'
import Payment  from './Payment'
// import StateSpinner  from './StateSpinner'

export default class Checkout extends Component {
    state = {
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        us_state: '',
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

   
    getOrderList = () => {
        let subTotal = 0;
        let cb = () => {
            console.log(`orderItems: ${this.state.orderItems}:  subtotal = ${subTotal}`)
        }
        //get order info from localStorate
        let orderList = localStorage.getItem('orderList') || '';
        let orderItems = orderList ? JSON.parse(orderList) : [];
        orderItems.map((elem)=> {
            subTotal += (elem.price * elem.quantity)
        })
        this.setState({orderItems: orderItems, subTotal: subTotal}, cb)
    }
    onChangeContact = (e) => {
        let cb = (name) => {
            if (0 === (name.localeCompare("us_state"))) {
                this.changeState()
            }
        }

        this.setState({[e.target.name]:e.target.value}, cb(e.target.name)); 

    }
    // onSpinner(theState){
    //     this.setState({us_state: theState})
    // }

    componentDidMount= () => {
        this.getOrderList();        
    }
    valid_us_postcode = (postcode) => {
        postcode = postcode.replace(/\s/g, ""); //get rid of spaces
        let isValidUSZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postcode);
        return isValidUSZip;
    }
    changeState = () => {
        let taxRate = (this.state.us_state > 'M') ? .0825 : .05;   //use actual state table here
        let tax = Number((taxRate * this.state.subTotal).toFixed(2))

        let shippingRate =  (this.state.us_state > 'M') ? .1 : .07;            //use shipping table
        let shipping = Number((shippingRate * this.state.subTotal).toFixed(2));

        let totalAmount = this.state.subTotal + tax + shipping;
        this.setState({totalAmount: totalAmount, tax: tax, shipping: shipping})
    }
    render= () => {
        console.log("subTotal:",this.state.subTotal)
        let visibility = (this.state.firstname && this.state.lastname && this.state.address1 && 
            this.state.city && this.state.us_state && this.state.postal && this.state.emailaddress && 
            this.state.phone && this.state.cc_fullname) ? styles.visible : styles.invisible;
        
        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Check Out:</h2>

                </div> 
                <div style = {styles.layout2col}>
                    <div style = {styles.contact} onChange = {this.onChangeContact}>
                        <h3>Shipping Address: <span style={styles.note}>(USA only) </span></h3>
                                <div></div>
                        <input type="text" name="firstname" required style={styles.input} placeholder = "First Name"></input>
                        {this.state.firstname ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}
                        
                        <input type="text" name="lastname" required style={styles.input} placeholder = "Last Name"></input>
                        {this.state.lastname ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

                        <input type="text" name="address1" required style={styles.input} placeholder = "Address Line 1"></input>
                        {this.state.address1 ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

                        <input type="text" name="address2" required style={styles.input} placeholder = "Address Line 2" ></input>
                        <p></p>

                        <input type="text" name="city" required style={styles.input} placeholder = "City"></input>
                        {this.state.city ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

                        {/* <input type="text" name="state" required style={styles.input} placeholder = "State"></input>
                        {this.state.state ? <p></p> : <p style = {styles.reqd_note}>(required)</p>} */}
                        
                        <select name = "us_state" required style={styles.input} >
                            <option value='' >Choose State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        {this.state.us_state ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

                        <input type="text" name="postal" required style={styles.input} placeholder = "Post Code"></input>
                        {this.valid_us_postcode(this.state.postal) ? <p></p> : <p style = {styles.reqd_note}>(invalid zip)</p>}

                        {/*<input type="text" name="country" style={styles.input} ></input> */}

                    </div>
                    <div style = {styles.contact} onChange = {this.onChangeContact}>
                        <h3>Contact Info:<span style={styles.note}>(Needed for delivery.) </span></h3><div></div>
                        <input type="email" name="emailaddress" required style={styles.input} placeholder = "Email"/>
                        {this.state.emailaddress ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

                        <input type="text" name="phone" required style={styles.input} placeholder = "Phone"></input>
                        {this.state.phone ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

                        <h3 style = {styles.topMargin}>Credit Card Info:</h3><div></div>
                        <input type="text" name="cc_fullname" required style={styles.input} placeholder = "Full Name on Credit Card"></input>
                        {this.state.cc_fullname ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}
                    </div>  

                </div>


                <div style = {styles.total_box}>
                    <div></div>
                    <h4 style = {styles.total}>Subtotal: </h4>
                    <h4 style = {styles.total}>${this.state.subTotal} </h4>

                    <div></div>
                    <h4 style = {styles.total}>Tax: </h4>
                    <h4 style = {styles.total}>${this.state.tax} </h4>

                    <div></div>
                    <h4 style = {styles.total}>Shipping: </h4>
                    <h4 style = {styles.total}>${this.state.shipping} </h4>

                    <div></div>
                    <h3 style = {styles.total}>Total: </h3>
                    <h3 style = {styles.total}>${this.state.totalAmount} </h3>
 
                </div>
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
    leftBorder:{
        borderLeft: "1px grey solid",
    },
    topMargin:{
        marginTop: "40px",
    },
    pageTitle: {
        marginLeft: "10px"
    },
    layout2col: {
        display:"grid",
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: "white",
        border: "1px solid grey",
        borderRadius: "5px"
    },
    contact: {
        display:"grid",
        gridTemplateColumns: "3fr 1fr",
        // gridGap: "10",
        backgroundColor: "white",
        width: "95%",
        alignSelf: 'start',
        justifySelf: 'start',
        margin: "10px",
        gridRowGap: "10px",
    },
    input: {
        fontSize: 16,
        height: 30
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
    required: {
        color: "red"
    },
    reqd_note: {
        fontSize: 14,
        margin: '8px 15px',
        fontStyle: "normal",
        color: "red"
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
    },

    total:{
        paddingLeft: 10,
        margin: 5
    },
    total_box: {
        display:"grid",
        gridTemplateColumns: "14fr 1fr 2fr",    //based on cart format
        gridGap: "0",
        backgroundColor: "white",
        alignSelf: 'center',
        justifySelf: 'center',
        border: "1px grey solid",
        marginTop: "10px",
        borderRadius: "5px"

    }
}
