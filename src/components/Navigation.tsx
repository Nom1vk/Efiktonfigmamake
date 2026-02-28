import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'rgba(0,43,92,0.97)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(184,115,51,0.2)' }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded" aria-label="Efikton home">
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fff' }}
            >
              e<span style={{ color: '#B87333' }}>φ</span>ikton
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Solutions', href: '#solutions' },
              { label: 'The Method', href: '#method' },
              { label: 'Results', href: '#results' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333] rounded"
                style={{ color: 'rgba(255,255,255,0.75)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
              style={{ backgroundColor: '#B87333', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a0652c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B87333')}
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]"
            style={{ color: '#fff' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: 'rgba(184,115,51,0.2)' }}
          >
            <div className="flex flex-col gap-4 pb-4">
              {[
                { label: 'Solutions', href: '#solutions' },
                { label: 'The Method', href: '#method' },
                { label: 'Results', href: '#results' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium px-2 py-1 rounded transition-colors"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold text-center"
                style={{ backgroundColor: '#B87333', color: '#fff' }}
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
