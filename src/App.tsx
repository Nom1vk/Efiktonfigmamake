import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solutions />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}