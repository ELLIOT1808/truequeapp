import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import PopularCategories from './components/PopularCategories.jsx'
import CommunityImpact from './components/CommunityImpact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <PopularCategories />
      <CommunityImpact />
      <Footer />
    </>
  )
}

export default App
