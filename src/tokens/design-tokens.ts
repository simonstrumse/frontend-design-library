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
// BAUHAUS STYLE
// ============================================================================

export const bauhaus: DesignTokens = {
  name: 'Bauhaus',
  description: 'Bold geometric design inspired by the Bauhaus movement. Primary colors (red, blue, yellow), strong black borders, hard offset shadows, and clean sans-serif typography.',
  mode: 'light',
  type: 'sans',
  colors: {
    primary: '#D02020', // Red
    secondary: '#1040C0', // Blue
    accent: '#F0C020', // Yellow
    background: '#FFFFFF',
    foreground: '#000000',
    muted: '#121212',
    border: '#000000',
    card: '#F0F0F0',
  },
  typography: {
    fontFamily: {
      display: 'Outfit, ui-sans-serif, system-ui, sans-serif',
      body: 'ui-sans-serif, system-ui, sans-serif',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px'],
    fontWeights: [400, 500, 600, 700, 800],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['0px', '6px', '8px', '12px', '16px'],
  shadows: [
    'rgb(0, 0, 0) 4px 4px 0px 0px',
    'rgb(0, 0, 0) 8px 8px 0px 0px',
    'rgb(0, 0, 0) 10px 10px 0px 0px',
    'rgb(0, 0, 0) 12px 12px 0px 0px',
  ],
};

// ============================================================================
// NEUMORPHISM STYLE
// ============================================================================

export const neumorphism: DesignTokens = {
  name: 'Neumorphism',
  description: 'Soft UI design with dual light/dark shadows creating an extruded, 3D appearance. Elements appear pushed out or inset into the surface. Monochromatic color palette with subtle accents.',
  mode: 'light',
  type: 'sans',
  colors: {
    primary: '#6C63FF', // Purple accent
    secondary: '#38B2AC', // Teal accent
    background: '#E0E5EC',
    foreground: '#3D4852',
    muted: '#8B95A5',
    border: 'transparent',
    card: '#E0E5EC',
  },
  typography: {
    fontFamily: {
      display: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
      body: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '72px', '96px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px'],
  shadows: [
    'rgba(163, 177, 198, 0.6) 5px 5px 10px 0px, rgba(255, 255, 255, 0.5) -5px -5px 10px 0px',
    'rgba(163, 177, 198, 0.6) 9px 9px 16px 0px, rgba(255, 255, 255, 0.5) -9px -9px 16px 0px',
    'rgba(163, 177, 198, 0.7) 12px 12px 20px 0px, rgba(255, 255, 255, 0.6) -12px -12px 20px 0px',
    'rgba(163, 177, 198, 0.6) 6px 6px 10px 0px inset, rgba(255, 255, 255, 0.5) -6px -6px 10px 0px inset',
  ],
};

// ============================================================================
// LUXURY STYLE
// ============================================================================

export const luxury: DesignTokens = {
  name: 'Luxury',
  description: 'Elegant, high-end design with gold accents, sophisticated serif typography, and refined color palette. Evokes premium brands, jewelry, and exclusive experiences.',
  mode: 'light',
  type: 'serif',
  colors: {
    primary: '#D4AF37', // Gold
    secondary: '#B8860B', // Dark gold
    background: '#F9F8F6',
    foreground: '#1A1A1A',
    muted: '#6C6863',
    border: 'rgba(26, 26, 26, 0.1)',
    card: '#EBE5DE',
    accent: 'rgba(235, 229, 222, 0.8)',
  },
  typography: {
    fontFamily: {
      display: '"Playfair Display", ui-serif, Georgia, serif',
      body: 'Inter, ui-sans-serif, system-ui, sans-serif',
    },
    fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '48px', '60px', '72px', '96px', '128px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['0px', '6px', '8px', '12px', '16px'],
  shadows: [
    'rgba(0, 0, 0, 0.08) 0px 2px 12px 0px',
    'rgba(0, 0, 0, 0.12) 0px 8px 32px 0px',
    'rgba(0, 0, 0, 0.15) 0px 4px 16px 0px',
  ],
};

// ============================================================================
// ART DECO STYLE
// ============================================================================

export const artDeco: DesignTokens = {
  name: 'Art Deco',
  description: '1920s-inspired design with geometric patterns, gold accents on dark backgrounds, and elegant typography. Features diamond patterns, golden glow effects, and luxurious aesthetics.',
  mode: 'dark',
  type: 'sans',
  colors: {
    primary: '#D4AF37', // Gold
    secondary: '#F2F0E4', // Cream
    background: '#0A0A0A',
    foreground: '#F2F0E4',
    muted: '#888888',
    border: 'rgba(212, 175, 55, 0.3)',
    card: '#141414',
    glow: 'rgba(212, 175, 55, 0.3)',
  },
  typography: {
    fontFamily: {
      display: '"Josefin Sans", ui-sans-serif, system-ui, sans-serif',
      body: '"Josefin Sans", ui-sans-serif, system-ui, sans-serif',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['0px', '6px', '8px', '12px', '16px'],
  shadows: [
    'rgba(212, 175, 55, 0.1) 0px 0px 10px 0px',
    'rgba(212, 175, 55, 0.1) 0px 0px 15px 0px',
    'rgba(212, 175, 55, 0.1) 0px 0px 30px 0px',
    'rgba(212, 175, 55, 0.4) 0px 0px 25px 0px',
  ],
  effects: {
    backdrop: 'blur(8px)',
  },
};

// ============================================================================
// WEB3 / CRYPTO STYLE
// ============================================================================

export const web3: DesignTokens = {
  name: 'Web3',
  description: 'Futuristic crypto/blockchain aesthetic with orange/amber glow effects, dark backgrounds, and modern typography. Features glassmorphism overlays and grid patterns.',
  mode: 'dark',
  type: 'sans',
  colors: {
    primary: '#F7931A', // Bitcoin orange
    secondary: '#EA580C', // Deep orange
    accent: '#FFD600', // Gold/yellow
    background: '#030304',
    foreground: '#FFFFFF',
    muted: '#94A3B8',
    border: 'rgba(247, 147, 26, 0.3)',
    card: '#0F1115',
    glow: 'rgba(247, 147, 26, 0.4)',
  },
  typography: {
    fontFamily: {
      display: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
      body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
    fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '72px'],
    fontWeights: [400, 500, 600, 700],
  },
  spacing: {
    base: 4,
    scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128],
  },
  borderRadius: ['4px', '6px', '8px', '12px', '16px'],
  shadows: [
    'rgba(247, 147, 26, 0.3) 0px 0px 10px 0px',
    'rgba(247, 147, 26, 0.4) 0px 0px 15px 0px',
    'rgba(247, 147, 26, 0.5) 0px 0px 15px 0px',
    'rgba(247, 147, 26, 0.2) 0px 0px 20px -5px',
  ],
  effects: {
    backdrop: 'blur(12px)',
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
  bauhaus,
  neumorphism,
  luxury,
  artDeco,
  web3,
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
  { id: 'bauhaus', name: 'Bauhaus', mode: 'light', type: 'sans', category: 'Geometric' },
  { id: 'neumorphism', name: 'Neumorphism', mode: 'light', type: 'sans', category: 'Soft UI' },
  { id: 'luxury', name: 'Luxury', mode: 'light', type: 'serif', category: 'Premium' },
  { id: 'artDeco', name: 'Art Deco', mode: 'dark', type: 'sans', category: 'Vintage' },
  { id: 'web3', name: 'Web3', mode: 'dark', type: 'sans', category: 'Crypto' },
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
