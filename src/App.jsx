import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import QuickFilters from "./components/QuickFilters";
import SearchBox from "./components/SearchBox";
import Categories from "./components/Categories";
import PopularCities from "./components/PopularCities";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
//import CTA from "./components/CTA";
import ListingsPanel from "./components/ListingsPanel";

import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <main className="w-full max-w-7xl mx-auto px-4 overflow-x-hidden">
        <Hero />

        <SearchBox onCategorySelect={setActiveCategory} />
        <QuickFilters
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
        />

        <Categories />
        <PopularCities />
        <Statistics />
        <Testimonials />
      </main>

      <ListingsPanel
        activeCategory={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;