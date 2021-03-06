import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBarAdmin extends React.Component{
    render(){
        let activeStyle = {
           fontWeight: 'bolder',
           fontSize: 'larger'
        }
        console.log(`visibility: ${JSON.stringify(visibility)}; windowsize: ${this.innerWidth}`)

        let visibility = Object.assign({},styles.adminUl,
            (localStorage.getItem('token') ? {} : styles.invisible))        //if logged in, show admin navbar
        // debugger
            //check local storage whether user is logged in or not
        //change label between 'login' and 'logout'
        return(
            <div id = "navbarAdmin">
                <div></div>
                <ul style={visibility} id="navbarAdmin">
 
                    <NavLink to="/admin/artworks" activeStyle ={activeStyle} style = {styles.adminLink}>
                        <li style = {styles.adminLi}>admin ART</li>
                    </NavLink>
                    
                    <NavLink to="/admin/products" activeStyle ={activeStyle} style = {styles.adminLink}>
                        <li style = {styles.adminLi}>admin PRODUCTS </li>
                    </NavLink>
                    <li style = {styles.adminLi}>(admin USERS)</li>
                    {/* <NavLink to="/admin/users"
                            activeStyle ={activeStyle} style = {styles.adminLink}>
                        Manage USERS
                        </NavLink> */}
                        
                    
                    <li style = {styles.adminLi}>(admin IMAGES)</li>
                    {/* <NavLink to="/admin/images"
                            activeStyle ={activeStyle} style = {styles.adminLink}>
                        Logout
                        </NavLink> */}

                </ul>
             </div>
        )}}

const styles = {
    
    adminLi: {
        listStyleType: 'none',
        margin:"0 5%",
        height: "30px",
        // color: '#f9f0c7',
        // fontSize: "12px",    //see index.css for responsive font-sizes
        },
    adminUl: {
        background:'#3e90bc', 
        margin: '0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        padding: "0",
        visibility: "visible"

    },
    adminLink: {
        textDecoration: 'none',
        color: '#f9f0c7',
        margin: '0 auto'
    },


    invisible: {
        visibility: "hidden"
    },
}
