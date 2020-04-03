import React from 'react';
import ClassComment from './Comment.module.css';

let Comment = (props) => {
    return (
        <div className = {ClassComment.comment}>
            <div className = {ClassComment.comment_user}>
                <img className = {ClassComment.comment_img} src = "https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_captain_america_marvel_hero-512.png"/>
                <div className = {ClassComment.comment_text}>
                    <div className = {ClassComment.comment_textUser}>
                        {props.messedge}
                    </div>
                    <div className = {ClassComment.comment_likeUser}>
                        <img className = {ClassComment.comment_likeImg} src="https://lh3.googleusercontent.com/LpvvlAS4rlooYLkCcMcSp6xikgs9gvcGULjkYRuHxgE-yZmY9hUH-9OIhiV6g5tmPg"/>
                        <span>{props.likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;