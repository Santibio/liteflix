import React from 'react'
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../assets/images/avatar.webp'

const ProfilePicture = () => {
  return (
    <Avatar alt="Avatar" src={avatarImage} sx={{ float: {xs:'right',md: 'left'}}}/>
  )
}

export default ProfilePicture