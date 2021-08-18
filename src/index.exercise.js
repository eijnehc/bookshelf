// 🐨 you'll need to import React and ReactDOM up here

import React from 'react'
import ReactDOM from 'react-dom'

import {Logo} from './components/logo'

function App() {
  const handleLogin = () => alert('login clicked')
  const handleRegister = () => alert('register clicked')

  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
