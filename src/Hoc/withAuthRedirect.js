import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let getOfStateForAuthRedirect = (state) => {
    return {
        isAuth: state.LoginAuthReducer.isAuth
    };
};

let withAuthRedirect = (Component) => {
    class RedidectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) return (<Redirect to = {'/login'}/>)
            return <Component {...this.props}/>
        }
    }
    let ComponentAuthRedirectComponent = connect(getOfStateForAuthRedirect)(RedidectContainer);
    return ComponentAuthRedirectComponent;
};

export default withAuthRedirect;