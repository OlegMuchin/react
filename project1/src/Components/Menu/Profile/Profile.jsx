import React from 'react';
import ProfilePicture from '../../UI/ProfilePicture/ProfilePicture';
import "./Profile.css"

function Profile({picture, nick,...props}) {
    return (
        <div className='profile'>
            <ProfilePicture picture = {picture}/>
            <h5 className='nickname'>{nick}</h5>
        </div>
    );
}

export default Profile;