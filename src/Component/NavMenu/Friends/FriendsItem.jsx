import React from 'react';
import Classes from './FriendsItem.module.css';

let FriendsItem = (props) => {
    return (
        <div className = {Classes.friends_block}>
            <div className = {Classes.friends_item}>
                <div className = {Classes.friends_avatar}>
                    <img src = {props.src}/>
                </div>
                <div className = {Classes.friends_name}>
                    {props.names}
                </div>
            </div>
        </div>        
    )
}

export default FriendsItem;