import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { ERPReplacement } from './components/ERPReplacement';
import { Testimonials } from './components/Testimonials';
import { CaseStudy } from './components/CaseStudy';
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
        {/* Section transition: navy → off-white — φ structural divider */}
        <div aria-hidden="true" className="ef-section-divider ef-section-divider--strong" />
        <FibonacciDivider rotation={0} opacity={0.06} />
        <Solutions />
        {/* Section transition: off-white → navy — copper draw + φ */}
        <CopperDrawDivider />
        <div aria-hidden="true" className="ef-section-divider" />
        <FibonacciDivider rotation={45} opacity={0.055} />
        <Features />
        {/* Section transition: navy → cream */}
        <div aria-hidden="true" className="ef-section-divider" />
        <FibonacciDivider rotation={90} opacity={0.06} />
        <ERPReplacement />
        {/* Section transition: cream → off-white */}
        <CopperDrawDivider />
        <div aria-hidden="true" className="ef-section-divider" />
        <Testimonials />
        {/* Section transition: cream → navy (case study) */}
        <div aria-hidden="true" className="ef-section-divider" />
        <CaseStudy />
        {/* Section transition: navy → charcoal + φ */}
        <div aria-hidden="true" className="ef-section-divider" />
        <FibonacciDivider rotation={135} opacity={0.055} />
        <About />
        {/* Section transition: charcoal → navy */}
        <div aria-hidden="true" className="ef-section-divider" />
        <CTA />
      </main>
      <Footer />
      <PaletteSwitcher />
    </div>
  );
}
