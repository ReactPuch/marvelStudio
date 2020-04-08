import React from 'react';
import Clases from './User.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    return (
            <div className = {Clases.users_section}>
                <div className = {Clases.users_section_avatar}>
                    <NavLink to = {'/Profile/' + props.id}>
                        <img src = {props.src} alt="avatar"/>
                    </NavLink>
                    {props.followed}
                </div>
                <div className = {Clases.users_section_infoUser}>
                    <div className = {Clases.users_section_infoLeft}>
                        <div className = {Clases.users_section_fullName}>{props.name}</div>
                        <div className = {Clases.users_section_status}>{props.status}</div>
                    </div>
                    <div className = {Clases.users_section_infoRight}>
                        <div className = {Clases.users_section_country}>{props.country},</div>
                        <div className = {Clases.users_section_city}>{props.city}</div>
                    </div>  
                </div>
            </div>
    )
}

export default Users;
