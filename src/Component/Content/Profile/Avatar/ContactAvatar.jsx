import React from 'react';
import Clases from './Avatar.module.css';

let ContactAvatar = ({contacTitle, contactValue}) => {
    return (
        <div className = {Clases.avatar_link_webSide}>
            <span>{contacTitle}: </span> <div><a>{contactValue}</a></div>
        </div>
    )
}

export default ContactAvatar;