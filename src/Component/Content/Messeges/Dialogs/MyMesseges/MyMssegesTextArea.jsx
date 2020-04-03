import React from 'react';
import Classes from './Textarea.module.css';
import { Field,reduxForm } from 'redux-form';
import { requiredField, maxLengthCreater } from '../../../../../Validation/ValidationMessages';
import Form from '../../../../../Validation/FormError/CheckErrorForm';

const maxLength20 = maxLengthCreater(20);

let MyMssegesTextArea = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} className = {Classes.messages_form}>
            <Field className = {Classes.textarea} name = {'MessegesTextarea'} component = {Form.Textarea}
                    placeholder = {'Enter your message'} validate = {[requiredField, maxLength20]}/>
            <button className = {Classes.messages_btn}>Send</button>
        </form> 
    )
}

export default reduxForm({
    form: 'MssegesTextArea'
})(MyMssegesTextArea);


