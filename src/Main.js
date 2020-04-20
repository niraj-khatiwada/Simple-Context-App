import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import styles from './Styles/MainStyles'

import { ThemeContext } from './Contexts/ThemeContext'

class Main extends Component {
  static contextType = ThemeContext
  render() {
    console.log(this.context)
    const { classes } = this.props
    return (
      <div
        className={classes.main}
        style={{ backgroundColor: this.context.isDark ? 'black' : 'white' }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(styles)(Main)
