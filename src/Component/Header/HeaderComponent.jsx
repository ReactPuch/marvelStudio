import React from 'react';
import Clases from './Header.module.css';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutOnServerThunkCreater } from './../../Redux/Reducer/LoginAythReducer';
import SelectorForState from '../../Redux/Reducer/SelectorForState/SelectorForState';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class HeaderComponent extends React.Component {
    render() {
        return (
            <header className = {Clases.header}>
                <Header logout = {this.props.logoutOnServerThunkCreater} {...this.props}/>
            </header>
        )
    }
}

let mapStateToLogin = (state) => {
    return {
        isAuth: SelectorForState.getLoginAythReducer.getisAuth(state),
        login:  SelectorForState.getLoginAythReducer.getLogin(state)
    }
};

export default compose(
    connect(mapStateToLogin, { logoutOnServerThunkCreater }),
    withRouter
)(HeaderComponent)

    


