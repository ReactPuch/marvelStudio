import React from 'react';
import Clases from './NumberPage.module.css';

let PagesUsers = ({totalUsersCount, pageSize, currentPage, newUsersPage, portionSize = 10}) => {
    let pagesSize = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
        for( let i = 1; i <= pagesSize; i++) {
            pages.push(i);
        }

    return (
        <div className = {Clases.page_block}>
           <img className = {Clases.page_img_left}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Arrow_Left.svg/1200px-Red_Arrow_Left.svg.png"/>

            {pages.map( (p, index) => (
                   <div className = {currentPage === p && Clases.page_item } key = {index} onClick = {() => newUsersPage(p)}>{p}</div>))}

            <img className = {Clases.page_img_right}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Red_Arrow_Right.svg/1200px-Red_Arrow_Right.svg.png"/>
        </div>
    )
}

export default PagesUsers;
