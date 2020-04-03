import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import withAuthRedirect from '../../../../Hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersComponent extends React.Component {
    render() {
        return (
            <div>
                <Users UserData = {this.props.UserData} DialogsData = {this.props.DialogsData}/>
            </div>
        )
    }
}

let getArrayforMap = (state) => {
    return {
        UserData: state.MessegesArray.UserData,
        DialogsData: state.MessegesArray.DialogsData,
    };
};

export default compose(
    connect(getArrayforMap),
    withAuthRedirect
)(UsersComponent)

