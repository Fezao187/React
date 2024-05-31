import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup/page">Sign Up</Link>
        <Link to="/login/page">Login</Link>
        <Link to="/favorites/page">Favorites</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/page' element={<Login />} />
        <Route path='/favorites/page' element={<Favorites />} />
        <Route path="/signup/page" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;