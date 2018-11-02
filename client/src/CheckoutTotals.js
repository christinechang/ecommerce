import React, {Component} from 'react'
import CheckoutTaxTable from './CheckoutTaxTable'
import CheckoutShippingTable from './CheckoutShippingTable'

export default class CheckoutTotals extends Component {
    state = {
        orderNumber: '',
        stateUS: '',
        tax: 0,
        shipping: 0,
        totalAmount: 0
    }
    getTaxShipping = (taxOrShipping) => {
        let type = taxOrShipping.toLowerCase();
        let rate = '';
        if (type === "tax" || type ==="shipping") {
            rate = (type === "tax" ? CheckoutTaxTable[this.state.stateUS] : CheckoutShippingTable[this.state.stateUS])
        }
        rate = (rate ? rate : 0);

        return(Number((rate * this.props.subTotal).toFixed(2)))
    }
    calcTotals = () => {
        let tax = this.getTaxShipping("tax");
        this.props._getInputData({"tax":tax}); //send to parent

        let shipping = this.getTaxShipping("shipping");
        this.props._getInputData({"shipping":shipping}); //send to parent

        let totalAmount = this.props.subTotal + shipping + tax;
        this.props._getInputData({"totalAmount":totalAmount}); //send to parent

        //note - this.state.subTotals is not reliable.  fall back onto this.props.subTotal
        this.setState({shipping:shipping,tax:tax,totalAmount:totalAmount})

    }   
    getOrderNumber = () => {
        this.setState.orderNumber = 'X1001'     //generate order number here
    }
    componentWillReceiveProps = (nextProps) => {     //props come much later.
        if (nextProps.subTotal !== this.props.subTotal && nextProps.stateUS !== this.props.stateUS) {
            this.setState({subTotal: nextProps.subTotal, stateUS: nextProps.stateUS}, this.calcTotals());
        } else if (nextProps.stateUS !== this.props.stateUS) {
            this.setState({stateUS: nextProps.stateUS}, this.calcTotals);
        } else if (nextProps.subTotal !== this.props.subTotal) {
            this.setState({subTotal: nextProps.subTotal}, this.calcTotals);
        }
    }
    componentDidMount = () => {
        this.setState({subTotal: this.props.subTotal, stateUS: this.props.stateUS})
    }
    render= () => {
        return (             
            <div style = {styles.total_box}>
                <div></div>
                <h4 style = {styles.total}>Subtotal: </h4>
                <h4 style = {styles.total}>${this.props.subTotal} </h4>

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
        );
    }
}
let styles = {
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
