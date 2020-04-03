import React from 'react';
import MyPostsComponent from './MyPosts/MyPostsComponent';
import Avatar from './Avatar/Avatar';
import Bg from './Bg/Bg';
import { connect } from 'react-redux';
import { getUsersProfileThunkCreater, getStatusThunkCreater } from '../../../Redux/Reducer/ProfieArrayReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../../Hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getUsersProfileThunkCreater(userId);
        this.props.getStatusThunkCreater(userId);
    }
    render () {
        return (
            <div>
                <Bg/>
                <Avatar profile = {this.props.profile}/>
                <MyPostsComponent/>
            </div>
        )
    }
}

let mapStateToPrifile = (state) => {
    return {
        profile: state.ProfieArray.profile,
        id: state.LoginAuthReducer.id
    }
} 

export default compose(
    connect(mapStateToPrifile, { getUsersProfileThunkCreater, getStatusThunkCreater }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


