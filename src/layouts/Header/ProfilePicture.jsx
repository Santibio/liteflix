import React from 'react'
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../assets/images/avatar.webp'

const ProfilePicture = () => {
  return (
    <Avatar alt="Avatar" src={avatarImage} sx={{zIndex: "1500"}}/>
  )
}

export default ProfilePicture