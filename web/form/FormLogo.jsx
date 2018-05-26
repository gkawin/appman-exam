import './formLogo.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classname'

export default class FormLogo extends React.Component {
  static propTypes = {
    spinning: PropTypes.bool
  }
  render () {
    const cls = classname('form-logo', { 'logo-spin': this.props.spinning })
    return (
      <div className={cls}>
        <img alt='react-logo' className='form-logo__logo-img' src={require('../logo.svg')} />
      </div>
    )
  }
}
