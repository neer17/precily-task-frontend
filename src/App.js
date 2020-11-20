import { useState } from 'react'

import './App.css'

import ResizableComponent from './components/ResizableComponent'
import { useWindowSize } from './hooks/WindowResize'

const calculateDimensions = width => {
  let factor = 1
  if (width < 768) {
    factor = 1.2
  } else if (width < 992) {
    factor = 1.5
  } else if (width < 1200) {
    factor = 2
  }
  return factor
}

function App() {
  const [factor, setFactor] = useState(1)
  const size = useWindowSize()

  return (
    <div className="App">
      <div className="App--row1">
        <ResizableComponent width={500 * factor} height={300 * factor} id={1} />
        <ResizableComponent width={500 * factor} height={300 * factor} id={2} />
      </div>
      <div className="App--row2">
        <ResizableComponent width={800 * factor} height={310 * factor} id={3} />
      </div>
    </div>
  )
}

export default App
