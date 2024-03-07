import Header from './components/Header'
import Menu from './components/Menu'

import React, { useEffect, useRef, useState } from 'react'
import useOnScreen from './shared/hooks/useOnScreen'

import MenuMobile from './components/MenuMobile'
import useWindowDimensions from './shared/useWindowDimensions'
import './styles/index.scss'
import Router from './components/Router'

function App() {
  const ref = useRef(null)
  const isHeaderVisible = useOnScreen(ref)

  const { width } = useWindowDimensions()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(width > 950 ? false : true)
  }, [width])

  return (
    <div className="App">
      <Header ref={ref} />
      <Menu isHeaderVisible={isHeaderVisible} hide={isMobile} />
      <MenuMobile
        isHeaderVisible={isHeaderVisible}
        className={!isMobile ? 'hide' : ''}
        hide={!isMobile}
      />
      <div className="content-container">
        <Router />
      </div>
    </div>
  )
}

export default App
