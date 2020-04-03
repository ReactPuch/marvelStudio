import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './Reducer/ProfieArrayReducer';
import messegesReducer from './Reducer/MessegesArrayReducer';
import friendsReducer from './Reducer/FriendsDataReducer';
import findUsersReducer from './Reducer/FindUsersDataReducer';
import loginAuthReducer from './Reducer/LoginAythReducer';
import appReducer from '../Redux/Reducer/AppReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as fromReducer } from 'redux-form';

let redusers = combineReducers({
    ProfieArray: profileReducer,
    MessegesArray: messegesReducer,
    FriendsData: friendsReducer,
    FindUsersData: findUsersReducer,
    LoginAuthReducer: loginAuthReducer,
    AppReducer: appReducer,
    form: fromReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers( applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;