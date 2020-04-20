import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

export class ThemeProvider extends Component {
  state = {
    isDark: true,
  }
  toggleTheme = () => this.setState({ isDark: !this.state.isDark })
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
