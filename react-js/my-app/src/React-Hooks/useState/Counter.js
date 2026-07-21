import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0)
    return (
    <div>
        <p>
            Counter is : {Count}
        </p>
        <button onClick={() => setCount(Count + 1)}>
            increment
        </button>
        <button onClick={() => setCount(Count - 1)}>
            decrement
        </button>
    </div>
  )
}

export default Counter