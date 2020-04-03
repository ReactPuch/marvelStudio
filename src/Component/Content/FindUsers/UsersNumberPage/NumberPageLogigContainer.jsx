import React from 'react';
import { connect } from 'react-redux';
import { addUsersPageThunkCreator } from '../../../../Redux/Reducer/FindUsersDataReducer';
import MapNumberPage from './MapNumberPage/MapNumberPage';
import SelectorForState from '../../../../Redux/Reducer/SelectorForState/SelectorForState';

class NumberPage extends React.Component {
    newUsersPage = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.addUsersPageThunkCreator(pageNumber, pageSize)
    }
    render () {
        let {totalUsersCount, pageSize, currentPage, isFetching} = this.props;
        return(
            <div>
                <MapNumberPage totalUsersCount = {totalUsersCount} pageSize = {pageSize} currentPage = {currentPage} 
                               newUsersPage = {this.newUsersPage} isFetching = {isFetching}/>
            </div>
        )
    }
}

let mapStateNumberPage = (state) => {
    let getFindUsersData =  SelectorForState.getFindUsersData;
    return {
        pageSize: getFindUsersData.getPageSize(state),
        totalUsersCount: getFindUsersData.getTotalUsersCount(state),
        currentPage: getFindUsersData.getCurrentPage(state),
        isFetching: getFindUsersData.getIsFetching(state)
    }
}

export default connect(mapStateNumberPage, { addUsersPageThunkCreator })(NumberPage)

