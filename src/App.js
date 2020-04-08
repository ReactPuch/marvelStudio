import React from 'react';
import './App.css';
import HeaderComponent from './Component/Header/HeaderComponent';
import NavMenu from './Component/NavMenu/NavMenu';
import News from './Component/Content/News/mainNews';
import Music from './Component/Content/Music/mainMusic';
import Settings from './Component/Content/Settings/mainSettings';
import LoginFormContainer from './Component/Content/Login/LoginFormContainer';
import { Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { initializedThunkCreater } from './Redux/Reducer/AppReducer';
import { compose } from 'redux';
import SelectorForState from './Redux/Reducer/SelectorForState/SelectorForState';

const UsersComponent = React.lazy( () => import ('./Component/Content/Messeges/User/UserContainer')),
      ProfileContainer = React.lazy( () => import('./Component/Content/Profile/mainProfileComtainer')),
      UsersAndPageMain = React.lazy( () => import('./Component/Content/FindUsers/UsersAndPageMain'));

class App extends React.Component { 
    componentDidMount() {
        this.props.initializedThunkCreater();
    }
    render() {
        return (
            <div className = "container">
                <HeaderComponent/>
                <NavMenu/>
                <div className = "menu-content">
                    <Route path = '/profile/:userId?' render = {() => (
                        <React.Suspense fallback = {<img src = "https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif"/>}>
                            <ProfileContainer/>
                        </React.Suspense>)}/>
                    <Route path = '/messeges' render = {() => (
                        <React.Suspense fallback = {<img src = "https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif"/>}>
                            <UsersComponent/>    
                        </React.Suspense>)}/>                          
                    <Route path = '/news' render = {() => <News/>}/>
                    <Route path = '/music' render = {() => <Music/>}/>
                    <Route path = '/findUsers' render = {() => (
                        <React.Suspense fallback = {<img src = "https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif"/>}>
                            <UsersAndPageMain/>
                        </React.Suspense>)}/>
                    <Route path = '/settings' render = {() => <Settings/>}/>
                    <Route path = '/login' render = {() => <LoginFormContainer/>}/>
                </div>
            </div>
      )
    }
}

let getStateForApp = (state) => {
    return {
        initialized: SelectorForState.getAppReducer.getInitialized(state)
    }
}
export default compose(
    connect(getStateForApp, { initializedThunkCreater }),
    withRouter
)(App);

