import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import HomePage from "./pages/HomePage"
import "./styles/global.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

