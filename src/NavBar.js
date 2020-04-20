import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'

import styles from './Styles/NavBarStyles'

class NavBar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar className={classes.navBar} position="static">
          <Toolbar>
            <div className={classes.toolBarFlex}>
              <div className={classes.title}>
                <Typography variant="h5" color="inherit">
                  Context App
                </Typography>
              </div>
              <div className={classes.toggleGrid}>
                <Typography variant="h6" color="inherit">
                  Theme
                </Typography>
                <Switch />
              </div>
              <div className={classes.search}>
                <SearchIcon />
                <TextField
                  placeholder="Search"
                  type="text"
                  inputProps={{ className: classes.searchInput }}
                  fullWidth
                  
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default withStyles(styles)(NavBar)
