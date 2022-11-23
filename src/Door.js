import React, { useEffect } from 'react'
import { useState } from 'react'

export const Door = ({id,onclick,isOpen}) => {

  const cssClasses=["door",isOpen?"doorOpen":""]
  return (
    <div onClick={()=>{onclick(id)}} className={cssClasses.join(' ')}></div>
  )
}
