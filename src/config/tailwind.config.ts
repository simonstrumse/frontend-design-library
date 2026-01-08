/**
 * Frontend Library - Tailwind Configuration Helpers
 *
 * Generate Tailwind CSS configurations from design tokens.
 * Compatible with Tailwind CSS v3 and v4.
 */

import { DesignTokens, StyleName, allStyles } from '../tokens/design-tokens';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface TailwindTheme {
  colors: Record<string, string>;
  fontFamily: Record<string, string[]>;
  fontSize: Record<string, string>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  boxShadow: Record<string, string>;
  extend?: Record<string, unknown>;
}

export interface TailwindConfig {
  darkMode: 'class' | 'media' | ['class', string];
  theme: {
    extend: TailwindTheme;
  };
  plugins?: string[];
}

// ============================================================================
// CSS VARIABLE GENERATORS
// ============================================================================

/**
 * Generate CSS custom properties from design tokens
 * Output can be added to your global CSS :root selector
 */
export function generateCSSVariables(tokens: DesignTokens): string {
  const lines: string[] = [':root {'];

  // Colors
  Object.entries(tokens.colors).forEach(([key, value]) => {
    if (value) {
      lines.push(`  --${key}: ${value};`);
    }
  });

  // Typography
  lines.push(`  --font-display: ${tokens.typography.fontFamily.display};`);
  lines.push(`  --font-body: ${tokens.typography.fontFamily.body};`);
  if (tokens.typography.fontFamily.mono) {
    lines.push(`  --font-mono: ${tokens.typography.fontFamily.mono};`);
  }

  // Spacing
  tokens.spacing.scale.forEach((value, index) => {
    lines.push(`  --spacing-${index}: ${value}px;`);
  });

  // Border radius
  tokens.borderRadius.forEach((value, index) => {
    lines.push(`  --radius-${index}: ${value};`);
  });

  // Shadows
  tokens.shadows.forEach((value, index) => {
    lines.push(`  --shadow-${index + 1}: ${value};`);
  });

  // Effects
  if (tokens.effects?.blur) {
    lines.push(`  --blur: ${tokens.effects.blur};`);
  }
  if (tokens.effects?.backdrop) {
    lines.push(`  --backdrop: ${tokens.effects.backdrop};`);
  }

  lines.push('}');
  return lines.join('\n');
}

/**
 * Generate HSL-based CSS variables (shadcn/ui compatible)
 * This is the format used by shadcn/ui and Supabase UI
 */
