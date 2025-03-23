import "./App.css"
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import FeaturedContent from "./Components/FeaturedContent"
import ImageGrid from "./components/ImageGrid"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <FeaturedContent />
        <ImageGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
