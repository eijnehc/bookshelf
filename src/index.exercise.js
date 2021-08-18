// 🐨 you'll need to import React and ReactDOM up here

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

import {Logo} from './components/logo'

const STATUS = {
  NONE: 'none',
  LOGIN: 'login',
  REGISTER: 'register',
}

function LoginForm({onSubmit, buttonText}) {
  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements

    return onSubmit({username: username.value, password: password.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = useState(STATUS.NONE)

  const close = () => setOpenModal(STATUS.NONE)

  function handleLogin(formData) {
    console.log('login', formData)
  }

  function handleRegister(formData) {
    console.log('register', formData)
  }

  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal(STATUS.LOGIN)}>Login</button>

        <Dialog
          isOpen={openModal === STATUS.LOGIN}
          onDismiss={close}
          aria-label="Login form"
        >
          <div>
            <button onClick={close}>Close</button>
          </div>
          <h3>Login</h3>
          <LoginForm onSubmit={handleLogin} buttonText="Login" />
        </Dialog>
      </div>
      <div>
        <button onClick={() => setOpenModal(STATUS.REGISTER)}>Register</button>

        <Dialog
          isOpen={openModal === STATUS.REGISTER}
          onDismiss={close}
          aria-label="Register form"
        >
          <div>
            <button onClick={close}>Close</button>
          </div>
          <h3>Register</h3>
          <LoginForm onSubmit={handleRegister} buttonText="Register" />
        </Dialog>
      </div>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
