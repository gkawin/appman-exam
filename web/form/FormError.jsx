import './formError.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class FormError extends React.Component {
  static propTypes = {
    error: PropTypes.string
  }
  render () {
    return !this.props.error ? null : (
      <div className='form-error'>
        {this.props.error}
      </div>
    )
  }
}
