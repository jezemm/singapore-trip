import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Attractions from './components/Attractions'
import Food from './components/Food'
import Itinerary from './components/Itinerary'
import TravelTips from './components/TravelTips'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="attractions">
          <Attractions />
        </section>
        <section id="food">
          <Food />
        </section>
        <section id="itinerary">
          <Itinerary />
        </section>
        <section id="tips">
          <TravelTips />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
