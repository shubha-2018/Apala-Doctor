import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import QuickFilters from "../components/QuickFilters";
import Categories from "../components/Categories";
import PopularCities from "../components/PopularCities";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import About from "./About";
//import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ListingsPanel from "../components/ListingsPanel";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 md:px-10 lg:px-12">
        {/* Search Box */}
        <div className="relative z-20 mb-12">
          <SearchBox onCategorySelect={setActiveCategory} />
        </div>

        {/* Quick Filters */}
        <section className="mb-14">
          <QuickFilters activeCategory={activeCategory} onCategorySelect={setActiveCategory} />
        </section>

        {/* Categories */}
        <section className="mb-14">
          <Categories />
        </section>

        {/* Popular Cities */}
        <section className="mb-14">
          <PopularCities />
        </section>

        {/* Statistics */}
        <section className="mb-14">
          <Statistics />
        </section>

        {/* Testimonials */}
        <section className="mb-14">
          <Testimonials />
        </section>

        {/* About */}
        <section className="mb-14">
          <About />
        </section>


      {/* Footer */}
      <Footer />

      {/* Listings Panel */}
      <ListingsPanel
        activeCategory={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </div>
  );
}