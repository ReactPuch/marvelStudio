import React from 'react';
import LoginMain from './LoginMain';
import { connect } from 'react-redux';
import { loginOnServerThunkCreater } from '../../../Redux/Reducer/LoginAythReducer';

class LoginFormContainer extends React.Component {
    render() {
        let {isAuth, loginOnServerThunkCreater} = this.props;
        return (
            <div>
                <LoginMain isAuth = {isAuth} loginOnServerThunkCreater = {loginOnServerThunkCreater} captchaUrl = {this.props.captchaUrl}/>
            </div>
        )
    }
}

let getStateForLigin = (state) => {
    return {
        isAuth: state.LoginAuthReducer.isAuth,
        captchaUrl: state.LoginAuthReducer.captchaUrl
    }
}

export default connect(getStateForLigin, {loginOnServerThunkCreater})(LoginFormContainer);