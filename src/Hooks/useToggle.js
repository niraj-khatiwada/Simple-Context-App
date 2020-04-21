import React, { useState } from 'react'

export default function useToggle() {
  const [currToggleState, settoggleState] = useState(false)
  return [currToggleState, () => settoggleState(!currToggleState)]
}
