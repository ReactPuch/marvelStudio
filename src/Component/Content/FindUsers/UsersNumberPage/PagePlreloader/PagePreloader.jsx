import React from 'react';
import Clases from './../MapNumberPage/NumberPage.module.css';

let PagePreloader = (props) => {
    return (
        <div>
            {props.isFetching ? <img className = {Clases.page_img} src = "https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif"/> : null }
        </div>
    )
}

export default PagePreloader;