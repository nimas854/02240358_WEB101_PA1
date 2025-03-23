"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navigation from "./Navigation"
import { FaUser, FaSearch } from "react-icons/fa"
import wweLogo from "../../assets/wwe-logo.png"
import peacockLogo from "../../assets/peacock-logo.png"

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={wweLogo || "/placeholder.svg"} alt="WWE Logo" className="wwe-logo" />
          </Link>
        </div>

        {!isMobile ? (
          <Navigation />
        ) : (
          <button className="mobile-menu-button" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            Menu
          </button>
        )}

        {showMobileMenu && isMobile && <Navigation isMobile={true} />}

        <div className="header-actions">
          <div className="peacock-logo">
            <img src={peacockLogo || "/placeholder.svg"} alt="Peacock Logo" />
          </div>
          <button className="user-button">
            <FaUser />
          </button>
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

