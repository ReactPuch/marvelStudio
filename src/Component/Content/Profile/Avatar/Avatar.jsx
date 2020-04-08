import React from 'react';
import Clases from './Avatar.module.css';
import StatusContainerWithHooks from '../Status/StatusComtainerWithHooks';
import ContactAvatar from './ContactAvatar';

let Avatar = ({profile, isOwner, goToEditMore}) => {
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
                    <div className = {Clases.avatar_text}>FullName: <span> {profile.fullName}</span></div>
                    <div className = {Clases.avatar_text}>LookingForAJob: <span> {profile.lookingForAJob ? 'yes' : 'no'}</span></div>
                    {profile.lookingForAJob && 
                        <div className = {Clases.avatar_text}>My skills: <span> {profile.lookingForAJobDescription}</span></div>}
                    <div className = {Clases.avatar_text}>AboutMe: <span> {profile.aboutMe}</span></div>
                    <div className = {Clases.avatar_web}>
                    <div className = {Clases.avatar_text}>Web Site:</div>
                        {Object.keys(profile.contacts).map( (key, index) => {
                            return <ContactAvatar key = {index} contacTitle = {key} contactValue = {profile.contacts[key]}/>
                        })}
                    </div>
                </div>
                { isOwner && <button onClick = {goToEditMore} className = {Clases.avatar_edit}>EDIT</button>}
            </div>
        </div>
    )
}

export default Avatar;