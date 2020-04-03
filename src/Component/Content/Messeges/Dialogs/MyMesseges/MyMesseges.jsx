import React from 'react';
import Classes from './Textarea.module.css';
import MyMssegesTextArea from './MyMssegesTextArea';

let MyMesseges = (props) => {
    let newMessagesTextarea = (value) => {
        props.addDialogssActionCreator(value.MessegesTextarea);
        };
    return (
        <div className = {Classes.textarea_block}>
            <MyMssegesTextArea onSubmit = {newMessagesTextarea}/>
        </div>
    )
}

export default MyMesseges;
