import { useState } from 'react'
import './App.css'
import ReactPlayer from "react-player"



function App() {
  const [count, setCount] = useState(0)
  const vidURL ="https://www.youtube.com/shorts/PhezGvPwVnA"

  return (
    <>
    <div>
      <h1>A mandate That Divinity May Be Express in Mortality Through The Ministry Of worship.  </h1>

      <ReactPlayer
      url={vidURL}
      playing={false}
      volume = {0.5}
      />

    </div>
  
    </>
  )
}

export default App
