import React from 'react';
import Clases from './FriendsItem.module.css';
import { NavLink } from 'react-router-dom';

let UsersClear = (props) => {
    return (
            <div className ={Clases.friends_img}>
                <NavLink to = {'/Profile/' + props.id} className = {Clases.friends_link}>
                    <img src = {props.src} alt = {"avatar"}/>
                </NavLink>
                <div className = {Clases.friends_name}>
                    {props.name}
                </div>
            </div>
    )
}

export default UsersClear;