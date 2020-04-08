import API from '../../Api/Api';
import { stopSubmit } from 'redux-form';

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <const>
const SET_USER_DATA = 'LoginAuthReducer/SET_USER_DATA',
      SET_CAPTCHA_URL_SUCCESE = 'LoginAuthReducer/SET_CAPTCHA_URL_SUCCESE';
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </const>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <initialStateArray>
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </initialStateArray>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <LoginAuthReducer>
let LoginAuthReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESE:
            return {
                ...state, 
                ...action.payload,
            };   
        default:
            return state;
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </LoginAuthReducer>

///////////////////////////////////////////////////////////////////////////////////////////////////////////  <ActionCreator>
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA,  payload: {id, email, login, isAuth} });
export const setCaptpchaUrlSuccese = (captchaUrl) => ({ type: SET_CAPTCHA_URL_SUCCESE, payload: {captchaUrl}});
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

export let loginOnServerThunkCreater = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await API.localMeAPI.LoginMeOnServer(email, password, rememberMe, captcha);
            if (data.data.resultCode == 0) {
                 dispatch( getLoginForHeaderThunkCreater( ));
            } else {
                if (data.data.resultCode === 10) {
                     dispatch(getCaptchaUrlThunkCreater());
                }
                let message = data.data.messages.length > 0 && data.data.messages[0];
                dispatch(stopSubmit("loginForm", {_error: message} ));
            }
    };
};

export let logoutOnServerThunkCreater = () => {
    return async (dispatch) => {
        let data = await API.localMeAPI.LogoutMeOnServer();
            if (data.data.resultCode === 0) {
                dispatch( setAuthUserData(null, null, null, false) );
            }
    };
};

export let getCaptchaUrlThunkCreater = ()  => {
    return async (dispatch) => {
        let response = await API.localMeAPI.getCaptchaUrl();
        let captchaUrl = response.data.url;
            dispatch(setCaptpchaUrlSuccese(captchaUrl));
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////  </Thunk>

export default LoginAuthReducer;
