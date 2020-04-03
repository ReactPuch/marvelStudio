import React from 'react';
import Clases from './Status.module.css';

let Status = ({aditMode, status, onStatusChange, diActivateAditMode, activateAditMode}) => {
    return (
        <div className = {Clases.status}>
            <div className = {Clases.status_title}>Status:</div>
            { aditMode ? <input value = {status} onChange = {onStatusChange} onBlur = {diActivateAditMode}/> :
                        <div onDoubleClick = {activateAditMode} className = {Clases.status_chenge}>{status || "User has no status"}</div>}
        </div>
    )
}

export default Status;