import React from 'react';
import UserLogigContainer from './UsersShow/UserLogigContainer';
import NumberPage from './UsersNumberPage/NumberPageLogigContainer';

let UsersAndPageMain = () => {
    return (
        <div>
            <UserLogigContainer/>
            <NumberPage/>
        </div>
    )
}

export default UsersAndPageMain