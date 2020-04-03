import React from 'react';
import Classes from './FriendsColl.module.css';
import FriendsItem from './FriendsItem';

let FriendsCollect = (props) => {
    let newFriendsData = props.FriendsData.map( (e) => <FriendsItem  key = {e.id} names = {e.name} src = {e.src}/>);
    return (
        <div className = {Classes.block}>
            {newFriendsData}
        </div>
    )
}

export default FriendsCollect;