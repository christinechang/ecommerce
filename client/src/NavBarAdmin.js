import React from 'react'
import { NavLink } from 'react-router-dom'
export default class NavBarAdmin extends React.Component{
    render(){
        let activeStyle = {
           fontWeight: 'bolder',
           fontSize: 'larger'
        }
        return(
            <div style={styles.navbarAdmin}>
                <div></div>
                <ul style={styles.adminUl}>
 
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

                    <NavLink to="/admin/logout" activeStyle ={activeStyle} style = {styles.adminLink}>
                        <li style = {styles.adminLi}>Logout </li>
                    </NavLink>
                </ul>
            </div>
        )}}

const styles = {
    
    adminLi: {
        listStyleType: 'none',
        margin:"0 5%",
        height: "30px",
        // color: '#f9f0c7',
        fontSize: "12px",
        },
    adminUl: {
        background:'#3e90bc', 
        margin: '0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        padding: "0"
    },
    adminLink: {
        textDecoration: 'none',
        color: '#f9f0c7',
        margin: '0 auto'
    },
    navbarAdmin: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: "center",
        backgroundColor: 'white',
        position: 'sticky',
        top: '50px'

    }
}
