import React from "react";
import { FileUploader } from "react-drag-drop-files";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styled from 'styled-components'
import { Typography } from "@mui/material";

const FileUploaderContainer = styled.div`
border: 2px dashed #fff;
width: 327px;
height: 81px;
display: flex;
justify-content: center;
align-items: center;
gap: .5rem;
margin: auto;

.attach-icon{
transform: rotate(-45deg)
}

.add-file-text{
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 4px;
text-align: left;

}
`

const fileTypes = ["JPG", "PNG"];

const DragDrop = ({handleChange, setHasError}) =>{

    const onTypeError = () => {
      setHasError(true)
    }
 
  return (
    <FileUploader 
    handleChange={handleChange} 
    name="file" 
    types={fileTypes}
    onTypeError={onTypeError} 
    >
      <FileUploaderContainer>
        <AttachFileIcon  color='primary' className="attach-icon"/>
        <Typography color='primary' className="add-file-text">
            Agrega un archivo
        </Typography>
      </FileUploaderContainer>
    </FileUploader>
  );
}

export default DragDrop;