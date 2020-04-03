import React from 'react';
import Clases from './Header.module.css';
import { NavLink, Redirect } from 'react-router-dom';

let Header = (props) => {
    return (
        <header className = {Clases.header}>
            <img className = {Clases.header_logo} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/1200px-Marvel_Studios_2016_logo.svg.png"/>
            <div className = {Clases.header_login}>
                {props.isAuth && <div className = {Clases.header_login_name + ' ' + Clases.activete}> {props.login}
                                 <button className = {Clases.header_login_logout} onClick = {props.logout}>Logout </button>
                                </div> } 
                                
                {!props.isAuth && <NavLink to = "/login" className = {Clases.header_link}>Join a team </NavLink>}
            </div>
        </header>
    )
    
}

export default Header;