import './loginBottomLayout.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class LoginBottomLayout extends React.Component {
  static propTypes = {
    renderLeft: PropTypes.func.isRequired,
    renderRight: PropTypes.func.isRequired
  }
  render () {
    return (
      <div className='login-bottom-layout'>
        <div className='login-bottom-layout__content'>
          <div className='login-bottom-layout__left'>
            {this.props.renderLeft()}
          </div>
          <div className='login-bottom-layout__right'>
            {this.props.renderRight()}
          </div>
        </div>
      </div>
    )
  }
}
