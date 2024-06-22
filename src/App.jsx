import { useState } from 'react'
import './App.css'

function App() {
  const [onClick, setOnClick] = useState(0)
  return (
    <div className="App">
      <button>
        {onClick}
      </button>
    </div>
  )
}

export default App