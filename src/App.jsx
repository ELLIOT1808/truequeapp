import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import PopularCategories from './components/PopularCategories.jsx';
import CommunityImpact from './components/CommunityImpact.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <PopularCategories />
      <CommunityImpact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
