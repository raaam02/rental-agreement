import { Navbar } from "@/components/Navbar"
import { Agreement } from "@/pages/Agreement"
import Home from "@/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar />
      <main className="m-auto sm:p-16 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Agreement />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App

