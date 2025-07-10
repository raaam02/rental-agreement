import { Navbar } from "@/components/Navbar"
import { RentalAgreementForm } from "@/components/RentalAgreementForm"
import Home from "@/pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Navbar />
      <main className="container py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<RentalAgreementForm />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App

