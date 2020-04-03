import React from 'react';
import clases from './Form.module.css';
import { Field } from 'redux-form';

const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    let hasError =  touched && error;
    return (
        <div className = {clases.textarea + ' ' + ( hasError ? clases.error : "" )}>
          {props.children}
           { hasError && <span className = {clases.textarea_text}>
                         <img src = "https://cdn2.iconfinder.com/data/icons/minimal-4/100/alert-512.png"/>{error}</span>}
        </div>
    )
}

const Form = {
    Textarea:(props) => {
        const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
    },
    Input:(props) => {
        const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    },
    Field:(validate, name, component, placeholder, type = {}) => {
        return (
                <Field validate = {validate} name = {name} component = {component} placeholder = {placeholder} {...type}/>
        )
    }
}


export default Form;






