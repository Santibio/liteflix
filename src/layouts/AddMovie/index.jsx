import React, { useState } from 'react'
import { Dialog, FormControl, Input, styled, Slide, Typography } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux'
import { closeModal } from '../../store/addMovieModalSlice'
import MainButton from '../../components/UI/Buttons/Button';
import { Box, Stack } from '@mui/system';
import DragDrop from '../../components/DragDrop';
import ProgressBar from '../../components/ProgressBar';
import { getuserMovies } from '../../store/userMoviesSlice';

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
    const newMovie = {picture: file, title}
    const moviesImages =  JSON.parse(localStorage.getItem("userMovies" ))
        if(!Array.isArray(moviesImages)){
          localStorage.setItem("userMovies", JSON.stringify([newMovie]))
        }else{
           localStorage.setItem("userMovies", JSON.stringify([...moviesImages,newMovie]))
        }

    setSuccess(true)
     dispatch(getuserMovies())

  }

  return (
    <Dialog
        fullScreen
        open={isOpen}
        onClose={()=>dispatch(closeModal())}
        TransitionComponent={Transition}
      >
        <Box  
        sx={{
        paddingTop: "9rem",
        width: "100%",
        height: "100%",
        backgroundColor: 'primary.dark',
      }}>
       <Stack  spacing={12} alignItems="center">
        {!isSuccess? 
        <>
        <Typography color="secondary" >Agregar Pelicula</Typography>
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
             <MainButton variant="outlined" onClick={restartValues}>Salir</MainButton>
             </Stack>
             </> : 
             <>
               <Typography color="primary" >¡Felicitaciones!</Typography>
               <Typography color="primary" >{`${title} fue correctamente subida.`}</Typography>
                <MainButton 
             disabled={!file || !title.trim().length || progress < 100} 
             custombg="#FFF" 
             customcolortext="#000" 
             variant="contained" 
            onClick={restartValues}>Ir a home</MainButton>
             </>
             }
          
        </Stack>
       
       
      </Box>
      </Dialog>
  )
}

export default AddMovie