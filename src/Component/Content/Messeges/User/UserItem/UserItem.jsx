import React from 'react';
import Class from './../User.module.css';
import {NavLink} from 'react-router-dom';

let UsersItem = (props) => {                                            
    let urlId = '/Messeges/' + props.id;
    return (
        <div className = {Class.user_item}>
            <NavLink to = {urlId}>
                <img className = {Class.user_avatar} src={props.src}/>
                <div className = {Class. user_name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default UsersItem;