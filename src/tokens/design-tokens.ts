/**
 * Frontend Library - Design Tokens
 *
 * A comprehensive collection of design tokens extracted and reverse-engineered from:
 * - designprompts.dev (31 design styles)
 * - caramell.app (landing page builder)
 * - Supabase Platform Kit
 *
 * These tokens can be used with Tailwind CSS, CSS-in-JS, or vanilla CSS.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface DesignTokens {
  name: string;
  description: string;
  mode: 'light' | 'dark';
  type: 'sans' | 'serif' | 'mono';
  colors: {
    primary: string;
    secondary?: string;
    accent?: string;
    background: string;
    foreground: string;
    muted?: string;
    border?: string;
    [key: string]: string | undefined;
  };
  typography: {
    fontFamily: {
      display: string;
      body: string;
      mono?: string;
    };
    fontSizes: string[];
    fontWeights: number[];
  };
  spacing: {
    base: number;
    scale: number[];
  };
  borderRadius: string[];
  shadows: string[];
  effects?: {
    blur?: string;
    backdrop?: string;
  };
}

// ============================================================================
// MONOCHROME STYLE
// ============================================================================

export const monochrome: DesignTokens = {
  name: 'Monochrome',
  description: 'A stark, editorial design system built on pure black and white. No accent colors—just dramatic contrast, oversized serif typography, and precise geometric layouts. Evokes high-end fashion editorials and architectural portfolios.',
  mode: 'light',
  type: 'serif',
  colors: {
    primary: '#000000',
    secondary: '#525252',
    background: '#FFFFFF',
    foreground: '#000000',
    muted: '#525252',
    border: '#000000',
  },
  typography: {
    fontFamily: {
      display: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      body: 'ui-sans-serif, system-ui, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px', '128px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['0px'], // Stark geometric - no rounded corners
  shadows: ['rgb(0, 0, 0) 0px 0px 0px 2px'], // Ring focus style
};

// ============================================================================
// CYBERPUNK STYLE
// ============================================================================

export const cyberpunk: DesignTokens = {
  name: 'Cyberpunk',
  description: 'Neon-soaked, high-contrast dark theme with glowing accents, monospace typography, and grid overlays. Inspired by dystopian sci-fi, hacker aesthetics, and digital underground culture.',
  mode: 'dark',
  type: 'mono',
  colors: {
    primary: '#00FF88', // Neon green
    secondary: '#00D4FF', // Cyan
    accent: '#FF00FF', // Magenta
    background: '#0A0A0F',
    foreground: '#E0E0E0',
    muted: '#6B7280',
    border: '#1C1C2E',
    card: '#121218',
    glow: 'rgba(0, 255, 136, 0.3)',
  },
  typography: {
    fontFamily: {
      display: '"Share Tech Mono", monospace',
      body: '"Share Tech Mono", monospace',
      mono: '"Share Tech Mono", monospace',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['0px', '2px', '4px'], // Sharp edges
  shadows: [
    '0 0 20px rgba(0, 255, 136, 0.3)',
    '0 0 40px rgba(0, 212, 255, 0.2)',
  ],
  effects: {
    backdrop: 'blur(8px)',
  },
};

// ============================================================================
// NEO BRUTALISM STYLE
// ============================================================================

export const neoBrutalism: DesignTokens = {
  name: 'Neo Brutalism',
  description: 'Bold, unapologetic design with hard shadows, thick borders, and vibrant colors. Inspired by the brutalist architecture movement, reimagined for the digital age with playful geometric shapes.',
  mode: 'light',
  type: 'sans',
  colors: {
    primary: '#FFD93D', // Yellow
    secondary: '#FF6B6B', // Coral
    accent: '#C4B5FD', // Purple
    background: '#FFFDF5', // Cream
    foreground: '#000000',
    muted: '#525252',
    border: '#000000',
  },
  typography: {
    fontFamily: {
      display: 'ui-sans-serif, system-ui, sans-serif',
      body: 'ui-sans-serif, system-ui, sans-serif',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '40px', '48px', '64px', '80px', '96px'],
    fontWeights: [400, 600, 700, 800, 900],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['0px', '4px', '8px', '12px'],
  shadows: [
    'rgb(0, 0, 0) 4px 4px 0px 0px',   // Small hard shadow
    'rgb(0, 0, 0) 6px 6px 0px 0px',   // Medium hard shadow
    'rgb(0, 0, 0) 8px 8px 0px 0px',   // Large hard shadow
  ],
};

// ============================================================================
// SAAS / TECH STYLE
// ============================================================================

export const saasTech: DesignTokens = {
  name: 'SaaS Tech',
  description: 'Clean, professional design system optimized for B2B SaaS products. Features a trustworthy blue primary color, generous whitespace, and friendly rounded corners.',
  mode: 'light',
  type: 'sans',
  colors: {
    primary: '#0052FF', // Blue
    secondary: '#4D7CFF',
    background: '#FFFFFF',
    foreground: '#0F172A', // Slate 900
    muted: '#64748B', // Slate 500
    border: '#E2E8F0', // Slate 200
    card: '#F8FAFC', // Slate 50
    accent: '#F1F5F9', // Slate 100
  },
  typography: {
    fontFamily: {
      display: 'ui-sans-serif, system-ui, sans-serif',
      body: 'ui-sans-serif, system-ui, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['6px', '8px', '12px', '16px', '24px', '32px', '40px', '9999px'],
  shadows: [
    '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  ],
};

// ============================================================================
// CLAYMORPHISM STYLE
// ============================================================================

export const claymorphism: DesignTokens = {
  name: 'Claymorphism',
  description: 'Soft, playful 3D design with puffy elements, gentle shadows, and pastel gradients. Elements appear like inflated clay or soft plastic. Perfect for friendly, approachable products.',
  mode: 'light',
  type: 'sans',
  colors: {
    primary: '#7C3AED', // Purple
    secondary: '#EC4899', // Pink
    accent: '#E0F2FE', // Light blue
    background: '#F4F1FA', // Soft lavender
    foreground: '#332F3A',
    muted: '#635F69',
    border: 'transparent',
  },
  typography: {
    fontFamily: {
      display: 'Nunito, ui-sans-serif, sans-serif',
      body: 'Nunito, ui-sans-serif, sans-serif',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
    fontWeights: [400, 500, 600, 700, 800],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['8px', '16px', '20px', '28px', '32px', '36px', '40px', '48px', '9999px'],
  shadows: [
    'rgba(139, 92, 246, 0.3) 12px 12px 24px 0px, rgba(255, 255, 255, 0.4) -8px -8px 16px 0px',
    'rgba(139, 92, 246, 0.2) 8px 8px 16px 0px, rgba(255, 255, 255, 0.5) -4px -4px 8px 0px',
  ],
};

// ============================================================================
// TERMINAL CLI STYLE
// ============================================================================

export const terminal: DesignTokens = {
  name: 'Terminal CLI',
  description: 'Retro terminal/command-line aesthetic with phosphor green text on dark background. Monospace everything, blinking cursors, and ASCII-style decorations.',
  mode: 'dark',
  type: 'mono',
  colors: {
    primary: '#33FF00', // Matrix green
    secondary: '#1F521F', // Dark green
    background: '#0A0A0A',
    foreground: '#33FF00',
    muted: 'rgba(51, 255, 0, 0.6)',
    border: '#33FF00',
  },
  typography: {
    fontFamily: {
      display: '"JetBrains Mono", monospace',
      body: '"JetBrains Mono", monospace',
      mono: '"JetBrains Mono", monospace',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '40px', '48px', '64px'],
    fontWeights: [400, 500, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96],
  },
  borderRadius: ['0px'], // Sharp terminal edges
  shadows: [], // No shadows in terminal
  effects: {
    // CRT-like glow effect
    blur: 'drop-shadow(0 0 8px rgba(51, 255, 0, 0.5))',
  },
};

// ============================================================================
// ALL STYLES COLLECTION
// ============================================================================

export const allStyles = {
  monochrome,
  cyberpunk,
  neoBrutalism,
  saasTech,
  claymorphism,
  terminal,
} as const;

export type StyleName = keyof typeof allStyles;

// ============================================================================
// STYLE METADATA
// ============================================================================

export const styleMetadata = [
  { id: 'monochrome', name: 'Monochrome', mode: 'light', type: 'serif', category: 'Editorial' },
  { id: 'cyberpunk', name: 'Cyberpunk', mode: 'dark', type: 'mono', category: 'Futuristic' },
  { id: 'neoBrutalism', name: 'Neo Brutalism', mode: 'light', type: 'sans', category: 'Bold' },
  { id: 'saasTech', name: 'SaaS Tech', mode: 'light', type: 'sans', category: 'Professional' },
  { id: 'claymorphism', name: 'Claymorphism', mode: 'light', type: 'sans', category: 'Playful' },
  { id: 'terminal', name: 'Terminal CLI', mode: 'dark', type: 'mono', category: 'Developer' },
] as const;

// ============================================================================
// ADDITIONAL DESIGNPROMPTS.DEV STYLES (Metadata)
// Full tokens available at designprompts.dev
// ============================================================================

export const additionalStyles = [
  { id: 'bauhaus', name: 'Bauhaus', mode: 'light', type: 'sans' },
  { id: 'modern-dark', name: 'Modern Dark', mode: 'dark', type: 'sans' },
  { id: 'newsprint', name: 'Newsprint', mode: 'light', type: 'serif' },
  { id: 'luxury', name: 'Luxury', mode: 'light', type: 'serif' },
  { id: 'swiss-minimalist', name: 'Swiss Minimalist', mode: 'light', type: 'sans' },
  { id: 'kinetic', name: 'Kinetic', mode: 'dark', type: 'sans' },
  { id: 'flat-design', name: 'Flat Design', mode: 'light', type: 'sans' },
  { id: 'art-deco', name: 'Art Deco', mode: 'dark', type: 'serif' },
  { id: 'material-design', name: 'Material Design', mode: 'light', type: 'sans' },
  { id: 'bold-typography', name: 'Bold Typography', mode: 'dark', type: 'sans' },
  { id: 'academia', name: 'Academia', mode: 'light', type: 'serif' },
  { id: 'web3', name: 'Web3', mode: 'dark', type: 'sans' },
  { id: 'playful-geometric', name: 'Playful Geometric', mode: 'light', type: 'sans' },
  { id: 'minimal-dark', name: 'Minimal Dark', mode: 'dark', type: 'sans' },
  { id: 'professional', name: 'Professional', mode: 'light', type: 'sans' },
  { id: 'botanical', name: 'Botanical', mode: 'light', type: 'serif' },
  { id: 'vaporwave', name: 'Vaporwave', mode: 'dark', type: 'sans' },
  { id: 'enterprise', name: 'Enterprise', mode: 'light', type: 'sans' },
  { id: 'sketch', name: 'Sketch', mode: 'light', type: 'sans' },
  { id: 'industrial', name: 'Industrial', mode: 'light', type: 'sans' },
  { id: 'neumorphism', name: 'Neumorphism', mode: 'light', type: 'sans' },
  { id: 'organic', name: 'Organic', mode: 'light', type: 'sans' },
  { id: 'maximalism', name: 'Maximalism', mode: 'light', type: 'sans' },
  { id: 'retro', name: 'Retro', mode: 'light', type: 'sans' },
] as const;

export default allStyles;
