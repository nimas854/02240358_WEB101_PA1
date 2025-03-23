import { FaPlay } from "react-icons/fa"

const VideoHighlights = ({ data }) => {
  return (
    <section className="video-highlights">
      <div className="highlights-title">
        <h2>SmackDown highlights: March 21, 2025</h2>
      </div>
      <div className="highlights-container">
        {data.map((video, index) => (
          <div key={index} className="highlight-item">
            <div className="video-thumbnail">
              <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
              <div className="video-duration">{video.duration}</div>
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoHighlights

