import React from 'react';
import Class from './Dialogs.module.css';

let DialogsShow = (props) => {
    return (
        <div className = {Class.dialog_block}>
            <div className = {Class.dialog_user}>
                <div className = {Class.dialog_avatar}>
                    <img src = 'https://www.cartavip.it/images/avatar.png'/>
                </div>
                {props.dialogs}
            </div>
        </div>
    )
}

export default DialogsShow;