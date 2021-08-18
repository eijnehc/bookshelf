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

function App() {
  const [openModal, setOpenModal] = useState(STATUS.NONE)

  const close = () => setOpenModal(STATUS.NONE)

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
        </Dialog>
      </div>
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
