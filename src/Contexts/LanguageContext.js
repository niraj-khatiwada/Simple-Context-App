import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export default function useLanguageProvider(props) {
  const [languageCurrState, setLanguageState] = useState('english')
  const handlechangeLanguage = (language) => {
    setLanguageState(language)
  }
  return (
    <LanguageContext.Provider
      value={{
        languageName: languageCurrState,
        changeLanguage: handlechangeLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}

// export const withLanguageContext = (MyComponent) => (props) => (
//   <LanguageContext.Consumer>
//     {(value) => <MyComponent languageContext={value} {...props} />}
//   </LanguageContext.Consumer>
// )

// state = {
//   languageName: 'english',
// }
