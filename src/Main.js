import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import styles from './Styles/MainStyles'

class Main extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default withStyles(styles)(Main)
