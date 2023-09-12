import React from 'react'

const Child = ({ children }) => {
  return (
    <>
    {children &&
      children.length > 0 &&
      children.map((item) => {
        return (
          <>
            <div>{item.name}</div>
            ***************************
            <Child {...item} />
          </>
        );
      })}
  </>
  )
}

export default Child