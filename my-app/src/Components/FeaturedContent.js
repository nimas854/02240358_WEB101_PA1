import { FaFacebook, FaTwitter, FaShareAlt, FaPlay } from "react-icons/fa"
import "./FeaturedContent.css"

function FeaturedContent() {
  return (
    <section className="featured">
      <div className="container featured-container">
        <div className="featured-sidebar">
          <div className="show-logo">
            <img src="/images/smackdown-logo.png" alt="SmackDown" />
          </div>
          <div className="social-share">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaShareAlt />
            </button>
          </div>
        </div>

        <div className="featured-main">
          <img src="/images/featured-match.jpg" alt="Featured Match" />
        </div>

        <div className="featured-info">
          <div className="featured-tag">SMACKDOWN RESULTS FOR 3/21</div>
          <h2 className="featured-title">
            Reigns, Punk and Rollins engage in a chaotic brawl with WrestleMania implications
          </h2>
          <div className="featured-actions">
            <a href="/" className="btn btn-outline">
              Results
            </a>
            <a href="/" className="btn btn-solid">
              <FaPlay /> Watch Highlights
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedContent

