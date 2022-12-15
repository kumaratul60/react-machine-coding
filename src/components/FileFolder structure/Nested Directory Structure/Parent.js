import React from 'react'
import Child from './Child'

const Parent = ({name, children}) => {
  return (
    <>
    <div>{name}</div>
    -----------------------------------
    <Child children={children} />
  </>
  )
}

export default Parent