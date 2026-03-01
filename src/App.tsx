import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { ERPReplacement } from './components/ERPReplacement';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

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
        {/* Section transition: navy → off-white */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184, 115, 51, 0.35) 30%, rgba(184, 115, 51, 0.5) 50%, rgba(184, 115, 51, 0.35) 70%, transparent 100%)',
          }}
        />
        <Solutions />
        {/* Section transition: off-white → navy */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184, 115, 51, 0.25) 30%, rgba(184, 115, 51, 0.4) 50%, rgba(184, 115, 51, 0.25) 70%, transparent 100%)',
          }}
        />
        <Features />
        {/* Section transition: navy → cream */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184, 115, 51, 0.25) 30%, rgba(184, 115, 51, 0.4) 50%, rgba(184, 115, 51, 0.25) 70%, transparent 100%)',
          }}
        />
        <ERPReplacement />
        {/* Section transition: cream → off-white */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184, 115, 51, 0.25) 30%, rgba(184, 115, 51, 0.4) 50%, rgba(184, 115, 51, 0.25) 70%, transparent 100%)',
          }}
        />
        <Testimonials />
        {/* Section transition: cream → charcoal */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184, 115, 51, 0.25) 30%, rgba(184, 115, 51, 0.4) 50%, rgba(184, 115, 51, 0.25) 70%, transparent 100%)',
          }}
        />
        <About />
        {/* Section transition: charcoal → navy */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(184, 115, 51, 0.2) 30%, rgba(184, 115, 51, 0.35) 50%, rgba(184, 115, 51, 0.2) 70%, transparent 100%)',
          }}
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
