import React, { Component, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'

import styles from './Styles/NavBarStyles'

import languageData from './LanguageData/NavBarLanguageData'

import { ThemeContext } from './Contexts/ThemeContext'
import { LanguageContext } from './Contexts/LanguageContext'

function NavBar(props) {
  const { classes } = props
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const { languageName } = useContext(LanguageContext)
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.navBar}
        position="static"
        color={isDark ? 'primary' : 'white'}
      >
        <Toolbar>
          <div className={classes.toolBarFlex}>
            <div className={classes.title}>
              <Typography variant="h5" color="inherit">
                Context App
                <div>{languageData[languageName].flag}</div>
              </Typography>
            </div>
            <div className={classes.toggleGrid}>
              <Typography variant="h6" color="inherit">
                {languageData[languageName].theme}
              </Typography>
              <Switch onChange={() => toggleTheme()} />
            </div>
            <div className={`${classes.search}`}>
              <SearchIcon />
              <TextField
                placeholder={languageData[languageName].search}
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
export default withStyles(styles)(NavBar)
