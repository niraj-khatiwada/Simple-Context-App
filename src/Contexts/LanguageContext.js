import React, { createContext } from 'react'

import useLanguageHooks from '../Hooks/useLanguageHooks'

export const LanguageContext = createContext()

export default function LanguageProvider(props) {
  const [language, setLanguage] = useLanguageHooks('english')

  return (
    <LanguageContext.Provider
      value={{
        languageName: language,
        changeLanguage: setLanguage,
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
