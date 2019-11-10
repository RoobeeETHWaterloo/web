import React, { useState, useEffect } from 'react'
import core from 'core'

import Spinner from 'components/ui/Spinner/Spinner'

import s from './App.scss'


const selectedProvider = localStorage.getItem('selectedProvider')

const ProviderLoader = ({ onInit }) => {
  useEffect(() => {
    core.provider.load(selectedProvider, () => {
      onInit()
    })
  }, [])

  return (
    <div className={s.content}>
      <Spinner big />
    </div>
  )
}

const App = ({ children }) => {
  const [ isLoaded, setLoadStatus ] = useState(!selectedProvider)

  if (!isLoaded) {
    return (
      <ProviderLoader onInit={() => setLoadStatus(true)} />
    )
  }

  return (
    <div>
      {children}
    </div>
  )
}


export default App
