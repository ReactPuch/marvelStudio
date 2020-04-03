import API from '../../Api/Api';
import { stopSubmit } from 'redux-form';

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <const>
const SET_USER_DATA = 'LoginAuthReducer/SET_USER_DATA';
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </const>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <initialStateArray>
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </initialStateArray>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <LoginAuthReducer>
let LoginAuthReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data,
            }
        default:
            return state;
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </LoginAuthReducer>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <ActionCreator>
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA,  data: {id, email, login, isAuth} });
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </ActionCreator>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <Thunk>
export let getLoginForHeaderThunkCreater = () => {
    return async (dispatch) => {
        let data = await API.localMeAPI.authloginMe();
            if (data.resultCode === 0) {
                dispatch( setAuthUserData(data.data.id, data.data.email, data.data.login, true) );
            }
    };
};

export let loginOnServerThunkCreater = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await API.localMeAPI.LoginMeOnServer(email, password, rememberMe)
            if (data.data.resultCode == 0) {
                 dispatch( getLoginForHeaderThunkCreater( )) 
            } else {
                let message = data.data.messages.length > 0 && data.data.messages[0];
                dispatch(stopSubmit("loginForm", {_error: message} ));
            }
    };
};

export let logoutOnServerThunkCreater = () => {
    return async (dispatch) => {
        let data = await API.localMeAPI.LogoutMeOnServer()
            if (data.data.resultCode === 0) {
                dispatch( setAuthUserData(null, null, null, false) );
            }
    };
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </Thunk>

export default LoginAuthReducer;
