import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'

import styles from './Styles/MainStyles'

import { ThemeContext } from './Contexts/ThemeContext'

function Main(props) {
  const { isDark } = useContext(ThemeContext)
  const { classes } = props
  return (
    <div
      className={classes.main}
      style={{ backgroundColor: isDark ? 'black' : 'white' }}
    >
      {props.children}
    </div>
  )
}

export default withStyles(styles)(Main)
