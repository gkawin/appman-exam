import React from 'react'

export default class FormInput extends React.Component {
  render () {
    return (
      <div className='form-input'>
        <input {...this.props} />
      </div>
    )
  }
}
