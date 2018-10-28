import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBarAdmin from './NavBarAdmin'

export default class NavBarComp extends React.Component{
    state = {
        logChoice: 'Login',
        activeStyle: {
            fontWeight: 'bolder',
            fontSize: 'larger'
         }
    }
    doLogin() {
        return(
            <li style = {styles.li}>
                <NavLink to="/admin/login"
                    activeStyle ={this.state.activeStyle} 
                    style = {styles.link}>
                    Login
                </NavLink>
            </li>
        )
    }
    doLogout() {
        return( 
            <li style = {styles.li}>
                <NavLink to="/admin/logout"
                    activeStyle ={this.state.activeStyle} 
                    style = {styles.link}>
                    Logout
                </NavLink>
            </li>
        ) 
    }  

    render(){
        return(
            <div style = {styles.navbar}>
                <div style = {styles.logo}>
                    <h1 style = {styles.h1}>c zing c</h1>
                </div>
                <NavBarAdmin/>
                <ul style={styles.ul}>
                    <li style = {styles.li}>
                        <NavLink to="/who" 
                                activeStyle ={this.state.activeStyle} style = {styles.link}>
                            Who
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/what"
                            activeStyle ={this.state.activeStyle} style = {styles.link}>
                            What
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/when-where"
                            activeStyle ={this.state.activeStyle} style = {styles.link}>
                        When-Where
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/why"
                            activeStyle ={this.state.activeStyle} style = {styles.link}>
                        Why
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/cart"
                            activeStyle ={this.state.activeStyle} style = {styles.link}>
                        Cart
                        </NavLink>
                    </li>
                    {localStorage.getItem('token') ? this.doLogout() : this.doLogin()} 
                    
                </ul>
            </div>
        )}}

const styles = {
    li: {listStyleType: 'none'
        },
    ul: {
        height:'50px', 
        background:'#1a587a', 
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        margin: '0',
    },
    link: {
        textDecoration: 'none',
        color: '#f9f0c7'
    },
    navbar: {
        display: 'grid',
        backgroundColor: '#1a587a',
        gridTemplateColumns: '1fr 2fr 2fr',
        alignItems: 'center',
        paddingLeft: '15px',
        position: 'sticky',
        top: '0'
    },
    h1: {
        margin:'0',
        color: '#f9f0c7'
    }
}

