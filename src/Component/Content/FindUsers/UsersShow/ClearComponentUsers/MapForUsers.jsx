import React from 'react';
import Clases from '../ClearComponentUsers/User.module.css';
import { connect } from 'react-redux';
import { unFollowThunkCreator, followThunkCreator } from '../../../../../Redux/Reducer/FindUsersDataReducer';
import Users from './Users';

class MapForUsers extends React.Component {
    render () {
        let {UsersData, toggleForFollow, unFollowThunkCreator, followThunkCreator} = this.props;
        let showMapUsers = UsersData 
        .map( u => <Users key = {u.id} name = {u.name} status = {u.status}  country = {"u.location.country"} city = {"u.location.city"} 
                          src = { u.photos.small != null ? u.photos.small : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}
                          id = {u.id} followed = {u.followed ? 
                          <button disabled = { toggleForFollow.some( id => id === u.id)} className = {Clases.users_section_btn} 
                           onClick = { () => { unFollowThunkCreator(u.id) }}>unFollow</button>

                        : <button disabled = { toggleForFollow.some( id => id === u.id)} className = {Clases.users_section_btn} 
                           onClick = { () => { followThunkCreator(u.id) }}>Follow</button>}/>); 
        return (
            <div>
                {showMapUsers}
            </div>
        )
    }
    
}

let getDataForUsers = (state) => {
    return {
        UsersData: state.FindUsersData.UsersData,
        toggleForFollow: state.FindUsersData.toggleForFollow
    };
};

export default connect(getDataForUsers, { unFollowThunkCreator, followThunkCreator })(MapForUsers);