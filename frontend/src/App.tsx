import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import Routes from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FrappeProvider>
      <div>
      <h1>Custom Frappe Frontend App</h1>
      <Routes />
    </div>
      </FrappeProvider>
    </div>
  )
}

export default App
