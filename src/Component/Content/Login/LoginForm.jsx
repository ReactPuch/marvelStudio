import React from 'react';
import clases from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import Form from '../../../Validation/FormError/CheckErrorForm';
import { requiredField } from '../../../Validation/ValidationMessages';

let LoginForm = (props) => {
    return (
        <form className = {clases.login_form} onSubmit = {props.handleSubmit}>
            {props.error && <div className = {clases.login_form_error}> {props.error} </div> }
            {Form.Field([requiredField], "email", Form.Input, "Email")}
            {Form.Field([requiredField], "password", Form.Input, "Password", {type: 'password'})}
            <Field  name = {"rememberMe"} component = {Form.Input} type = {"checkbox"} className = {clases.login_form_checkbox}/> <h2>remember me</h2>
            <button>Login</button>
        </form>
    )
};
export default reduxForm({
    form: 'loginForm'
})(LoginForm)

