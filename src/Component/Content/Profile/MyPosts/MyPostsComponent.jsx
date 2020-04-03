import React from 'react';
import MyPosts from './MyPosts';
import { addCommentsActionCreator } from '../../../../Redux/Reducer/ProfieArrayReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        PostTextarea: state.ProfieArray.PostTextarea,
        MessegesData: state.ProfieArray.MessegesData
    };
};

let MyPostsComponent = connect(mapStateToProps, { addCommentsActionCreator })(MyPosts);

export default MyPostsComponent;