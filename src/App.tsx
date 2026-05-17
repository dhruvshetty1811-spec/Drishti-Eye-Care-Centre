import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="relative selection:bg-premium-teal/30 selection:text-premium-teal scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}
