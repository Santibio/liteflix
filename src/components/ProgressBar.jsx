import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {  Typography } from '@mui/material';

const ProgressBar = ({hasError, setIsProgressbarOpen, setProgress, progress})=> {
 
  const [state, setState] = useState("loading");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 25));
    }, 500);
    if(hasError){
        setState("error")
        setProgress(100)
        clearInterval(timer);
    }
    if(!hasError && progress>= 100){
        setState("success")
    }
    return () => {
      clearInterval(timer);
    };
  },[hasError, progress, setProgress]);

  let texts={}
  switch(state){
    case "loading": 
        texts={
            progressText: `Cargando: ${progress}%`,
            buttonText: `Cancelar`,
            buttonAction: ()=> setIsProgressbarOpen(false)
        }
        break
    case "error": 
        texts={
            progressText: `¡ERROR! no se pudo cargar la película`,
            buttonText: `Reintentar`,
            buttonAction: ()=> setIsProgressbarOpen(false)
        }
        break
    case "success": 
        texts={
            progressText: `${progress}% Cargado`,
            buttonText: `¡listo!`,
        }
        break
    default:
        break
  }

  return (
    <Box sx={{ width: '327px' }}>
    <Typography color="primary">
        {texts.progressText}
        </Typography>
      <LinearProgress variant="determinate" value={progress} color={hasError? "error" : "secondary"}/>
    <Typography color="primary" sx={{ float: "right", marginTop: "5px"}} onClick={texts.buttonAction}>{texts.buttonText}</Typography>
    </Box>
  );
}

export default ProgressBar
