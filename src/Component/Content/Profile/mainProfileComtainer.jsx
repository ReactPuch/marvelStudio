import React from 'react';
import { connect } from 'react-redux';
import { getUsersProfileThunkCreater, getStatusThunkCreater, savePhotoThunkCreater, saveDataForProfileThunkCreater } from '../../../Redux/Reducer/ProfieArrayReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../../Hoc/withAuthRedirect';
import MainAvatar from './Avatar/MainAvatar';

class ProfileContainer extends React.Component {
    
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getUsersProfileThunkCreater(userId);
        this.props.getStatusThunkCreater(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        } 
    }
    render () {
        return (
            <div>
               <MainAvatar profile = {this.props.profile} isOwner = {!this.props.match.params.userId} 
                savePhotoThunkCreater = {this.props.savePhotoThunkCreater} saveDataForProfileThunkCreater = {this.props.saveDataForProfileThunkCreater}/>
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
    connect(mapStateToPrifile, { getUsersProfileThunkCreater, getStatusThunkCreater, savePhotoThunkCreater, saveDataForProfileThunkCreater }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


