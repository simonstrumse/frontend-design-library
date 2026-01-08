// Design tokens and metadata for the design system browser

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

export interface StyleMetadata {
  id: string;
  name: string;
  mode: 'light' | 'dark';
  type: 'sans' | 'serif' | 'mono';
  category: string;
  source?: string;
}

// All 33 design styles
export const allStyles: Record<string, DesignTokens> = {
  monochrome: {
    name: 'Monochrome',
    description: 'A stark, editorial design system built on pure black and white. No accent colors—just dramatic contrast, oversized serif typography, and precise geometric layouts.',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px'],
    shadows: ['rgb(0, 0, 0) 0px 0px 0px 2px'],
  },
  cyberpunk: {
    name: 'Cyberpunk',
    description: 'Neon-soaked, high-contrast dark theme with glowing accents, monospace typography, and grid overlays. Inspired by dystopian sci-fi and hacker aesthetics.',
    mode: 'dark',
    type: 'mono',
    colors: {
      primary: '#00FF88',
      secondary: '#00D4FF',
      accent: '#FF00FF',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '2px', '4px'],
    shadows: ['0 0 20px rgba(0, 255, 136, 0.3)', '0 0 40px rgba(0, 212, 255, 0.2)'],
    effects: { backdrop: 'blur(8px)' },
  },
  neoBrutalism: {
    name: 'Neo Brutalism',
    description: 'Bold, unapologetic design with hard shadows, thick borders, and vibrant colors. Inspired by brutalist architecture, reimagined for digital.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#FFD93D',
      secondary: '#FF6B6B',
      accent: '#C4B5FD',
      background: '#FFFDF5',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '4px', '8px', '12px'],
    shadows: ['rgb(0, 0, 0) 4px 4px 0px 0px', 'rgb(0, 0, 0) 6px 6px 0px 0px', 'rgb(0, 0, 0) 8px 8px 0px 0px'],
  },
  saasTech: {
    name: 'SaaS Tech',
    description: 'Clean, professional design optimized for B2B SaaS products. Features trustworthy blue, generous whitespace, and friendly rounded corners.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#0052FF',
      secondary: '#4D7CFF',
      background: '#FFFFFF',
      foreground: '#0F172A',
      muted: '#64748B',
      border: '#E2E8F0',
      card: '#F8FAFC',
      accent: '#F1F5F9',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['6px', '8px', '12px', '16px', '24px', '32px', '40px', '9999px'],
    shadows: ['0 1px 2px 0 rgba(0, 0, 0, 0.05)', '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)', '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'],
  },
  claymorphism: {
    name: 'Claymorphism',
    description: 'Soft, playful 3D design with puffy elements, gentle shadows, and pastel gradients. Elements appear like inflated clay or soft plastic.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#7C3AED',
      secondary: '#EC4899',
      accent: '#E0F2FE',
      background: '#F4F1FA',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '16px', '20px', '28px', '32px', '36px', '40px', '48px', '9999px'],
    shadows: ['rgba(139, 92, 246, 0.3) 12px 12px 24px 0px, rgba(255, 255, 255, 0.4) -8px -8px 16px 0px'],
  },
  terminal: {
    name: 'Terminal CLI',
    description: 'Retro terminal aesthetic with phosphor green text on dark background. Monospace everything, blinking cursors, and ASCII-style decorations.',
    mode: 'dark',
    type: 'mono',
    colors: {
      primary: '#33FF00',
      secondary: '#1F521F',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96] },
    borderRadius: ['0px'],
    shadows: [],
    effects: { blur: 'drop-shadow(0 0 8px rgba(51, 255, 0, 0.5))' },
  },
  bauhaus: {
    name: 'Bauhaus',
    description: 'Bold geometric design inspired by the Bauhaus movement. Primary colors (red, blue, yellow), strong black borders, and hard offset shadows.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#D02020',
      secondary: '#1040C0',
      accent: '#F0C020',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '6px', '8px', '12px', '16px'],
    shadows: ['rgb(0, 0, 0) 4px 4px 0px 0px', 'rgb(0, 0, 0) 8px 8px 0px 0px'],
  },
  neumorphism: {
    name: 'Neumorphism',
    description: 'Soft UI design with dual light/dark shadows creating an extruded, 3D appearance. Monochromatic color palette with subtle accents.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#6C63FF',
      secondary: '#38B2AC',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px'],
    shadows: ['rgba(163, 177, 198, 0.6) 5px 5px 10px 0px, rgba(255, 255, 255, 0.5) -5px -5px 10px 0px'],
  },
  luxury: {
    name: 'Luxury',
    description: 'Elegant, high-end design with gold accents, sophisticated serif typography, and refined color palette. Evokes premium brands.',
    mode: 'light',
    type: 'serif',
    colors: {
      primary: '#D4AF37',
      secondary: '#B8860B',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '6px', '8px', '12px', '16px'],
    shadows: ['rgba(0, 0, 0, 0.08) 0px 2px 12px 0px', 'rgba(0, 0, 0, 0.12) 0px 8px 32px 0px'],
  },
  artDeco: {
    name: 'Art Deco',
    description: '1920s-inspired design with geometric patterns, gold accents on dark backgrounds, and elegant typography.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#D4AF37',
      secondary: '#F2F0E4',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '6px', '8px', '12px', '16px'],
    shadows: ['rgba(212, 175, 55, 0.1) 0px 0px 10px 0px', 'rgba(212, 175, 55, 0.4) 0px 0px 25px 0px'],
    effects: { backdrop: 'blur(8px)' },
  },
  web3: {
    name: 'Web3',
    description: 'Futuristic crypto/blockchain aesthetic with orange/amber glow effects, dark backgrounds, and glassmorphism overlays.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#F7931A',
      secondary: '#EA580C',
      accent: '#FFD600',
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
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['4px', '6px', '8px', '12px', '16px'],
    shadows: ['rgba(247, 147, 26, 0.3) 0px 0px 10px 0px', 'rgba(247, 147, 26, 0.5) 0px 0px 15px 0px'],
    effects: { backdrop: 'blur(12px)' },
  },
  glassmorphism: {
    name: 'Glassmorphism',
    description: 'Frosted glass aesthetic with translucent backgrounds, blur effects, and subtle borders. Creates depth through layered transparent panels.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#7C3AED',
      secondary: '#06B6D4',
      background: '#0F172A',
      foreground: '#F8FAFC',
      muted: '#94A3B8',
      border: 'rgba(255, 255, 255, 0.1)',
      card: 'rgba(255, 255, 255, 0.1)',
      glass: 'rgba(255, 255, 255, 0.05)',
    },
    typography: {
      fontFamily: {
        display: 'Inter, ui-sans-serif, system-ui, sans-serif',
        body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '12px', '16px', '20px', '24px', '32px'],
    shadows: ['rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px'],
    effects: { backdrop: 'blur(16px)', blur: 'blur(8px)' },
  },
  sketch: {
    name: 'Sketch',
    description: 'Hand-drawn, playful aesthetic with wobbly borders, organic shapes, and casual typography. Perfect for creative brands.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#2D3748',
      secondary: '#4A5568',
      accent: '#ED8936',
      background: '#FFFDF7',
      foreground: '#1A202C',
      muted: '#718096',
      border: '#2D3748',
    },
    typography: {
      fontFamily: {
        display: '"Caveat", cursive, ui-sans-serif',
        body: '"Patrick Hand", cursive, ui-sans-serif',
      },
      fontSizes: ['14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96] },
    borderRadius: ['4px', '8px', '12px', '16px'],
    shadows: ['2px 2px 0px #2D3748', '4px 4px 0px #2D3748'],
  },
  industrial: {
    name: 'Industrial',
    description: 'Raw, utilitarian design inspired by factories and warehouses. Features exposed grid structures, bold typography, and muted earth tones.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#DC2626',
      secondary: '#F59E0B',
      background: '#F5F5F4',
      foreground: '#1C1917',
      muted: '#78716C',
      border: '#D6D3D1',
      card: '#E7E5E4',
    },
    typography: {
      fontFamily: {
        display: '"Bebas Neue", ui-sans-serif, system-ui, sans-serif',
        body: '"Roboto Condensed", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '24px', '32px', '48px', '64px', '80px', '96px'],
      fontWeights: [400, 500, 700, 900],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '2px', '4px'],
    shadows: ['rgba(0, 0, 0, 0.1) 0px 1px 3px 0px', 'rgba(0, 0, 0, 0.15) 0px 4px 6px 0px'],
  },
  organic: {
    name: 'Organic',
    description: 'Nature-inspired design with earthy colors, flowing curves, and botanical accents. Perfect for wellness and eco-friendly brands.',
    mode: 'light',
    type: 'serif',
    colors: {
      primary: '#059669',
      secondary: '#0D9488',
      accent: '#D97706',
      background: '#FEFDFB',
      foreground: '#1C1917',
      muted: '#6B7280',
      border: '#E5E7EB',
      card: '#F9FAFB',
    },
    typography: {
      fontFamily: {
        display: '"Cormorant Garamond", ui-serif, Georgia, serif',
        body: '"Source Sans Pro", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '16px', '24px', '32px', '48px', '9999px'],
    shadows: ['rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px'],
  },
  maximalism: {
    name: 'Maximalism',
    description: 'Bold, expressive design that embraces excess. Features vibrant colors, layered patterns, mixed typography, and dense visual information.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#EC4899',
      secondary: '#8B5CF6',
      accent: '#F59E0B',
      background: '#FAFAFA',
      foreground: '#18181B',
      muted: '#71717A',
      border: '#E4E4E7',
      tertiary: '#06B6D4',
    },
    typography: {
      fontFamily: {
        display: '"Archivo Black", ui-sans-serif, system-ui, sans-serif',
        body: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '56px', '72px', '96px', '128px'],
      fontWeights: [400, 500, 700, 900],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '8px', '16px', '32px', '9999px'],
    shadows: ['rgba(236, 72, 153, 0.3) 4px 4px 0px 0px', 'rgba(139, 92, 246, 0.3) 8px 8px 0px 0px'],
  },
  retro: {
    name: 'Retro',
    description: '70s/80s-inspired design with warm colors, rounded shapes, and nostalgic typography. Features orange, brown, and cream palettes.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#EA580C',
      secondary: '#92400E',
      accent: '#FBBF24',
      background: '#FEF3C7',
      foreground: '#451A03',
      muted: '#78350F',
      border: '#D97706',
      card: '#FDE68A',
    },
    typography: {
      fontFamily: {
        display: '"Righteous", ui-sans-serif, system-ui, sans-serif',
        body: '"Poppins", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '24px', '32px', '40px', '56px', '72px', '96px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '16px', '24px', '32px', '9999px'],
    shadows: ['rgba(234, 88, 12, 0.2) 0px 4px 8px 0px', 'rgba(146, 64, 14, 0.2) 0px 8px 16px 0px'],
  },
  vaporwave: {
    name: 'Vaporwave',
    description: '90s internet aesthetic with neon pink/cyan gradients, retro-futuristic elements, and nostalgic digital imagery.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#FF00FF',
      secondary: '#00FFFF',
      accent: '#FF6EC7',
      background: '#0D0221',
      foreground: '#FFFFFF',
      muted: '#B794F4',
      border: 'rgba(255, 0, 255, 0.3)',
      card: '#1A0533',
    },
    typography: {
      fontFamily: {
        display: '"Monoton", cursive, ui-sans-serif',
        body: '"VT323", monospace, ui-sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px', '80px', '96px'],
      fontWeights: [400, 500, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '4px', '8px', '16px'],
    shadows: ['rgba(255, 0, 255, 0.5) 0px 0px 20px 0px', 'rgba(0, 255, 255, 0.5) 0px 0px 40px 0px'],
    effects: { backdrop: 'blur(8px)' },
  },
  academia: {
    name: 'Academia',
    description: 'Classic scholarly aesthetic with rich browns, cream backgrounds, and traditional serif typography. Evokes old libraries and vintage books.',
    mode: 'light',
    type: 'serif',
    colors: {
      primary: '#7C2D12',
      secondary: '#92400E',
      accent: '#B45309',
      background: '#FEF7ED',
      foreground: '#1C1917',
      muted: '#78716C',
      border: '#D6D3D1',
      card: '#F5F5F4',
    },
    typography: {
      fontFamily: {
        display: '"EB Garamond", ui-serif, Georgia, serif',
        body: '"Libre Baskerville", ui-serif, Georgia, serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '4px', '8px'],
    shadows: ['rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px'],
  },
  playfulGeometric: {
    name: 'Playful Geometric',
    description: 'Fun, colorful design with bold geometric shapes, bright primary colors, and playful animations. Perfect for creative brands.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#3B82F6',
      secondary: '#EF4444',
      accent: '#FBBF24',
      background: '#FFFFFF',
      foreground: '#1E293B',
      muted: '#64748B',
      border: '#E2E8F0',
      tertiary: '#10B981',
    },
    typography: {
      fontFamily: {
        display: '"Fredoka One", ui-sans-serif, system-ui, sans-serif',
        body: '"Nunito", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '40px', '48px', '64px', '80px'],
      fontWeights: [400, 500, 600, 700, 800],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '12px', '16px', '24px', '32px', '9999px'],
    shadows: ['rgba(59, 130, 246, 0.3) 4px 4px 0px 0px', 'rgba(239, 68, 68, 0.3) 4px 4px 0px 0px'],
  },
  minimalDark: {
    name: 'Minimal Dark',
    description: 'Ultra-clean dark mode design with subtle grays, minimal decoration, and precise typography. Focus on content with maximum negative space.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA',
      background: '#09090B',
      foreground: '#FAFAFA',
      muted: '#71717A',
      border: '#27272A',
      card: '#18181B',
    },
    typography: {
      fontFamily: {
        display: 'Inter, ui-sans-serif, system-ui, sans-serif',
        body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['4px', '6px', '8px', '12px', '16px'],
    shadows: ['rgba(0, 0, 0, 0.2) 0px 1px 2px 0px', 'rgba(0, 0, 0, 0.3) 0px 4px 6px -1px'],
  },
  professional: {
    name: 'Professional',
    description: 'Clean, trustworthy corporate design with navy blue accents, ample whitespace, and conservative typography. Ideal for B2B and enterprise.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#1E40AF',
      secondary: '#3B82F6',
      background: '#FFFFFF',
      foreground: '#111827',
      muted: '#6B7280',
      border: '#E5E7EB',
      card: '#F9FAFB',
    },
    typography: {
      fontFamily: {
        display: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
        body: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['4px', '6px', '8px', '12px'],
    shadows: ['rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'],
  },
  botanical: {
    name: 'Botanical',
    description: 'Elegant plant-inspired design with deep greens, floral accents, and refined serif typography. Perfect for wellness and natural beauty.',
    mode: 'light',
    type: 'serif',
    colors: {
      primary: '#166534',
      secondary: '#15803D',
      accent: '#CA8A04',
      background: '#FEFCE8',
      foreground: '#14532D',
      muted: '#4D7C0F',
      border: '#A3E635',
      card: '#F7FEE7',
    },
    typography: {
      fontFamily: {
        display: '"Playfair Display", ui-serif, Georgia, serif',
        body: '"Lora", ui-serif, Georgia, serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['4px', '8px', '16px', '24px', '32px'],
    shadows: ['rgba(22, 101, 52, 0.1) 0px 2px 4px 0px', 'rgba(22, 101, 52, 0.15) 0px 4px 8px 0px'],
  },
  enterprise: {
    name: 'Enterprise',
    description: 'Serious, data-focused design for dashboards and enterprise applications. Features neutral colors, dense information layouts.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#4F46E5',
      secondary: '#7C3AED',
      background: '#F8FAFC',
      foreground: '#0F172A',
      muted: '#64748B',
      border: '#CBD5E1',
      card: '#FFFFFF',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
    typography: {
      fontFamily: {
        display: '"Inter", ui-sans-serif, system-ui, sans-serif',
        body: '"Inter", ui-sans-serif, system-ui, sans-serif',
        mono: '"JetBrains Mono", monospace',
      },
      fontSizes: ['10px', '11px', '12px', '13px', '14px', '16px', '18px', '20px', '24px', '30px', '36px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64] },
    borderRadius: ['2px', '4px', '6px', '8px'],
    shadows: ['rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px'],
  },
  modernDark: {
    name: 'Modern Dark',
    description: 'Contemporary dark mode design with vibrant accent colors, smooth gradients, and modern typography. Perfect for tech products.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      accent: '#06B6D4',
      background: '#0A0A0B',
      foreground: '#FAFAFA',
      muted: '#A1A1AA',
      border: '#27272A',
      card: '#18181B',
    },
    typography: {
      fontFamily: {
        display: '"Satoshi", ui-sans-serif, system-ui, sans-serif',
        body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['6px', '8px', '12px', '16px', '20px', '24px'],
    shadows: ['rgba(139, 92, 246, 0.2) 0px 4px 16px 0px', 'rgba(236, 72, 153, 0.15) 0px 8px 32px 0px'],
    effects: { backdrop: 'blur(12px)' },
  },
  newsprint: {
    name: 'Newsprint',
    description: 'Classic newspaper aesthetic with multi-column layouts, serif headlines, and black & white imagery. Evokes traditional journalism.',
    mode: 'light',
    type: 'serif',
    colors: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      background: '#F5F5F0',
      foreground: '#1A1A1A',
      muted: '#666666',
      border: '#D4D4D4',
      card: '#FFFFFF',
    },
    typography: {
      fontFamily: {
        display: '"Playfair Display", ui-serif, Georgia, serif',
        body: '"Source Serif Pro", ui-serif, Georgia, serif',
      },
      fontSizes: ['11px', '12px', '14px', '16px', '18px', '24px', '30px', '36px', '48px', '60px', '72px'],
      fontWeights: [400, 500, 600, 700, 900],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96] },
    borderRadius: ['0px'],
    shadows: [],
  },
  swissMinimalist: {
    name: 'Swiss Minimalist',
    description: 'Clean, grid-based design inspired by Swiss/International style. Features Helvetica-style typography and maximum clarity.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#000000',
      secondary: '#E53935',
      background: '#FFFFFF',
      foreground: '#000000',
      muted: '#757575',
      border: '#E0E0E0',
      card: '#FAFAFA',
    },
    typography: {
      fontFamily: {
        display: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      },
      fontSizes: ['10px', '12px', '14px', '16px', '18px', '21px', '24px', '36px', '48px', '60px', '72px', '96px'],
      fontWeights: [300, 400, 500, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128] },
    borderRadius: ['0px'],
    shadows: [],
  },
  kinetic: {
    name: 'Kinetic',
    description: 'Motion-focused design with dynamic elements, animation-ready layouts, and energetic color schemes. Perfect for sports and fitness.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#FF3D00',
      secondary: '#FFEA00',
      accent: '#00E676',
      background: '#0D0D0D',
      foreground: '#FFFFFF',
      muted: '#9E9E9E',
      border: '#424242',
      card: '#1A1A1A',
    },
    typography: {
      fontFamily: {
        display: '"Oswald", ui-sans-serif, system-ui, sans-serif',
        body: '"Roboto", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '24px', '32px', '48px', '64px', '80px', '96px', '128px'],
      fontWeights: [400, 500, 600, 700, 800],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['0px', '4px', '8px'],
    shadows: ['rgba(255, 61, 0, 0.4) 0px 4px 16px 0px', 'rgba(255, 234, 0, 0.3) 0px 8px 32px 0px'],
  },
  flatDesign: {
    name: 'Flat Design',
    description: 'Clean, 2D aesthetic with solid colors, no gradients or shadows, and simple geometric shapes. Emphasis on clarity.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#2196F3',
      secondary: '#4CAF50',
      accent: '#FF9800',
      background: '#FFFFFF',
      foreground: '#212121',
      muted: '#9E9E9E',
      border: '#E0E0E0',
      card: '#FAFAFA',
    },
    typography: {
      fontFamily: {
        display: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
        body: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px'],
      fontWeights: [400, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96] },
    borderRadius: ['4px', '8px', '12px', '16px'],
    shadows: [],
  },
  materialDesign: {
    name: 'Material Design',
    description: 'Google Material Design principles with elevation through shadows, vibrant colors, and motion design. Features 8dp grid system.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#6200EE',
      secondary: '#03DAC6',
      accent: '#BB86FC',
      background: '#FFFFFF',
      foreground: '#1D1D1D',
      muted: '#757575',
      border: '#E0E0E0',
      card: '#FFFFFF',
      error: '#B00020',
    },
    typography: {
      fontFamily: {
        display: '"Roboto", ui-sans-serif, system-ui, sans-serif',
        body: '"Roboto", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['10px', '12px', '14px', '16px', '20px', '24px', '34px', '48px', '60px', '96px'],
      fontWeights: [300, 400, 500, 700],
    },
    spacing: { base: 8, scale: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96] },
    borderRadius: ['4px', '8px', '12px', '16px', '24px', '28px'],
    shadows: ['rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px, rgba(0, 0, 0, 0.2) 0px 1px 5px 0px'],
  },
  boldTypography: {
    name: 'Bold Typography',
    description: 'Statement-making design where typography is the hero. Features oversized headlines, dramatic weight contrasts, minimal decoration.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
      background: '#0A0A0A',
      foreground: '#FFFFFF',
      muted: '#737373',
      border: '#262626',
      card: '#171717',
    },
    typography: {
      fontFamily: {
        display: '"Anton", ui-sans-serif, system-ui, sans-serif',
        body: '"Work Sans", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '20px', '24px', '36px', '48px', '72px', '96px', '128px', '192px'],
      fontWeights: [400, 500, 700, 900],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128] },
    borderRadius: ['0px', '4px', '8px'],
    shadows: [],
  },
  caramell: {
    name: 'Caramell',
    description: 'Warm, friendly design with caramel brown accents, cream backgrounds, and playful mixed typography. Features glassmorphism navigation.',
    mode: 'light',
    type: 'sans',
    colors: {
      primary: '#8B5A2B',
      secondary: '#D2691E',
      accent: '#FFD700',
      background: '#FFFDF5',
      foreground: '#1A1A1A',
      muted: '#6B7280',
      border: '#E5E7EB',
      card: '#FEFDFB',
    },
    typography: {
      fontFamily: {
        display: '"Geist", "Playfair Display", ui-sans-serif, system-ui, sans-serif',
        body: '"Geist", ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px', '96px'],
      fontWeights: [400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128] },
    borderRadius: ['8px', '12px', '16px', '20px', '24px', '9999px'],
    shadows: ['rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px'],
    effects: { backdrop: 'blur(12px)' },
  },
  aura: {
    name: 'Aura',
    description: 'Modern dark-first design with subtle grays, minimal decoration, and shadcn/ui-compatible HSL color system.',
    mode: 'dark',
    type: 'sans',
    colors: {
      primary: '#FAFAFA',
      secondary: '#A3A3A3',
      background: '#171717',
      foreground: '#FAFAFA',
      muted: '#A6A6A6',
      border: '#333333',
      card: '#1C1C1C',
      ring: '#CCCCCC',
    },
    typography: {
      fontFamily: {
        display: 'Inter, ui-sans-serif, system-ui, sans-serif',
        body: 'Inter, ui-sans-serif, system-ui, sans-serif',
      },
      fontSizes: ['8px', '10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px'],
      fontWeights: [100, 400, 500, 600, 700],
    },
    spacing: { base: 4, scale: [0, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96] },
    borderRadius: ['6px', '8px', '12px', '14px', '16px', '9999px'],
    shadows: ['rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1px -0.5px'],
    effects: { backdrop: 'blur(24px)' },
  },
};

export const styleMetadata: StyleMetadata[] = [
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
  { id: 'glassmorphism', name: 'Glassmorphism', mode: 'dark', type: 'sans', category: 'Modern' },
  { id: 'sketch', name: 'Sketch', mode: 'light', type: 'sans', category: 'Creative' },
  { id: 'industrial', name: 'Industrial', mode: 'light', type: 'sans', category: 'Bold' },
  { id: 'organic', name: 'Organic', mode: 'light', type: 'serif', category: 'Natural' },
  { id: 'maximalism', name: 'Maximalism', mode: 'light', type: 'sans', category: 'Bold' },
  { id: 'retro', name: 'Retro', mode: 'light', type: 'sans', category: 'Vintage' },
  { id: 'vaporwave', name: 'Vaporwave', mode: 'dark', type: 'sans', category: 'Futuristic' },
  { id: 'academia', name: 'Academia', mode: 'light', type: 'serif', category: 'Editorial' },
  { id: 'playfulGeometric', name: 'Playful Geometric', mode: 'light', type: 'sans', category: 'Playful' },
  { id: 'minimalDark', name: 'Minimal Dark', mode: 'dark', type: 'sans', category: 'Minimal' },
  { id: 'professional', name: 'Professional', mode: 'light', type: 'sans', category: 'Professional' },
  { id: 'botanical', name: 'Botanical', mode: 'light', type: 'serif', category: 'Natural' },
  { id: 'enterprise', name: 'Enterprise', mode: 'light', type: 'sans', category: 'Professional' },
  { id: 'modernDark', name: 'Modern Dark', mode: 'dark', type: 'sans', category: 'Modern' },
  { id: 'newsprint', name: 'Newsprint', mode: 'light', type: 'serif', category: 'Editorial' },
  { id: 'swissMinimalist', name: 'Swiss Minimalist', mode: 'light', type: 'sans', category: 'Minimal' },
  { id: 'kinetic', name: 'Kinetic', mode: 'dark', type: 'sans', category: 'Bold' },
  { id: 'flatDesign', name: 'Flat Design', mode: 'light', type: 'sans', category: 'Modern' },
  { id: 'materialDesign', name: 'Material Design', mode: 'light', type: 'sans', category: 'Modern' },
  { id: 'boldTypography', name: 'Bold Typography', mode: 'dark', type: 'sans', category: 'Editorial' },
  { id: 'caramell', name: 'Caramell', mode: 'light', type: 'sans', category: 'SaaS', source: 'caramell.app' },
  { id: 'aura', name: 'Aura', mode: 'dark', type: 'sans', category: 'Modern', source: 'aura.build' },
];

export const styleCategories = {
  Editorial: ['monochrome', 'academia', 'newsprint', 'boldTypography'],
  Futuristic: ['cyberpunk', 'vaporwave'],
  Bold: ['neoBrutalism', 'industrial', 'maximalism', 'kinetic'],
  Professional: ['saasTech', 'professional', 'enterprise'],
  Playful: ['claymorphism', 'playfulGeometric'],
  Developer: ['terminal'],
  Geometric: ['bauhaus'],
  'Soft UI': ['neumorphism'],
  Premium: ['luxury'],
  Vintage: ['artDeco', 'retro'],
  Crypto: ['web3'],
  Modern: ['glassmorphism', 'modernDark', 'flatDesign', 'materialDesign', 'aura'],
  Creative: ['sketch'],
  Natural: ['organic', 'botanical'],
  Minimal: ['minimalDark', 'swissMinimalist'],
  SaaS: ['caramell'],
};

export function getStyleById(id: string): DesignTokens | undefined {
  return allStyles[id];
}

export function getMetadataById(id: string): StyleMetadata | undefined {
  return styleMetadata.find(m => m.id === id);
}

export function getStylesByCategory(category: string): StyleMetadata[] {
  return styleMetadata.filter(m => m.category === category);
}

export function getStylesByMode(mode: 'light' | 'dark'): StyleMetadata[] {
  return styleMetadata.filter(m => m.mode === mode);
}

export function getStylesByType(type: 'sans' | 'serif' | 'mono'): StyleMetadata[] {
  return styleMetadata.filter(m => m.type === type);
}

export function getAllCategories(): string[] {
  return [...new Set(styleMetadata.map(m => m.category))];
}
