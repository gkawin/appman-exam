import React from 'react'
import PropTypes from 'prop-types'

export default class LoginButtomContainer extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }
  render () {
    return this.props.children({})
  }
}
