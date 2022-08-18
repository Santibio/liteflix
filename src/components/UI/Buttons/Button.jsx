import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)`
  background-color: #242424;
  color: #fff;
  height: 56px;
  width: 248px;
  border-radius: 0px;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 4px;
  text-align: left;
  .MuiButton-startIcon{
    margin-top: -3px;
  }
  :hover {
    background-color: #242424;
  }
`;

const MainButton = ({variant,children, startIcon, onClick}) => {
  return (
    <CustomButton variant={variant} startIcon={startIcon} onClick={onClick}>{children}</CustomButton>
  )
}

export default MainButton