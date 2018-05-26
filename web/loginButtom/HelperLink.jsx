import './helperLink.scss'

import React from 'react'
import PropTypes from 'prop-types'

export default class HelperLink extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string
  }
  static defaultProps = {
    to: '#'
  }
  render () {
    return (
      <a
        href={this.props.to}
        className='helper-link'
      >
        {this.props.children}
      </a>
    )
  }
}
