import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Cart1Item extends Component {
   
    onChange = (e) => {
        this.props.changeQuant(this.props.idx,e.target.value);
       //send to parent
    }

    render = () =>{
        const item = this.props.item;
        return(
            <div style = {styles.layout_checkout} idx = {this.props.idx}> 
                <div style = {styles.imgContainer}>
                    <img  style = {styles.artImg} src = {item.imgurl} width = "300px" alt = ''/>
                </div>
                <div style = {styles.itemNumberIdx}>
                    <p> {this.props.idx + 1})</p>
                </div>
                <div>    
                    <p>Print with Image "{item.name}"</p>
                    {/* <p> {item._id}</p>  // keep this here in case*/}
                    <p>Size: {item.size} </p>
                    <p>Quantity:
                        <input type="number" name="quantity" style={styles.small_input} min="1" step="1" 
                            defaultValue = {item.quantity}
                            onChange = {this.onChange}></input>
                    </p>
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
        borderRadius: 5,
        margin: "10px"
    },

    itemNumberIdx: {
        paddingLeft: "10"
    },
    artImg: {
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
        backgroundColor: "lightgrey",
        borderRadius: 5
    },
    small_input: {
        marginLeft: "5px",
        width: "30px",
    }

}
