import React from 'react';
import Clases from './FriendsItem.module.css';
import UsersClear from './FriendsUsersClear';

let FriendsItes = ({UsersData}) => {
    let newFriendsItes = UsersData.map( (item, index) => <UsersClear key = {index} name = {item.name}
                        id = {item.id} src = { item.photos.small != null ? item.photos.small 
                        : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}/>);
    return (
        <div>
            <div className = {Clases.friends_title}>Friends:</div>
            <div className ={Clases.friends_block}>
                {newFriendsItes}
            </div>
        </div>
        
    )
}

export default FriendsItes;