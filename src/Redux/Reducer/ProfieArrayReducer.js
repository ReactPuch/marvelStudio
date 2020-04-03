import API from '../../Api/Api';
////////////////////////////////////////////////////////////////////////////////////////  <const>
const ADD_COMMENTS = "profileReducer/ADD_COMMENTS",
      SET_USERS_PROFILE = 'profileReducer/SET_USERS_PROFILE',
      SET_STATUS = 'profileReducer/SET_STATUS',
      DELETE_COMMENTS = 'profileReducer/DELETE_COMMENTS';
////////////////////////////////////////////////////////////////////////////////////////  </const>

////////////////////////////////////////////////////////////////////////////////////////  <initialStateArray>
let initialState = {
    MessegesData: [                                                             
        {messeges: "hellow how are you?", id: 1, likeCount: 15 },
        {messeges: "Hellow i am fine. How are you?", id: 2, likeCount: 10 }
    ],
    profile: null,
    status: ""
};
////////////////////////////////////////////////////////////////////////////////////////  </initialStateArray>

////////////////////////////////////////////////////////////////////////////////////////  <profileReducer>
const profileReducer = ( state = initialState, action ) => {
    let copyState;
    switch(action.type) {
        case ADD_COMMENTS:
            let newComments = action.newComentPosts;
            return {                                                                     
                ...state,
                MessegesData: [...state.MessegesData, {messeges: newComments}],                                                       
            };                                                                                                                   
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_COMMENTS:
            return {
                ...state,
                MessegesData: state.MessegesData.filter( p => p.id != action.userId)
            }                                                          
        default:
            return state;                                                                                                                                                 
    }                                                                     
};
////////////////////////////////////////////////////////////////////////////////////////  </profileReducer>

////////////////////////////////////////////////////////////////////////////////////////  <ActionCreator>
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const addCommentsActionCreator = (newComentPosts) => ({ type: ADD_COMMENTS, newComentPosts });
export const setStatusAC = (status) => ({ type: SET_STATUS, status});
export const deleteCommentAC = (userId) => ({ type: DELETE_COMMENTS, userId });
////////////////////////////////////////////////////////////////////////////////////////  </ActionCreator>

////////////////////////////////////////////////////////////////////////////////////////  <Thunk>
export let getUsersProfileThunkCreater = (userId) => {
    return async (dispatch) => {
            let data = await API.usersAPI.getUsersProfile(userId);
                dispatch( setUsersProfile(data) );
    };
};

export let getStatusThunkCreater = (userId) => {
    return async (dispatch) => {
        let data = await API.profileSratusAPI.getStatus(userId);
            dispatch( setStatusAC(data) );
    };
};

export let updateStatusThunkCreater = (status) => {
    return async (dispatch) => {
        let data = await API.profileSratusAPI.updateStatus(status);
            if ( data.resultCode === 0 ) {
                dispatch(setStatusAC(status));
            }
    };
}
////////////////////////////////////////////////////////////////////////////////////////  </Thunk>

export default profileReducer;