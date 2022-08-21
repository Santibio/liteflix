 import React, { useState } from 'react'
 
 import Box from '@mui/material/Box';
 import SwipeableDrawer from '@mui/material/SwipeableDrawer';
 import List from '@mui/material/List';
 import ListItem from '@mui/material/ListItem';
 import ListItemButton from '@mui/material/ListItemButton';
 import ListItemIcon from '@mui/material/ListItemIcon';
 import ListItemText from '@mui/material/ListItemText';
 import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
 import NavbarButton from '../../components/UI/Buttons/NavbarButton'
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../store/addMovieModalSlice'
import useWindowSize from '../../hooks/useWindowSize';

const navbarOptions= ['inicio', 'series', 'películas', 'agregadas recientemente', 'populares', "mis películas", "mi lista"]

const Navbar = () => {
  const dispatch = useDispatch()
  const { width} = useWindowSize()

  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      dispatch(closeModal())
      return;
    }
  
    setOpen(state);
  };

  const boxWidth = width >= 900 ? 761 : 2500

  const list = () => (
    <Box
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width:  boxWidth, paddingLeft: {md: "2rem"} }}
    >
      <List sx={{ marginTop: {xs: "1rem", md:"2rem"}, zIndex: 2000 }}>
         <ListItem key={"1"} onClick={()=>dispatch(closeModal())} sx={{marginBottom: "2rem"}} >
             <NavbarButton  isOpen={open} show />
          </ListItem>
        {navbarOptions.map((text, index) => (
          <ListItem key={text} onClick={()=>dispatch(closeModal())} >
              <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
         <ListItem key={'add'} disablePadding>
            <ListItemButton onClick={()=>dispatch(openModal())}>
              <ListItemIcon sx={{minWidth: "30px"}}>
                <AddOutlinedIcon color="primary"/> 
              </ListItemIcon>
              <ListItemText primary={"Agregar Película"} primaryTypographyProps={{marginTop: "2px", fontWeight: "700"}}/>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
         <ListItem key={'closeSesion'} >
            <ListItemText primary={"Cerrar Sesión"} />
          </ListItem>
      </List>
       
    </Box>
  );

  return (

        <>
          <NavbarButton  setIsOpen={setOpen} isOpen={open} show={!open} onClick={()=> setOpen(!open)}/>
          <SwipeableDrawer
            anchor={width >= 900 ? 'right':'left'}
            open={open}
            onClose={toggleDrawer( false)}
            onOpen={toggleDrawer(true)}
            sx={{zIndex: "1300"}}
          >
            {list(width >= 900 ? 'right':'left')}
          </SwipeableDrawer>
    </>
  );
}

export default Navbar
