import { useParams, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { PALETTES, PALETTE_IDS } from '../palettes';

export function PaletteSwitcher() {
  const { paletteId } = useParams<{ paletteId: string }>();
  const location = useLocation();
  const [hoveredPalette, setHoveredPalette] = useState<string | null>(null);

  const currentPaletteId = paletteId && PALETTES[paletteId] ? paletteId : '1';

  // Build new path preserving everything after /:paletteId
  const getPathForPalette = (id: string) => {
    const pathParts = location.pathname.split('/');
    // pathParts[0] is '', pathParts[1] is current paletteId
    pathParts[1] = id;
    return pathParts.join('/') || `/${id}/`;
  };

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full backdrop-blur-md"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Palette name tooltip */}
      {hoveredPalette && (
        <div
          className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            color: '#fff',
          }}
        >
          {PALETTES[hoveredPalette].name}
        </div>
      )}

      {PALETTE_IDS.map((id) => {
        const palette = PALETTES[id];
        const isActive = currentPaletteId === id;

        return (
          <Link
            key={id}
            to={getPathForPalette(id)}
            onMouseEnter={() => setHoveredPalette(id)}
            onMouseLeave={() => setHoveredPalette(null)}
            className="relative flex items-center justify-center transition-transform duration-200 hover:scale-110"
            style={{
              width: isActive ? '28px' : '20px',
              height: isActive ? '28px' : '20px',
            }}
            aria-label={`Switch to ${palette.name} palette`}
            aria-current={isActive ? 'true' : undefined}
          >
            <div
              className="rounded-full transition-all duration-200"
              style={{
                width: '100%',
                height: '100%',
                background: palette.accent,
                boxShadow: isActive
                  ? `0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 12px ${palette.accent}`
                  : '0 0 0 1px rgba(255, 255, 255, 0.2)',
                opacity: isActive ? 1 : 0.7,
              }}
            />
            {isActive && (
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: `radial-gradient(circle, ${palette.accent}40 0%, transparent 70%)`,
                }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
