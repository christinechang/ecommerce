import React, {Component} from 'react'
import CheckoutStateUS  from './CheckoutStateUS'

export default class CheckoutContactInfo extends Component {
    state = {
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        stateUS: '',
        postal: '',
        country: 'USA',
        phone: '',
        emailaddress: '',
        cc_fullname:''
    }

    onChangeContact = (e) => {
        // let cb1 = () => {
        //     this.props.getContactInfo(this.state.firstname,this.state.lastname,this.state.address1,
        //         this.state.address2,this.state.city,this.state.stateUS, this.state.postal,
        //         this.state.country, this.state.phone, this.state.emailaddress, this.state.cc_fullname)}
        // let cb2 = () => {console.log(this.state)}    
        this.props._getInputData({[e.target.name]:e.target.value}); //send to parent
        this.setState({[e.target.name]:e.target.value});
    }
    getStateUS = (stateUS) =>{
        // let cb =  () => {console.log("new state = ", stateUS)}
        this.props._getInputData({"stateUS":stateUS})
        this.setState({stateUS: stateUS})
    }
    valid_us_postcode = (postcode) => {
        postcode = postcode.replace(/\s/g, ""); //get rid of spaces
        let isValidUSZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postcode);
        return isValidUSZip;
    }
 
    render= () => {
        return (
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

                    <CheckoutStateUS getStateUS = {this.getStateUS}/>
                    {this.state.stateUS ? <p></p> : <p style = {styles.reqd_note}>(required)</p>}

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
        )
    }
}
let styles = {
    boxBorder:{
        margin: "10px 10px 40px",
        color: "#666"
    },
    topMargin:{
        marginTop: "40px",
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
}
