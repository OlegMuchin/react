import React from 'react';
import "./ProfilePicture.css"

function ProfilePicture({picture,...props}) {
    return (
        <span className='ProfilePicture'>
            <img src = {picture} alt='break'/>  
        </span>
    );
}

export default ProfilePicture;