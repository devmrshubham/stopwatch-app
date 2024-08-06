import React from 'react'
import Stopwatch from "./Components/Stopwatch"

const App = () => {
  return (
    <div>
    <h1 style={{
      textAlign:"center",
      marginTop:"100px",
      marginBottom:"20px",
      textDecoration:"underline"
    }}>Stopwatch app</h1>
      <Stopwatch />
    </div>
  )
}

export default App
