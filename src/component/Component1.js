import React, { useState } from 'react'

function Component1() {
  const [count, setcount] = useState(0);
  return (
    <div>

      {count}
    </div>
  )
}

export default Component1