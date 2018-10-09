import React from 'react'
import { NavLink } from 'react-router-dom'
export default class NavBarComp extends React.Component{
    render(){
        let activeStyle = {
           fontWeight: 'bolder',
           fontSize: 'larger'
        }
        return(
            <div style = {styles.navbar}>
                <div style = {styles.logo}>
                <h1 style = {styles.h1}>c zing c</h1></div>
                <ul style={styles.ul}>
                    <li style = {styles.li}>
                        <NavLink to="/who" 
                                activeStyle ={activeStyle} style = {styles.link}>
                            Who
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/what"
                            activeStyle ={activeStyle} style = {styles.link}>
                            What
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/when-where"
                            activeStyle ={activeStyle} style = {styles.link}>
                        When-Where
                        </NavLink>
                    </li>
                    <li style = {styles.li}>
                        <NavLink to="/why"
                            activeStyle ={activeStyle} style = {styles.link}>
                        Why
                        </NavLink>
                    </li>
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
        gridTemplateColumns: '1fr 1fr',
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

