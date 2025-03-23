import { Link } from "react-router-dom"

const Navigation = ({ isMobile }) => {
  const navItems = [
    { title: "WWE NETWORK", path: "/network" },
    { title: "SHOWS", path: "/shows" },
    { title: "SUPERSTARS", path: "/superstars" },
    { title: "TICKETS", path: "/tickets" },
    { title: "SHOP", path: "/shop" },
  ]

  return (
    <nav className={`navigation ${isMobile ? "mobile-nav" : ""}`}>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <Link to={item.path} className="nav-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

