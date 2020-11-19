import logo from './logo.svg'
import './App.css'

import ResizableComponent from './components/ResizableComponent'

function App() {
  return (
    <div className="App">
      <div className="App--row1">
        <ResizableComponent width={500} height={300} />
        <ResizableComponent width={500} height={300} />
      </div>
      <div className="App--row2">
        <ResizableComponent width={800} height={310} />
      </div>
    </div>
  )
}

export default App
