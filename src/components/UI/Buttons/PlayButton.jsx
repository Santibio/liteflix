
import React from 'react'

const PlayButton = ({width,height }) => {
  return (
    <svg width={width || "15"} height={height ||"20"} viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.9783 10.324L1.2002 1.59998V18.4L13.9783 10.324Z" stroke="white"/>
    </svg>
  )
}

export default PlayButton

