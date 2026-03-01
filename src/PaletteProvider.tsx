import { useEffect, type ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { PALETTES, type PaletteId } from './palettes';

interface PaletteProviderProps {
  children: ReactNode;
}

const CSS_VAR_KEYS = [
  '--ef-navy',
  '--ef-charcoal',
  '--ef-copper',
  '--ef-copper-light',
  '--ef-copper-dark',
  '--ef-copper-border',
  '--ef-text-primary',
  '--ef-text-secondary',
  '--ef-surface',
  '--ef-surface-alt',
] as const;

export function PaletteProvider({ children }: PaletteProviderProps) {
  const { paletteId } = useParams<{ paletteId: string }>();
  const validPaletteId = (paletteId && PALETTES[paletteId] ? paletteId : '1') as PaletteId;
  const palette = PALETTES[validPaletteId];

  useEffect(() => {
    const root = document.documentElement;

    if (validPaletteId === '1') {
      // Default palette: remove any overrides
      CSS_VAR_KEYS.forEach((key) => {
        root.style.removeProperty(key);
      });
    } else {
      // Apply palette CSS variables
      Object.entries(palette.cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }

    // Cleanup on unmount or palette change
    return () => {
      CSS_VAR_KEYS.forEach((key) => {
        root.style.removeProperty(key);
      });
    };
  }, [validPaletteId, palette]);

  return <>{children}</>;
}
