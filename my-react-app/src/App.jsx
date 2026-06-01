import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BikeSlider from "./components/BikeSlider";
import AISection from "./components/AISection";
import About from "./components/About";
import Story from "./components/Story";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BikeSlider />
      <AISection />

      <About />
      <Story />

      <Reviews />
      <Contact />

      <footer>
        © 2026 Royal Enfield Inspired Showcase Website
      </footer>
    </>
  );
}

export default App;