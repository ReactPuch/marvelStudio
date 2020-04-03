import React from 'react';
import ClasesMenu from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';
import FriendsConteiner from './Friends/FriendsConteiner';

let NavMenu = () => {
    return (
        <nav className = {ClasesMenu.menu}>
            <NavLink to = "/Profile" activeClassName = {ClasesMenu.active}>Profile</NavLink>
            <NavLink to = "/Messeges" activeClassName = {ClasesMenu.active}>Messeges</NavLink>
            <NavLink to = "/News" activeClassName = {ClasesMenu.active}>News</NavLink>
            <NavLink to = "/Music" activeClassName = {ClasesMenu.active}>Music</NavLink>
            <span><NavLink to = "/FindUsers" activeClassName = {ClasesMenu.active}>FindUsers</NavLink></span>
            <span><NavLink to = "/Settings" activeClassName = {ClasesMenu.active}>Settings</NavLink></span>
            <div className = {ClasesMenu.menu_friends}>
                <h2>Friends</h2>
                <div className = {ClasesMenu.menu_item}>
                    {<FriendsConteiner/>}
                </div>

            </div>
        </nav>
    )
}


export default NavMenu;