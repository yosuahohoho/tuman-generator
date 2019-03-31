import React from "react"

import logo from "./logo_tuman.png"

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Tuman Logo" />
      </div>

      <h1>Tuman Generator</h1>
    </header>
  )
}

export default Header