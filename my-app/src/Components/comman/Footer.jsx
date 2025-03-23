import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"

const Footer = () => {
  const footerLinks = [
    { title: "WWE", links: ["About", "Shows", "Help", "Careers", "Contact"] },
    { title: "WWE NETWORK", links: ["Schedule", "Shows", "PPV", "Watch", "Tier"] },
    { title: "CORPORATE", links: ["Investors", "Suppliers", "Press", "Corporate Governance"] },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/placeholder.svg?height=50&width=100" alt="WWE Logo" />
          </div>
          <div className="social-links">
            <a href="https://facebook.com/wwe" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/wwe" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/wwe" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/wwe" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://tiktok.com/@wwe" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="footer-links">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2025 WWE. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