export function generateHSLVariables(tokens: DesignTokens): string {
  const hexToHSL = (hex: string): string => {
    // Remove # if present
    hex = hex.replace('#', '');

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  const lines: string[] = [':root {'];

  Object.entries(tokens.colors).forEach(([key, value]) => {
    if (value && value.startsWith('#')) {
      lines.push(`  --${key}: ${hexToHSL(value)};`);
    } else if (value) {
      lines.push(`  --${key}: ${value};`);
    }
  });

  lines.push('}');
  return lines.join('\n');
}

// ============================================================================
// TAILWIND CONFIG GENERATORS
// ============================================================================

/**
 * Generate a complete Tailwind theme extension from design tokens
 */
export function generateTailwindTheme(tokens: DesignTokens): TailwindTheme {
  // Colors
  const colors: Record<string, string> = {};
  Object.entries(tokens.colors).forEach(([key, value]) => {
    if (value) {
      colors[key] = value;
    }
  });

  // Font families
  const fontFamily: Record<string, string[]> = {
    display: tokens.typography.fontFamily.display.split(',').map(f => f.trim()),
    body: tokens.typography.fontFamily.body.split(',').map(f => f.trim()),
  };
  if (tokens.typography.fontFamily.mono) {
    fontFamily.mono = tokens.typography.fontFamily.mono.split(',').map(f => f.trim());
  }

  // Font sizes
  const fontSize: Record<string, string> = {};
  tokens.typography.fontSizes.forEach((size, index) => {
    fontSize[`${index}`] = size;
  });

  // Spacing
  const spacing: Record<string, string> = {};
  tokens.spacing.scale.forEach((value, index) => {
    spacing[`${index}`] = `${value}px`;
  });

  // Border radius
  const borderRadius: Record<string, string> = {};
  tokens.borderRadius.forEach((value, index) => {
    const names = ['none', 'sm', 'DEFAULT', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];
    const name = names[index] || `${index}`;
    borderRadius[name] = value;
  });

  // Box shadows
  const boxShadow: Record<string, string> = {};
  tokens.shadows.forEach((value, index) => {
    const names = ['sm', 'DEFAULT', 'md', 'lg', 'xl', '2xl'];
    const name = names[index] || `${index}`;
    boxShadow[name] = value;
  });

  return {
    colors,
    fontFamily,
    fontSize,
    spacing,
    borderRadius,
    boxShadow,
  };
}

/**
 * Generate a complete Tailwind configuration object
 */
export function generateTailwindConfig(styleName: StyleName): TailwindConfig {
  const tokens = allStyles[styleName];
  const theme = generateTailwindTheme(tokens);

  return {
    darkMode: tokens.mode === 'dark' ? 'class' : 'media',
    theme: {
      extend: theme,
    },
  };
}

/**
 * Generate Tailwind config as a string (for tailwind.config.js)
 */
export function generateTailwindConfigString(styleName: StyleName): string {
  const config = generateTailwindConfig(styleName);
  const tokens = allStyles[styleName];

  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '${tokens.mode === 'dark' ? 'class' : 'media'}',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: ${JSON.stringify(config.theme.extend, null, 6).replace(/"([^"]+)":/g, '$1:')},
  },
  plugins: [],
};`;
}

// ============================================================================
// SHADCN/UI COMPATIBLE CONFIG
// ============================================================================

/**
 * Generate shadcn/ui compatible CSS variables
 * This format is used by shadcn/ui, Supabase UI, and many modern component libraries
 */
export function generateShadcnVariables(tokens: DesignTokens): string {
  const mode = tokens.mode;

  const lines: string[] = [];

  if (mode === 'light') {
    lines.push(':root {');
  } else {
    lines.push('.dark {');
  }

  // Standard shadcn/ui semantic tokens
  lines.push(`  --background: ${tokens.colors.background};`);
  lines.push(`  --foreground: ${tokens.colors.foreground};`);

  if (tokens.colors.card) {
    lines.push(`  --card: ${tokens.colors.card};`);
    lines.push(`  --card-foreground: ${tokens.colors.foreground};`);
  }

  lines.push(`  --primary: ${tokens.colors.primary};`);
  lines.push(`  --primary-foreground: ${mode === 'dark' ? '#000000' : '#ffffff'};`);

  if (tokens.colors.secondary) {
    lines.push(`  --secondary: ${tokens.colors.secondary};`);
    lines.push(`  --secondary-foreground: ${tokens.colors.foreground};`);
  }

  if (tokens.colors.muted) {
    lines.push(`  --muted: ${tokens.colors.muted};`);
    lines.push(`  --muted-foreground: ${tokens.colors.muted};`);
  }

  if (tokens.colors.accent) {
    lines.push(`  --accent: ${tokens.colors.accent};`);
    lines.push(`  --accent-foreground: ${tokens.colors.foreground};`);
  }

  if (tokens.colors.border) {
    lines.push(`  --border: ${tokens.colors.border};`);
    lines.push(`  --input: ${tokens.colors.border};`);
    lines.push(`  --ring: ${tokens.colors.primary};`);
  }

  // Border radius
  if (tokens.borderRadius.length > 0) {
    lines.push(`  --radius: ${tokens.borderRadius[Math.min(2, tokens.borderRadius.length - 1)]};`);
  }

  lines.push('}');

  return lines.join('\n');
}

// ============================================================================
// PRESET CONFIGURATIONS
// ============================================================================

/**
 * Pre-built Tailwind configurations for each design style
 */
export const tailwindPresets = {
  monochrome: generateTailwindConfigString('monochrome'),
  cyberpunk: generateTailwindConfigString('cyberpunk'),
  neoBrutalism: generateTailwindConfigString('neoBrutalism'),
  saasTech: generateTailwindConfigString('saasTech'),
  claymorphism: generateTailwindConfigString('claymorphism'),
  terminal: generateTailwindConfigString('terminal'),
} as const;

/**
 * Pre-built CSS variables for each design style
 */
export const cssVariablePresets = {
  monochrome: generateCSSVariables(allStyles.monochrome),
  cyberpunk: generateCSSVariables(allStyles.cyberpunk),
  neoBrutalism: generateCSSVariables(allStyles.neoBrutalism),
  saasTech: generateCSSVariables(allStyles.saasTech),
  claymorphism: generateCSSVariables(allStyles.claymorphism),
  terminal: generateCSSVariables(allStyles.terminal),
} as const;

// ============================================================================
// UTILITY CLASSES GENERATOR
// ============================================================================

/**
 * Generate style-specific utility classes
 */
export function generateUtilityClasses(styleName: StyleName): string {
  const _tokens = allStyles[styleName]; // Reserved for future per-style utilities
  void _tokens;
  const lines: string[] = [];

  // Style-specific utilities
  switch (styleName) {
    case 'neoBrutalism':
      lines.push(`
