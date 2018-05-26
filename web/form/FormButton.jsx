import './formButton.scss'
import React from 'react'
import PropTypes from 'prop-types'

export default class FormButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
  }
  render () {
    return (
      <div className='form-button'>
        <button
          onClick={this.props.onClick}
          className='form-button__button'
        >
          {this.props.children}
        </button>
      </div>
    )
  }
}
