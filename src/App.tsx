import { useState } from 'react'
import './App.scss'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React + Typescript</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test Hot Module Reload
        </p>
      </div>
      <div>
        <p className="tools-used">
          Tools used:
        </p>
        <p>
          ReactJS / Vite / TypeScript / Jest / Testing Library / ESLint / SASS / Bootstrap / React-bootstrap / Axios
        </p>
      </div>
    </div>
  )
}

export default App
