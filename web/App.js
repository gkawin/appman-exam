import './styles/app.scss'

import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div className='app__segment'>
        <div className='app__logo'>
          <image src={require('./logo.svg')} />
        </div>
        <div className='app__form'>
          <div className='form__inputs'>
            <form>
              <input type='email' placeholder='example@appman.co.th' />
              <input type='password' placeholder='you password...' />
              <button onClick={() => {}}>Sign in</button>
            </form>
          </div>
        </div>
        <div className='form__helpers'>
          <a href='#'>Forgot password?</a>
          <a href='#' >Create a new account</a>
        </div>
      </div>
    )
  }
}

export default App
