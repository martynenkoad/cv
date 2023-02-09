import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Chatadil from "./pages/Chatadil"
import EmoDiary from "./pages/EmoDiary"
import Haterville from "./pages/Haterville"
import MacDonalds from "./pages/MacDonalds"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatadil" element={<Chatadil />} />
          <Route path="/mac-donalds" element={<MacDonalds />} />
          <Route path="/haterville" element={<Haterville />} />
          <Route path="/emo-diary" element={<EmoDiary />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
