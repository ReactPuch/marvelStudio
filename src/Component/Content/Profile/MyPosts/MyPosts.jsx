import React from 'react';
import ClassesMyPosts from './MyPosts.module.css';
import Comment from "./../Comment/Comment";
import MyPostsFormTextArea from './MyPostsFormTextArea';

let MyPosts = (props) => {
    let newMessegesData = props.MessegesData                                                 
        .map( (e, index) => <Comment  messedge = {e.messeges} likeCount = {e.likeCount} key = {index}/>);
    
    let onAppPosts = (value) => {
            props.addCommentsActionCreator(value.newComentPosts);
        };
    return (
      <div className = "content">
        <div className = {ClassesMyPosts.form}>
            <h2 className = {ClassesMyPosts.formTitle}>My posts</h2>
            <div className = {ClassesMyPosts.form_block}>
                <MyPostsFormTextArea onSubmit = {onAppPosts}/>
            </div>
            {newMessegesData}
        </div>
      </div>
    )
}

export default MyPosts;
