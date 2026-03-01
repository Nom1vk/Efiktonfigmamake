export interface Palette {
  id: string;
  name: string;
  accent: string;
  cssVars: Record<string, string>;
}

export const PALETTES: Record<string, Palette> = {
  '1': {
    id: '1',
    name: 'Copper Navy',
    accent: '#C17F3E',
    cssVars: {}, // Default palette, no overrides needed
  },
  '2': {
    id: '2',
    name: 'Bronze Charcoal',
    accent: '#B87333',
    cssVars: {
      '--ef-navy': '#0D1117',
      '--ef-charcoal': '#1C2128',
      '--ef-copper': '#B87333',
      '--ef-copper-light': '#CD8E62',
      '--ef-copper-dark': '#9A5F28',
      '--ef-copper-border': 'rgba(184, 115, 51, 0.2)',
      '--ef-text-primary': '#F0EDE8',
      '--ef-text-secondary': '#9198A1',
      '--ef-surface': '#F6F4F1',
      '--ef-surface-alt': '#EEEBE8',
    },
  },
  '3': {
    id: '3',
    name: 'Aegean Slate',
    accent: '#2E7D9A',
    cssVars: {
      '--ef-navy': '#0F1E2E',
      '--ef-charcoal': '#1A2B3D',
      '--ef-copper': '#2E7D9A',
      '--ef-copper-light': '#4A9AB8',
      '--ef-copper-dark': '#1F5B73',
      '--ef-copper-border': 'rgba(46, 125, 154, 0.2)',
      '--ef-text-primary': '#E9F1F5',
      '--ef-text-secondary': '#7A8B98',
      '--ef-surface': '#F8FAFB',
      '--ef-surface-alt': '#F0F4F6',
    },
  },
  '4': {
    id: '4',
    name: 'Steel Amber',
    accent: '#D9A441',
    cssVars: {
      '--ef-navy': '#121820',
      '--ef-charcoal': '#1E252E',
      '--ef-copper': '#D9A441',
      '--ef-copper-light': '#E6BC6B',
      '--ef-copper-dark': '#B88A2F',
      '--ef-copper-border': 'rgba(217, 164, 65, 0.2)',
      '--ef-text-primary': '#F0EFEB',
      '--ef-text-secondary': '#8E8C85',
      '--ef-surface': '#FAF8F3',
      '--ef-surface-alt': '#F2EFE9',
    },
  },
  '5': {
    id: '5',
    name: 'Marble Verde',
    accent: '#4A7C5B',
    cssVars: {
      '--ef-navy': '#0A1A15',
      '--ef-charcoal': '#152520',
      '--ef-copper': '#4A7C5B',
      '--ef-copper-light': '#669977',
      '--ef-copper-dark': '#356347',
      '--ef-copper-border': 'rgba(74, 124, 91, 0.2)',
      '--ef-text-primary': '#EDF2EE',
      '--ef-text-secondary': '#7A8C80',
      '--ef-surface': '#F7FAF8',
      '--ef-surface-alt': '#EEF3F0',
    },
  },
};

export const PALETTE_IDS = ['1', '2', '3', '4', '5'] as const;
export type PaletteId = (typeof PALETTE_IDS)[number];
