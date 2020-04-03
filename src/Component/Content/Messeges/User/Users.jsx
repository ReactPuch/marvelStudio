import React from 'react';
import Class from './User.module.css';
import DialogsShow from '../Dialogs/DialogsShow';
import UsersItem from './UserItem/UserItem';
import MyMessegesContainer from '../Dialogs/MyMesseges/MyMessegesContainer';

let Users = (props) => {
    let newUserData= props.UserData.map( (elem, index) => <UsersItem key = {index} name = {elem.name} id = {elem.id} src = {elem.src}/>);                
    let newDialogsData = props.DialogsData.map( (elem, index) => <DialogsShow key = {index}  dialogs = {elem.dialogs}/> );

    return (
        <div>
            <div className = {Class.user_title}>Messeges:</div>
            <div className = {Class.user_block}>
                <div className = {Class.user}>
                    {newUserData}   
                </div> 
                <div className = {Class.user_dialogs}>
                    {newDialogsData}
                </div>
            </div>
                <MyMessegesContainer/>
        </div>
    )
}

export default Users;