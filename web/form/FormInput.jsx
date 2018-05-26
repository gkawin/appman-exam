import './formInput.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class FormInput extends React.Component {
  static propTypes = {
    label: PropTypes.string
  }
  render () {
    return (
      <div className='form-input'>
        <label className='form-input__label'>{this.props.label}</label>
        <input className='form-input__input' {...this.props} />
      </div>
    )
  }
}
