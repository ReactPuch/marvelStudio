import React from 'react';
import clases from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreater } from '../../../../Validation/ValidationMessages';
import Form from '../../../../Validation/FormError/CheckErrorForm';

let maxLength = maxLengthCreater(10);

let MyPostsFormTextArea = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} className = {clases.profile_form}>
            <Field validate = {[requiredField, maxLength]} name = 'newComentPosts' component = {Form.Textarea} placeholder = {'Enter yout posts'}/>
            <button className={clases.form_btn}>Send</button>
        </form>
    )
}

export default reduxForm({
    form: 'PostsTextArea'
})(MyPostsFormTextArea)