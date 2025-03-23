import { FaPlay } from "react-icons/fa"

const VideoGallery = ({ data }) => {
  return (
    <section className="video-gallery">
      <div className="gallery-container">
        {data.map((video, index) => (
          <div key={index} className="gallery-item">
            <div className="video-thumbnail">
              <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
              <div className="video-duration">{video.duration}</div>
              <div className="play-button">
                <FaPlay />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoGallery

