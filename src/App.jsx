import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Layout/Header"
import Home from "./Components/Pages/Home"
import Review from "./Components/Pages/Review"
import About from "./Components/Pages/About"


function App() {

  return (
    <>
   <Header text="Review Application" />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>

      

      
    </>
  )
}

export default App
