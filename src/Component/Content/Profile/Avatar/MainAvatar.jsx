import React, {useState}  from 'react';
import Bg from '../Bg/Bg';
import AvatarFormRedux from './AvatarForm';
import Avatar from './Avatar';
import MyPostsComponent from '../MyPosts/MyPostsComponent';

let MainAvatar = ({profile, isOwner, savePhotoThunkCreater, saveDataForProfileThunkCreater}) => {
    let [editMore, setEditMore] = useState(false);
    let seveDataWithForm = (formData) => {
       saveDataForProfileThunkCreater(formData).then( () => {
        setEditMore(false);
       });
    };
    return (
        <div>
             <Bg/>
                { editMore ? <AvatarFormRedux savePhotoThunkCreater = {savePhotoThunkCreater} onSubmit = {seveDataWithForm} 
                              initialValues = {profile} profile = {profile} isOwner = {isOwner} /> : 
                             <Avatar profile = {profile} goToEditMore = { () => setEditMore(true)} isOwner = {isOwner} 
                                     />}
                <MyPostsComponent/>
        </div>

    )
}

export default MainAvatar;