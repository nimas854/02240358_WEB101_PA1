import "./App.css"
import Header from "./Components/Header"
import FeaturedContent from "./Components/FeaturedContent"



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
