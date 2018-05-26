import './styles/app.scss'

import React from 'react'

import FormInputContainer from './form/FormInputContainer'
import FormInput from './form/FormInput'
import FormButton from './form/FormButton'

class App extends React.Component {
  render () {
    return (
      <div className='app__segment'>
        <div className='app__logo'>
          <img src={require('./logo.svg')} />
        </div>
        <div className='app__form'>
          <FormInputContainer>
            {(props) => (
              <form>
                <FormInput type='email' placeholder='example@appman.co.th' />
                <FormInput type='password' placeholder='you password...' />
                <FormButton onClick={() => {}}>Sign In</FormButton>
              </form>
            )}
          </FormInputContainer>
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
