import React from 'react';
import { connect } from 'react-redux';
import FriendsCollect from "./FriendsCollect";

let getArrayForFriends = (state) => {
    return {
        FriendsData: state.FriendsData.ArrayFriends
    };
};

let FriendsConteiner = connect(getArrayForFriends)(FriendsCollect);

export default FriendsConteiner;