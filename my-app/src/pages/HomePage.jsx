import VideoHighlights from "../Components/Home/VideoHighlights"
import SlamAwards from "../Components/Home/SlamAwards"
import FeaturedMatch from "../Components/Home/FeaturedMatch"
import VideoGallery from "../Components/Home/VideoGallery"
import { videoHighlightsData, featuredMatchData, videoGalleryData } from "../Data/homeData"

const HomePage = () => {
  return (
    <div className="home-page">
      <VideoHighlights data={videoHighlightsData} />
      <SlamAwards />
      <FeaturedMatch data={featuredMatchData} />
      <VideoGallery data={videoGalleryData} />
    </div>
  )
}

export default HomePage

