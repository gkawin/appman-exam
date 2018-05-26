import './styles/app.scss'

import React from 'react'

import FormInputContainer from './form/FormInputContainer'
import LoginBottomContainer from './loginButtom/LoginButtomContainer'
import LoginBottomLayout from './loginButtom/LoginBottomLayout'
import FormInput from './form/FormInput'
import FormButton from './form/FormButton'
import FormError from './form/FormError'
import FormLogo from './form/FormLogo'
import HelperLink from './loginButtom/HelperLink'

class App extends React.Component {
  render () {
    return (
      <div className='app__segment'>
        <FormInputContainer>
          {(props) => (
            <div>
              <FormLogo spinning={props.loading} />
              <form onSubmit={props.onSubmit}>
                <FormInput
                  name='email'
                  label='E-mail address'
                  type='email'
                  placeholder='example@appman.co.th'
                  onChange={props.onChangeInput}
                  value={props.email}
                />
                <FormInput
                  name='password'
                  label='Password'
                  type='password'
                  placeholder='you password...'
                  onChange={props.onChangeInput}
                  value={props.password}
                />
                <FormError error={props.error} />
                <FormButton>SIGN IN</FormButton>
              </form>
            </div>

          )}
        </FormInputContainer>
        <LoginBottomContainer>
          {() => (
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
