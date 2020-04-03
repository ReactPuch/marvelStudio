import API from '../../Api/Api';
import FindUsersReducerHelper from './ObjHelperForReducer/FindUsersReducerHelper';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <const>
const FOLLOW = "FindUsersReducer/FOLLOW",
      UNFOLLOW = "FindUsersReducer/UNFOLLOW",
      SET_USERS = 'FindUsersReducer/SET_USERS',
      SET_CURRENT_PAGE = 'FindUsersReducer/SET_CURRENT_PAGE',
      TOGGLE_IS_FETCHING = 'FindUsersReducer/TOGGLE_IS_FETCHING',
      TOGGLE_FOR_FOLLOW = 'FindUsersReducer/TOGGLE_FOR_FOLLOW';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </const>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// <initialStateArray>
let initialState = {
    UsersData: [],  
    pageSize: 5,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: true,
    toggleForFollow: []
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </initialStateArray>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <Reducer>
let FindUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                UsersData: FindUsersReducerHelper(state.UsersData, "id", action.userId, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                UsersData: FindUsersReducerHelper(state.UsersData, "id", action.userId, {followed: false})
            };
        case SET_USERS: 
            return {
                ...state,
                UsersData: action.users
                
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOR_FOLLOW:
            return {
                ...state,
                toggleForFollow: action.toggleForFollow ?
                                    [...state.toggleForFollow, action.userId] 
                                  : state.toggleForFollow.filter( id => id != action.userId)
            };
        default:
            return state;
    }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </Reducer>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <ActionCreater>
export let followActionCreater = (userId) => ({ type: FOLLOW, userId });
export let ounFollowActionCreater = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersActionCreater = (users) => ({ type: SET_USERS, users });
export let setCurrentPageActionCreater = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let toggleIsFetchingActionCreater = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export let toggleForFollowAC = (toggleForFollow, userId) => ({ type: TOGGLE_FOR_FOLLOW,  toggleForFollow, userId });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </ActionCreater>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <Thunk>
let folowUnfolowFlow = async (dispatch, userId, usersAPI, actionCreater) => {
    dispatch( toggleForFollowAC(true, userId) );
    let data = await usersAPI;

    if (data.resultCode == 0) {
        dispatch( actionCreater(userId) ) 
    }
    dispatch( toggleForFollowAC(false, userId) ) 
}

export let followThunkCreator = (userId) => {
    return async (dispatch) => {
        debugger;
        folowUnfolowFlow(dispatch, userId,  API.usersAPI.getUsersFollow(userId), followActionCreater);
    }
}

export let unFollowThunkCreator = (userId) => {
    return async (dispatch) => {
        folowUnfolowFlow( dispatch, userId, API.usersAPI.getUsersUnFollow(userId), ounFollowActionCreater )    
    }
}

let UsersAndPageFlow = async (dispatch, currentPage, pageSize) => {
    dispatch(toggleIsFetchingActionCreater(true));
    let data = await API.usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingActionCreater(false));
    dispatch(setUsersActionCreater(data.items)); 
}

export let addUsersThunkCreator = (currentPage, pageSize) => { 
    return (dispatch) => {
        UsersAndPageFlow(dispatch, currentPage, pageSize)
    }
}

export let addUsersPageThunkCreator = (currentPage, pageSize) => { 
    return (dispatch) => {
        dispatch(setCurrentPageActionCreater(currentPage))
        UsersAndPageFlow(dispatch, currentPage, pageSize)
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </Thunk>

export default FindUsersReducer;
