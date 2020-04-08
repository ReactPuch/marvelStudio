import React from 'react';
import { connect } from 'react-redux';
import { addUsersThunkCreator } from './../../../Redux/Reducer/FindUsersDataReducer';
import { compose } from 'redux';
import withAuthRedirect from '../../../Hoc/withAuthRedirect';
import FriendsItes from './FriendsItes';

class FriendsContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.addUsersThunkCreator(currentPage,pageSize);
    }
    render() {
        return (
            <div>
                <FriendsItes UsersData = {this.props.UsersData}/>
            </div>
        )
    }
}


let getArrayForFriends = (state) => {
    return {
        currentPage: state.FindUsersData.currentPage,
        pageSize: state.FindUsersData.pageSize,
        UsersData: state.FindUsersData.UsersData,
    };
};

export default compose (
    connect(getArrayForFriends, {addUsersThunkCreator}),
    withAuthRedirect
)(FriendsContainer);
