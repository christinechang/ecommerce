import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Cart1Item extends Component {
    
    render() {
        const item = this.props.item;

        const deleteItem = this.props.deleteItem;
        return(
            <div style = {styles.layout_checkout} idx = {this.props.idx}> 
                <div style = {styles.imgContainer}>
                    <img  style = {styles.artImg} src = {item.imgurl} width = "300px" />
                </div>
                <p> {this.props.idx + 1})</p>
                <div>    
                    <p>Print with Image "{item.name}"</p>
                    {/* <p> {item._id}</p>  */}
                    <p>Size: {item.size} </p>
                    <p>Quantity: {item.quantity} (CHANGE)</p>
                    <p>Price: ${item.price} each</p>
                </div>
                <div style = {styles.deleteContainer}>
                    <div style = {styles.delete} onClick = {()=>this.props.deleteItem(this.props.idx)}>    
                        <FontAwesomeIcon icon="trash-alt" /> 
                    </div> 
                </div>

                <div  style = {styles.sub_total}>
                    <h3>${item.quantity * item.price}</h3>
                </div>
            </div>
                        )

    }
}
let styles = {
    sub_total:{
        borderLeft: "1px grey solid",
        padding: 20
    },
    
    layout_checkout: {
        display:"grid",
        gridTemplateColumns: "5fr 1fr 8fr 1fr 2fr",
        gridGap: "0",
        backgroundColor: "white",
        width: "95%",
        alignSelf: 'center',
        justifySelf: 'center',
        border: "1px grey solid",
        margin: "10px"
    },
    imgContainer: {
        width: "300px",
    },
    artImg: {
        width: "100%",
        maxWidth: "300px",
        padding: 10
    },
    deleteContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: 10
    },
    delete: {
        padding: 10,
        backgroundColor: "lightgrey"
    }
}
