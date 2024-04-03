import React from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import Service from './Components/service/Service'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services"/></section>
      <section><Service/></section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App