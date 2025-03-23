import { FaFacebook, FaTwitter, FaShareAlt } from "react-icons/fa"

const FeaturedMatch = ({ data }) => {
  return (
    <section className="featured-match">
      <div className="match-container">
        <div className="match-sidebar">
          <div className="show-logo">
            <img src={data.showLogo || "/placeholder.svg"} alt={data.showName} />
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

        <div className="match-content">
          <img src={data.image || "/placeholder.svg"} alt={data.title} className="match-image" />
        </div>

        <div className="match-info">
          <div className="match-header">
            <span className="match-date">{data.date}</span>
            <h2 className="match-title">{data.title}</h2>
          </div>
          <div className="match-actions">
            <button className="results-button">Results</button>
            <button className="highlights-button">Watch Highlights</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMatch

