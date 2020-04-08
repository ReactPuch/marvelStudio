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
            <div className = {clases.login_form_checkbox}>
                <Field  name = {"rememberMe"} component = {Form.Input} type = {"checkbox"} className = {clases.login_formCheckbox}/>
                <div className = {clases.login_checkbox_text}>remember me</div>
            </div>
            <button>Login</button>
            <div className = {clases.login_captcha}>
                {props.captchaUrl && <img src = {props.captchaUrl} className = {clases.login_captcha_img}/>} 
                <div className = {clases.login_captcha_input}>
                    {props.captchaUrl && Form.Field([requiredField], 'captcha', Form.Input, 'Symbol from img')} 
                </div>                       
                                  
            </div>
        </form>
    )
};
export default reduxForm({
    form: 'loginForm'
})(LoginForm)

