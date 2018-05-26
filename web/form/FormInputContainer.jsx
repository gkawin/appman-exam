import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const request = axios.create({
  validateStatus: (status) => {
    return status >= 200 && status < 500
  }
})

export default class FormInputContainer extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }
  state = { email: '', password: '', error: '', loading: false }
  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = async (e) => {
    e.preventDefault()
    try {
      await this.setState({ error: '', loading: true })
      const response = await request.post('http://localhost:3000/api/login', this.state)
      if (response.status >= 400) {
        throw new Error('Email or password is incorrect')
      }
      await this.setState({ loading: false })
    } catch (error) {
      await this.setState({ error: error.message, loading: false })
    }
  }
  render () {
    return (this.props.children({
      onChangeInput: this.onChangeInput,
      onSubmit: this.onSubmit,
      ...this.state
    }))
  }
}
