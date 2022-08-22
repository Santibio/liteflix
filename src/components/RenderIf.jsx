import React from 'react'

const RenderIf = ({isTrue, children}) => {
  return (
    <>
        {isTrue? children : ''} 
    </>
  )
}

export default RenderIf