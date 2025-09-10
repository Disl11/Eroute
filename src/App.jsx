
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Contact from './assets/Composant/contact';
import About from './assets/Composant/About';
import Service from './assets/Composant/Service';
import HomePage from './assets/Composant/Homepage';


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/homepage">Home</Link >
            </li>
            <li>
              <Link to="/about" >A Propos </Link >
            </li>
            <li>
              <Link to="/service" >service</Link >
            </li>
            <li>
              <Link to="/Contact" >Contact</Link >
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path={"/homepage"} element={<HomePage />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/service"} element={<Service />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
