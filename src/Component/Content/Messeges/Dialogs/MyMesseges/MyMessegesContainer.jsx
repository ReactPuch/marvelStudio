import React from 'react';
import { addDialogssActionCreator } from '../../../../../Redux/Reducer/MessegesArrayReducer';
import MyMesseges from './MyMesseges';
import { connect } from 'react-redux';

let mapStateToDialogs = (state) => {
    return {
        MessegesTextarea: state.MessegesArray.MessegesTextarea
    };
};

let MyMessegesContainer = connect(mapStateToDialogs, { addDialogssActionCreator })(MyMesseges);

export default MyMessegesContainer;