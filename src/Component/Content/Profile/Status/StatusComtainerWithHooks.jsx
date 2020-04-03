import React from 'react';
import Clases from  './Status.module.css';
import Status from './Status';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { updateStatusThunkCreater } from '../../../../Redux/Reducer/ProfieArrayReducer';
import { useState, useEffect } from 'react';

let StatusContainerWithHooks = (props) => {

    let [aditMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    let activateAditMode = () => {
        setEditMode(true);
    };
    let diActivateAditMode = () => {
        setEditMode(false);
        props.updateStatusThunkCreater(status);
    };
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
 
        return (
            <div>
                <Status aditMode = {aditMode} status = {status} activateAditMode = {activateAditMode} diActivateAditMode = {diActivateAditMode}
                        onStatusChange = {onStatusChange}/>
            </div>
        )
} 

let mapStateToStatus = (state) => {
    return {
        status: state.ProfieArray.status
    }
}

export default compose(
    connect( mapStateToStatus, { updateStatusThunkCreater} )
)(StatusContainerWithHooks)