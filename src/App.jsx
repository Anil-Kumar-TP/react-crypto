import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoHome from "./pages/CryptoHome"
import CryptoDetail from "./pages/CryptoDetail"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoHome/>} />
        <Route path="/coin/:id" element={<CryptoDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
