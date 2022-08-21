import  React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import { Slide, Typography } from '@mui/material';
import { useState } from 'react';
import styledComponent from 'styled-components'
import useWindowSize from '../../../hooks/useWindowSize';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledMenuSmall = styled((props) =>(
  <Menu
    elevation={0}
    TransitionComponent={Transition}
    
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    left: "0 !important",
    bottom: "0vh !important",
    top: "auto !important",
    heigth: "200px",
    borderRadius: 0,
    backgroundColor: "#242424",
    marginTop: theme.spacing(2),
    minWidth: "100%",
    color: "#fff",
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: "#fff",
      },
      '&:active': {
        backgroundColor: theme.palette.text.secondary,
        color: "#fff"

      },
    },
  },
}));

const StyledMenuLarge = styled((props) =>(
  <Menu
    elevation={0}
   
     anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    heigth: "200px",
    borderRadius: 0,
    backgroundColor: "#242424",
    marginTop: theme.spacing(1),
    minWidth: "241px",
    color: "#fff",
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: "#fff",
      },
      '&:active': {
        backgroundColor: theme.palette.text.secondary,
        color: "#fff"

      },
    },
  },
}));

const ViewText = styledComponent.span`
font-size: 18px;
font-weight: 400;
line-height: 18px;
letter-spacing: 4px;
text-align: center;
`
const OptionText = styledComponent.span`
font-size: 18px;
font-weight: 700;
line-height: 18px;
letter-spacing: 4px;
text-align: center;
`


export default function CustomizedMenus({setSelectedIndex, selectedIndex, viewOptions}) {
  const { width} = useWindowSize()
  const [anchorEl, setAnchorEl] = useState(null);

  
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick  = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

   const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{marginBottom: "1rem"}}
      >
        <ViewText>Ver:</ViewText>
        <OptionText>{viewOptions[selectedIndex]}</OptionText>
      </Button>
      {width >= 900 ? <StyledMenuLarge
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
        {viewOptions.map((option, index)=> <MenuItem 
        key={option}
        onClick={(event) => handleMenuItemClick(event, index)} 
        disableRipple
        sx={{justifyContent:'space-between'}}>
          <Typography>{option}</Typography>
          {index === selectedIndex && <Check />}
        </MenuItem>)}
       
      </StyledMenuLarge>
      : <StyledMenuSmall
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
        {viewOptions.map((option, index)=> <MenuItem 
        key={option}
        onClick={(event) => handleMenuItemClick(event, index)} 
        disableRipple
        sx={{justifyContent:'space-between'}}>
          <Typography>{option}</Typography>
          {index === selectedIndex && <Check />}
        </MenuItem>)}
       
      </StyledMenuSmall>}
     
     
      
        
    </div>
  );
}
