import React from 'react';
import Clases from './Avatar.module.css';
import StatusContainerWithHooks from '../Status/StatusComtainerWithHooks';

let Avatar = ({profile, youtube}) => {
   if (!profile) {
       return (<h1>NaN</h1>)
   }
    return (
        <div className = {Clases.avatar}>
            <div className = {Clases.avatar_img}>
                <img src = {profile.photos.large !== null ? profile.photos.large : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}/>
            </div>
            <div className = {Clases.avata_block_info}>
                <div className = {Clases.avatar_info}>
                    <div className = {Clases.avatar_title}>Avatar</div>
                    <StatusContainerWithHooks/>
                    <div className = {Clases.avatar_text}>fullName: <span> {profile.fullName}</span></div>
                    <div className = {Clases.avatar_text}>lookingForAJobDescription: <span> {profile.lookingForAJobDescription}</span></div>
                    <div className = {Clases.avatar_text}>lookingForAJob: <span> {profile.lookingForAJob}</span></div>
                    <div className = {Clases.avatar_text}>aboutMe: <span> {profile.aboutMe}</span></div>
                        <div className = {Clases.avatar_web}>
                            <div className = {Clases.avatar_text}>Web Site:</div>
                                <span>facebook: <a>"facebook.com"</a></span>
                            <br/>
                                <span>website: <a>{profile.contacts.website != null ? profile.contacts.website : " "}</a></span>
                            <br/>
                                <span>vk: <a>{profile.contacts.vk != null ? profile.contacts.vk : " "}</a></span>
                            <br/>
                                <span>twitter: <a>{profile.contacts.twitter != null ? profile.contacts.twitter : " "}</a></span>
                            <br/>
                                <span>instagram: <a>{profile.contacts.instagram != null ? profile.contacts.instagram : " "}</a></span>
                            <br/>
                                <span>youtube: <a>{youtube != null ? youtube : " "}</a></span>
                            <br/>
                                <span>github: <a>{profile.contacts.github != null ? profile.contacts.github : " "}</a></span>
                            <br/>
                                <span>mainLink: <a>{profile.contacts.mainLink != null ? profile.contacts.mainLink : " "}</a></span>
                            <br/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Avatar;