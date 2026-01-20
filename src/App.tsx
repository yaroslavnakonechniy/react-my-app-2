import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatelessComponent from './components/StatelessComponent'
import StatefulComponent from './components/StatefulComponent'
import ClassComponent from './components/ClassComponent'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div>
        <StatelessComponent name={"Alex0"} />
        <StatefulComponent />
        <ClassComponent />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
