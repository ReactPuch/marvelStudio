import React from 'react';
import Clases from './Status.module.css';
import { maxLengthCreater } from '../../../../Validation/ValidationMessages';

let maxLength = maxLengthCreater(20);

let Status = ({aditMode, status, onStatusChange, diActivateAditMode, activateAditMode}) => {
    return (
        <div className = {Clases.status}>
            <div className = {Clases.status_title}>Status:</div>
            { aditMode ? <input value = {status} onChange = {onStatusChange} onBlur = {diActivateAditMode} validate = {maxLengthCreater(10)}/> :
                        <div onDoubleClick = {activateAditMode} className = {Clases.status_chenge}>{status || "User has no status"}</div>}
        </div>
    )
}

export default Status;