import React, { useState } from 'react'
import { Dialog, FormControl, Input, styled, Slide, Typography } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux'
import { closeModal } from '../../store/addMovieModalSlice'
import MainButton from '../../components/UI/Buttons/Button';
import { Box, Stack } from '@mui/system';
import DragDrop from '../../components/DragDrop';
import ProgressBar from '../../components/ProgressBar';
import { getuserMovies } from '../../store/userMoviesSlice';
import toast, { Toaster } from 'react-hot-toast';
import useWindowSize from '../../hooks/useWindowSize';
import CloseIcon from '@mui/icons-material/Close';
import Title from '../Header/Title';
import IconButton from '@mui/material/IconButton';
import RenderIf from '../../components/RenderIf';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomInput = styled(Input)`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  border-bottom: 1px solid #fff;
  width: 248px;
  transition: border-bottom 250ms ease;
  padding-bottom: 5px;
  & ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 4px;
    text-align: center;
  }
`
const AddMovie = () => {
  const dispatch = useDispatch()
  const {width } = useWindowSize()
  const {isOpen} = useSelector((state) => state.addMovieModal)

  const [title,setTitle] = useState("")
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isSuccess, setSuccess] = useState(false);


  const [hasError, setHasError] = useState(false);
  const [isProgressbarOpen, setIsProgressbarOpen] = useState(false)


  const restartValues = () =>{
    setTitle('')
    setFile(null)
    setProgress(0)
    setSuccess(false)
    setIsProgressbarOpen(false)
    dispatch(closeModal())
  }



  const handleChange = (file) => {

    try{
      setIsProgressbarOpen(true)
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        const movieFile = reader.result
       
      setFile(movieFile)
    };

     reader.onerror = function (error) {
     console.log('Error: ', error);
   };
      setHasError(false)
    }catch(e){
      setHasError(true)
    }
  };

  const handleInputTitle = (event=>{
    const titleValue = event.target.value
    setTitle(titleValue)
  })

  const handleSubmit = ()=>{
    try{
      const newMovie = {picture: file, title}
      const moviesImages =  JSON.parse(localStorage.getItem("userMovies" ))
          if(!Array.isArray(moviesImages)){
            localStorage.setItem("userMovies", JSON.stringify([newMovie]))
          }else{
             localStorage.setItem("userMovies", JSON.stringify([...moviesImages,newMovie]))
          }
  
      setSuccess(true)
      dispatch(getuserMovies())

    } catch(e){
      restartValues()
      toast.error(e.message)
    }

  }

  return (
    <>
    <Dialog
        fullScreen={width>= 900 ? false : true}
        open={isOpen}
        onClose={()=>dispatch(closeModal())}
        TransitionComponent={Transition}
        maxWidth={'md'}
        >
        <Box  
        sx={{
          width: {md:"730px"},
          height: {xs: "100vh", md:"440px"},
          backgroundColor: 'primary.dark',
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center',
          padding: "1rem"
        }}>
       <Stack  spacing={{xs:12, md: 5}} alignItems="center" sx={{width: "100%"}}>
        {!isSuccess? 
        <>
        <Typography color="secondary" variant='h5'>Agregar Película</Typography>
          {isProgressbarOpen ?  
          <ProgressBar
          hasError={hasError} 
          setIsProgressbarOpen={setIsProgressbarOpen}
          progress={progress}
          setProgress={setProgress}
          />
          : <DragDrop handleChange={handleChange} setHasError={setHasError} /> 
        }
         
          <FormControl variant="standard">
             <CustomInput 
             placeholder='Título' 
             inputlabelprops={{
               style: { color: '#fff', textAlign: "center" } }}
               value={title} 
               onChange={handleInputTitle} 
               />
           </FormControl>
           <Stack textAlign="center" spacing={3} alignItems="center">
             <MainButton 
             disabled={!file || !title.trim().length || progress < 100} 
             custombg="#FFF" 
             customcolortext="#000" 
             variant="contained" 
             onClick={handleSubmit}>Subir Pelicula</MainButton>
             <RenderIf isTrue={width <= 900}>
              <MainButton variant="outlined" onClick={restartValues}>Salir</MainButton>
             </RenderIf>
             </Stack>
             </> : 
             <>
              <RenderIf isTrue={width >= 900}>
                <Title/>
              </RenderIf>
              <Typography color="primary" variant="h4">¡Felicitaciones!</Typography>
               <Typography color="primary" variant='h6' textAlign="center" >{`${title} fue correctamente subida.`}</Typography>
              <MainButton 
                 disabled={!file || !title.trim().length || progress < 100} 
                 custombg="#FFF" 
                 customcolortext="#000" 
                 variant="contained" 
                 onClick={restartValues}>
                   Ir a home
               </MainButton>
             </>
             }
          
        </Stack>
      </Box>
         {width >= 900 && 
         <IconButton  onClick={restartValues} sx={{ position: 'absolute', right: "1rem", top: "1rem"}}>
          <CloseIcon color="primary"/>
        </IconButton>}
      </Dialog>
      <Toaster/>
            </>
      
  )
}

export default AddMovie