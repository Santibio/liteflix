 import React, { useState } from 'react'
 
 import Box from '@mui/material/Box';
 import SwipeableDrawer from '@mui/material/SwipeableDrawer';
 import List from '@mui/material/List';
 import Divider from '@mui/material/Divider';
 import ListItem from '@mui/material/ListItem';
 import ListItemButton from '@mui/material/ListItemButton';
 import ListItemIcon from '@mui/material/ListItemIcon';
 import ListItemText from '@mui/material/ListItemText';
 import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
 import NavbarButton from '../../components/UI/Buttons/NavbarButton'
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../store/addMovieModalSlice'

const navbarOptions= ['inicio', 'series', 'películas', 'agregadas recientemente', 'populares', "mis películas", "mi lista"]

const Navbar = () => {
  const dispatch = useDispatch()

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

  const list = () => (
    <Box
      sx={{ width: "100% !important" }}
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ marginTop: "4rem"}}>
        {navbarOptions.map((text, index) => (
          <ListItem key={text} >
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
          <NavbarButton  setIsOpen={setOpen} isOpen={open}/>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer( false)}
            onOpen={toggleDrawer(true)}
            sx={{zIndex: "1300"}}
          >
            {list("left")}
          </SwipeableDrawer>
    </>
  );
}

export default Navbar
