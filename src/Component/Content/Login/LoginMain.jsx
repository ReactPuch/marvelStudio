import React from 'react';
import clases from './Login.module.css';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

let LoginMain = (props) => {
    let Login = (loginData) => {
        props.loginOnServerThunkCreater(loginData.email, loginData.password, loginData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to = {'/profile'}/>
    };
    
    return (
        <div className = {clases.login}>
            <div className = {clases.login_text}>
                Вас нету в наших редах  
                <br/>
                Что бы войти нужен пропуск
                <br/>
                Войдите и получите его
            </div>
            <div className = {clases.login_form_block}>
                <LoginForm onSubmit = {Login}/>
            </div> 
                <img className = {clases.login_img} src="https://cdn.dribbble.com/users/1967053/screenshots/4541633/___-1.gif"/>
        </div>  
    )
}

export default LoginMain;