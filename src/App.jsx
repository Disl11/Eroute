
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'


function HomePage() {
  return <h1>Bienvenue sur un site internet</h1>
}

function About() {
  return <h1>Qui nous sommes ?</h1>
}

function Service() {
  return <h1>test page service</h1>
}

function Contact() {
  return <h1>contactez-nous</h1>
}

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
