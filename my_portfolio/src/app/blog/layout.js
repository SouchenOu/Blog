import React from 'react'

// children means all the children components that is exist in this folder bLOG

const layout = ({children}) => {
  return (
    <div>
        <h1>Hi this is Blog layout</h1>
      {children} 
    </div>
  )
}

export default layout
