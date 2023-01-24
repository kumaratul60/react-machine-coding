import { useState } from 'react'

// state => state is temporary memory for a component

const useCounter = (initialValue) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

export default useCounter