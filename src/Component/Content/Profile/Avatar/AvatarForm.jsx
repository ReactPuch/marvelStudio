import React from 'react';
import Clases from './Avatar.module.css';
import StatusComtainerWithHooks from '../Status/StatusComtainerWithHooks';
import Form from '../../../../Validation/FormError/CheckErrorForm';
import { reduxForm } from 'redux-form';



let AvatarForm = ({ profile, handleSubmit, isOwner, savePhotoThunkCreater, error }) => {
    let meinPhotoSelected = e => {
        if (e.target.files.length) {
           savePhotoThunkCreater(e.target.files[0]);
        }
      };
    return (    
        <form className = {Clases.avatar} onSubmit = {handleSubmit}>
            <div className = {Clases.avatar_img}>
                <img src = {profile.photos !== null ? profile.photos.large : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"}/>
                {isOwner && <input name = {'file'} type = {'file'} className = {Clases.avatar_btn_img} onChange = {meinPhotoSelected}/> }
            </div>
            <div className = {Clases.avata_block_info}>
                <div className = {Clases.avatar_info}>
                    <div className = {Clases.avatar_title}>Avatar</div>
                        <StatusComtainerWithHooks/>  
                    <div className = {Clases.avatar_text}>FullName:
                        {Form.Field( [], 'fullName', Form.Input, 'Full name' )}
                    </div>
                    <div className = {Clases.avatar_text}>LookingForAJob:
                        <div className = {Clases.avatar_checkbox}> {Form.Field( [], 'lookingForAJob', Form.Input, '', {type: 'checkbox'} )}</div>
                    </div>
                    <div className = {Clases.avatar_text}>My skills:
                        {Form.Field( [], 'lookingForAJobDescription', Form.Textarea, 'My skills' )}
                    </div>
                    <div className = {Clases.avatar_text}>AboutMe: 
                        {Form.Field( [], 'aboutMe', Form.Textarea, 'aboutMe' )}
                    </div>
                    <div className = {Clases.avatar_web}>
                    <div className = {Clases.avatar_text}>Web Site:</div>
                    {error && <div className = {Clases.avatar_form_error}> 
                              <img className = {Clases.avatar_error_img} src = "https://cdn4.iconfinder.com/data/icons/smiley-vol-3/48/134-512.png"/>
                              <span>{error}</span> </div> }      
                        {Object.keys(profile.contacts).map( (key, index) => {
                            return <div className = {Clases.avatar_input_webSide} key = {index}>
                                        <span>{key}: </span> {Form.Field( [], `contacts.${key}`, Form.Input, key )}
                                   </div>
                        })}
                    </div>
                </div>
            <button className = {Clases.avatar_edit}>SAVE</button>
            </div>
        </form>
    )
}


let AvatarFormRedux = reduxForm({form: 'edit_profile'})(AvatarForm)

export default AvatarFormRedux;