import React from 'react';
import { createSelector } from 'reselect';

const SelectorForState = {
    getAppReducer: {
        getInitialized:(state) => {
            return state.AppReducer.initialized;
        }
    },
    getLoginAythReducer: {  
        getId:(state) => {
            return state.LoginAuthReducer.id;
        },
        getLogin:(state) => {
            return state.LoginAuthReducer.login;
        },
        getEmail:(state) => {
            return state.LoginAuthReducer.email;
        },
        getisAuth:(state) => {
            return state.LoginAuthReducer.isAuth;
        }  
    },
    getFindUsersData: {
        getPageSize:(state) => {
            return state.FindUsersData.pageSize;
        },
        getTotalUsersCount:(state) => {
            return state.FindUsersData.totalUsersCount;
        },
        getCurrentPage:(state) => {
            return state.FindUsersData.currentPage;
        },
        getIsFetching:(state) => {
            return state.FindUsersData.isFetching;
        }
    }
};

export default SelectorForState;