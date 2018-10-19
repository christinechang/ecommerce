import React, {Component} from 'react'
import Payment  from './Payment'

export default class Cart extends Component {
    state = {
        firstname: '',
        lastname: '',
        fullname: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        postal: '',
        phone: '',
        emailaddress: ''
    }

    onChangeContact = (e) => {
        this.setState({[e.target.name]:e.target.value}); 
    }

    payNow() {
        console.log("pay now");
    }
    render= () => {
        let fullname = this.state.firstname + ' ' + this.state.lastname;
        let orderNumber = 'xxx'
        let totalCharge = 10;

        return (
            <div  style = {styles.boxBorder}>
                <div  style = {styles.pageTitle}>
                    <h2>Check Out:</h2>
                    <h3>Shipping Address: <span style={styles.note}>(Only within the USA) </span></h3>

                </div> 
                <div style = {styles.layout2col}>
                    <div style = {styles.contact} onChange = {this.onChangeContact}>
                        <label>First Name<span style={styles.required}>*</span></label>
                        <input type="text" name="firstname" required style={styles.input} ></input>

                        <label>Last Name<span style={styles.required}>*</span></label>
                        <input type="text" name="lastname" required style={styles.input} ></input>
                    
                        <label>Address Line 1<span style={styles.required}>*</span></label>
                        <input type="text" name="address1" required style={styles.input} ></input>

                        <label>Address Line 2</label>
                        <input type="text" name="address2" required style={styles.input} ></input>
                        
                        <label>City<span style={styles.required}>*</span></label>
                        <input type="text" name="city" required style={styles.input} ></input>
                        
                        <label>State<span style={styles.required}>*</span></label>
                        <input type="text" name="state" required style={styles.input} ></input>
                        
                        <label>Postal Code<span style={styles.required}>*</span></label>
                        <input type="text" name="postal" required style={styles.input} ></input>

                        <label>Email<span style={styles.required}>*</span></label>
                        <input type="email" name="emailaddress" required style={styles.input}/>

                        <label>Phone<span style={styles.required}>*</span></label>
                        <input type="text" name="phone" required style={styles.input} ></input>
                                           
                        {/* <label>Country*</label>
                        <input type="text" name="country" style={styles.input} ></input> */}
                    </div>                                         
                </div>
                <p style={styles.note}> (<span style={styles.required}>*</span>  required)</p>
                <p style={styles.note}> Phone and Email are necessary for your order.  We do not share these with anyone </p>
                <p style={styles.note2me}> verify postal code and state</p>

                <div style = {styles.rightInDiv}>
                    <Payment 
                        name = {fullname}
                        description = {orderNumber}
                        amount = {totalCharge} 
                        />
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
    contact: {
        display:"grid",
        gridTemplateColumns: "1fr 4fr",
        gridGap: "10",
        backgroundColor: "white",
        width: "95%",
        alignSelf: 'center',
        justifySelf: 'center',
        margin: "10px",
        gridRowGap: "10px"
    },
    input: {
        fontSize: 20
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
    layout2col: {
        display:"grid",
        gridTemplateColumns: "2fr 1fr",
        gridGap: "5%",
        backgroundColor: "white",
        alignSelf: 'center',
        justifySelf: 'center',
    },
    rightInDiv: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "95%",
        margin: "10px"
    },
    required: {
        color: "red"
    },
    note: {
        fontSize: 14,
        marginLeft: 15,
        fontStyle: "normal"
    },
    note2me: {
        color: "red"
    }
}