/* Neo Brutalism Utilities */
.shadow-brutal {
  box-shadow: 4px 4px 0px 0px #000;
}
.shadow-brutal-lg {
  box-shadow: 8px 8px 0px 0px #000;
}
.border-brutal {
  border: 2px solid #000;
}
.hover-brutal {
  transition: transform 0.2s, box-shadow 0.2s;
}
.hover-brutal:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0px 0px #000;
}
.hover-brutal:active {
  transform: translate(0, 0);
  box-shadow: 4px 4px 0px 0px #000;
}`);
      break;

    case 'terminal':
      lines.push(`
/* Terminal Utilities */
.glow-terminal {
  text-shadow: 0 0 8px rgba(51, 255, 0, 0.5);
}
.border-terminal {
  border: 1px solid #33FF00;
}
.bg-terminal {
  background-color: #0A0A0A;
}
.text-terminal {
  color: #33FF00;
  font-family: "JetBrains Mono", monospace;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.cursor-blink::after {
  content: '_';
  animation: blink 1s infinite;
}`);
      break;

    case 'cyberpunk':
      lines.push(`
/* Cyberpunk Utilities */
.glow-neon {
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
}
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}
.glow-magenta {
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
}
.text-glow {
  text-shadow: 0 0 10px currentColor;
}
.grid-overlay {
  background-image:
    linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}`);
      break;

    case 'claymorphism':
      lines.push(`
/* Claymorphism Utilities */
.shadow-clay {
  box-shadow:
    8px 8px 16px rgba(139, 92, 246, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.5);
}
.shadow-clay-lg {
  box-shadow:
    12px 12px 24px rgba(139, 92, 246, 0.3),
    -8px -8px 16px rgba(255, 255, 255, 0.4);
}
.shadow-clay-inset {
  box-shadow:
    inset 4px 4px 8px rgba(139, 92, 246, 0.1),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9);
}`);
      break;

    case 'monochrome':
      lines.push(`
/* Monochrome Utilities */
.ring-mono {
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 2px;
}
.border-mono {
  border: 1px solid #000;
}
.border-mono-thick {
  border: 2px solid #000;
}`);
      break;

    case 'saasTech':
      lines.push(`
/* SaaS Tech Utilities */
.shadow-soft {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
.shadow-soft-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}
.gradient-primary {
  background: linear-gradient(135deg, #0052FF 0%, #4D7CFF 100%);
}`);
      break;
  }

  return lines.join('\n');
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  generateCSSVariables,
  generateHSLVariables,
  generateTailwindTheme,
  generateTailwindConfig,
  generateTailwindConfigString,
  generateShadcnVariables,
  generateUtilityClasses,
  tailwindPresets,
  cssVariablePresets,
};
