import React, { useState } from 'react';
import Clases from './NumberPage.module.css';
import cn from 'classnames';

let PagesUsers = ({totalUsersCount, pageSize, currentPage, newUsersPage, portionSize = 5}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
        for( let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

    let portionCount = Math.ceil( pagesCount / portionSize ),
        [portionNumber, setPortionNumber] = useState(1),
        leftPortionNumber = (portionNumber - 1) * portionSize + 1,
        rightPortionNumber = portionNumber * portionSize;
    return (
        <div className = {Clases.page_block}>
            {portionNumber > 1 && <img className = {Clases.page_img_left} onClick = { () => { setPortionNumber(portionNumber - 1)}}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Arrow_Left.svg/1200px-Red_Arrow_Left.svg.png"/> }

            {pages
            .filter( p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map( (p, index) => {
               return <div className = { cn({[Clases.page_selected]: currentPage === p}, Clases.page_number)} key = {index} onClick = {(e) => newUsersPage(p)}>{p}</div>
            })}

           { portionCount > portionNumber && <img className = {Clases.page_img_right} onClick = { () => {setPortionNumber(portionNumber + 1)}}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Red_Arrow_Right.svg/1200px-Red_Arrow_Right.svg.png"/>}
        </div>
    )
}

export default PagesUsers;
