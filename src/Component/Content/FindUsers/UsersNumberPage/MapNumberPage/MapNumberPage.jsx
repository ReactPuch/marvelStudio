import React from 'react';
import Clases from './NumberPage.module.css';
import PagePreloader from '../PagePlreloader/PagePreloader';
import PagesUsers from './PagesUsers';

let MapNumberPage = ({totalUsersCount, pageSize, isFetching, currentPage, newUsersPage}) => {

    return (
        <div>
            <PagePreloader isFetching = {isFetching}/>
            <PagesUsers totalUsersCount = {totalUsersCount} pageSize = {pageSize} currentPage = {currentPage} newUsersPage = {newUsersPage}/>
        </div>
    )
}

export default MapNumberPage;