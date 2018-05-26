import './styles/app.scss'

import React from 'react'

import FormInputContainer from './form/FormInputContainer'
import LoginBottomContainer from './loginButtom/LoginButtomContainer'
import LoginBottomLayout from './loginButtom/LoginBottomLayout'
import FormInput from './form/FormInput'
import FormButton from './form/FormButton'
import HelperLink from './loginButtom/HelperLink'

class App extends React.Component {
  render () {
    return (
      <div className='app__segment'>
        <div className='app__logo'>
          <img alt='react-logo' src={require('./logo.svg')} />
        </div>
        <FormInputContainer>
          {(props) => (
            <form>
              <FormInput
                label='E-mail address'
                type='email'
                placeholder='example@appman.co.th'
              />
              <FormInput
                label='Password'
                type='password'
                placeholder='you password...'
              />
              <FormButton onClick={() => {}}>SIGN IN</FormButton>
            </form>
          )}
        </FormInputContainer>
        <LoginBottomContainer>
          {(props) => (
            <LoginBottomLayout
              renderLeft={() => <HelperLink>Forgot password?</HelperLink>}
              renderRight={() => <HelperLink>Create a new account</HelperLink>}
            />
          )}
        </LoginBottomContainer>
      </div>
    )
  }
}

export default App
