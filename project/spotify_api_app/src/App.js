import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>

      <Router>
        <Navbar collapseOnSelect bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">Spotify API App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup/page">Sign Up</Nav.Link>
                <Nav.Link href="/login/page">Login</Nav.Link>
                <Nav.Link href="/favorites/page">Favorites</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/page' element={<Login />} />
          <Route path='/favorites/page' element={<Favorites />} />
          <Route path="/signup/page" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;