import React, { createContext, Component } from 'react'

export const LanguageContext = createContext()

export default class LanguageProvider extends Component {
  state = {
    languageName: 'english',
  }
  handlechangeLanguage = (language) => {
    this.setState({ languageName: language })
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.handlechangeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

// export const withLanguageContext = (MyComponent) => (props) => (
//   <LanguageContext.Consumer>
//     {(value) => <MyComponent languageContext={value} {...props} />}
//   </LanguageContext.Consumer>
// )
