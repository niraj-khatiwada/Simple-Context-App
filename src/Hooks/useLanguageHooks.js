import React, { useState } from 'react'

export default function useLanguageHooks(preLanguageState) {
  const [currLanguageState, setLanguageState] = useState(preLanguageState)

  return [currLanguageState, (value) => setLanguageState(value)]
}
