import React from 'react';
import Clases from './ClearComponentUsers/User.module.css';
import { connect } from 'react-redux';
import { addUsersThunkCreator } from '../../../../Redux/Reducer/FindUsersDataReducer';
import MapForUsers from './ClearComponentUsers/MapForUsers';
import withAuthRedirect from '../../../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class  UserLogigContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.addUsersThunkCreator(currentPage, pageSize);
    }
    render () {                
        return (
            <div>
                <h1 className = {Clases.users_title}>Users: </h1>
                {<MapForUsers/>}
            </div>
        )
    }
}

let mapStateToUsersData = (state) => {
    return {
        currentPage: state.FindUsersData.currentPage,
        pageSize: state.FindUsersData.pageSize,
    };
};

export default compose(
    connect(mapStateToUsersData,{ addUsersThunkCreator }),
    withAuthRedirect
)(UserLogigContainer)





