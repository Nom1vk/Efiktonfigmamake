import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { ERPReplacement } from './components/ERPReplacement';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FibonacciDivider, CopperDrawDivider } from './components/PhiElements';
import { PaletteSwitcher } from './components/PaletteSwitcher';

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:bg-white focus:text-[#002B5C] focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        {/* φ structural divider */}
        <FibonacciDivider rotation={0} />
        <Solutions />
        {/* Section transition: off-white → navy */}
        <CopperDrawDivider />
        <FibonacciDivider rotation={45} />
        <Features />
        {/* Section transition: navy → cream */}
        <FibonacciDivider rotation={90} />
        <ERPReplacement />
        {/* Section transition: cream → off-white */}
        <CopperDrawDivider />
        <Testimonials />
        {/* Section transition: cream → charcoal */}
        <FibonacciDivider rotation={135} />
        <About />
        <CTA />
      </main>
      <Footer />
      <PaletteSwitcher />
    </div>
  );
}
