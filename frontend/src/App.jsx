import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import Navbar from './components/Navbar';
import About from './pages/user/About';
import Contact from './pages/user/Contact';
// import SoilDashboard from './pages/admin/Soil-dashboard.jsx';
// import CreateSoil from './pages/admin/Create-soil.jsx';
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/soil" element={<SoilDashboard/>} />
        <Route path="/create-soil" element={<CreateSoil/>} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
