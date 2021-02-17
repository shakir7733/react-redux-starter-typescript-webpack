import React, { useState } from 'react'
import Navbar from './navbar'

function Header() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(false)

  return (
    <header id="header" className="header">
      <Navbar />
    </header>
  )
}

export default Header
