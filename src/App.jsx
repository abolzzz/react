import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <React.StrictMode>
        <>
         <Header />
         <Navbar />
         <About />
         <Experience />
         <Services />
         <Portfolio />
         <Testimonials />
         <Contact />
         <Footer />
        </>
    </React.StrictMode>
  )
}

export default App
