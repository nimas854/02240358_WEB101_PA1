"use client"

import { useState } from "react"
import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/images/wwe-logo.png" alt="WWE Logo" />
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          Menu
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/">WWE NETWORK</a>
            </li>
            <li>
              <a href="/">SHOWS</a>
            </li>
            <li>
              <a href="/">SUPERSTARS</a>
            </li>
            <li>
              <a href="/">TICKETS</a>
            </li>
            <li>
              <a href="/">SHOP</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="peacock-logo">
            <img src="/images/peacock-logo.png" alt="Peacock" />
          </div>
          <button className="icon-btn">User</button>
          <button className="icon-btn">Search</button>
        </div>
      </div>
    </header>
  )
}

export default Header



