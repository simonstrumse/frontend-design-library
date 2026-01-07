/**
 * Frontend Library - AI Prompt Templates
 *
 * These prompts are reverse-engineered from designprompts.dev and enhanced
 * with learnings from caramell.app and Supabase Platform Kit.
 *
 * Use these prompts with Claude, GPT-4, or other AI assistants to generate
 * consistent, high-quality frontend code.
 */

import { DesignTokens, StyleName, allStyles } from '../tokens/design-tokens';

// ============================================================================
// BASE SYSTEM PROMPT
// ============================================================================

export const BASE_SYSTEM_PROMPT = `<role>
You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Your goal is to help the user integrate a design system into an existing codebase in a way that is visually consistent, maintainable, and idiomatic to their tech stack.

Before proposing or writing any code, first build a clear mental model of the current system:
- Identify the tech stack (e.g. React, Next.js, Vue, Tailwind, shadcn/ui, etc.).
- Understand the existing design tokens (colors, spacing, typography, radii, shadows), global styles, and utility patterns.
- Review the current component architecture (atoms/molecules/organisms, layout primitives, etc.) and naming conventions.
- Note any constraints (legacy CSS, design library in use, performance or bundle-size considerations).

Ask the user focused questions to understand their goals. Do they want:
- a specific component or page redesigned in the new style,
- existing components refactored to the new system, or
- new components built from scratch following the design language?
</role>

<approach>
When implementing designs:
1. Start with design tokens - colors, typography, spacing, shadows, border-radius
2. Build atomic components first (buttons, inputs, badges, cards)
3. Compose molecules from atoms (forms, card groups, navigation items)
4. Assemble organisms (headers, hero sections, feature grids, pricing tables)
5. Create page templates from organisms

Always:
- Use semantic HTML elements
- Ensure accessibility (ARIA labels, keyboard navigation, focus states)
- Implement responsive design (mobile-first)
- Consider dark/light mode support
- Use CSS custom properties or Tailwind for theming
- Keep bundle size minimal
</approach>`;

// ============================================================================
// STYLE-SPECIFIC PROMPT GENERATOR
// ============================================================================

export function generateStylePrompt(styleName: StyleName): string {
  const tokens = allStyles[styleName];
  return `${BASE_SYSTEM_PROMPT}

<design-system name="${tokens.name}">
${tokens.description}

<mode>${tokens.mode}</mode>
<typography-type>${tokens.type}</typography-type>

<colors>
${Object.entries(tokens.colors)
  .filter(([_, v]) => v)
  .map(([key, value]) => `  --${key}: ${value};`)
  .join('\n')}
</colors>

<typography>
  <font-display>${tokens.typography.fontFamily.display}</font-display>
  <font-body>${tokens.typography.fontFamily.body}</font-body>
  ${tokens.typography.fontFamily.mono ? `<font-mono>${tokens.typography.fontFamily.mono}</font-mono>` : ''}
  <font-sizes>${tokens.typography.fontSizes.join(', ')}</font-sizes>
  <font-weights>${tokens.typography.fontWeights.join(', ')}</font-weights>
</typography>

<spacing>
  <base>${tokens.spacing.base}px</base>
  <scale>${tokens.spacing.scale.map(s => `${s}px`).join(', ')}</scale>
</spacing>

<border-radius>
  ${tokens.borderRadius.join(', ')}
</border-radius>

<shadows>
${tokens.shadows.map((s, i) => `  --shadow-${i + 1}: ${s};`).join('\n')}
</shadows>

${tokens.effects ? `<effects>
  ${tokens.effects.blur ? `<blur>${tokens.effects.blur}</blur>` : ''}
  ${tokens.effects.backdrop ? `<backdrop>${tokens.effects.backdrop}</backdrop>` : ''}
</effects>` : ''}
</design-system>

<implementation-guidelines>
Apply the "${tokens.name}" design language to all components:
${getStyleGuidelines(styleName)}
</implementation-guidelines>`;
}

// ============================================================================
// STYLE-SPECIFIC GUIDELINES
// ============================================================================

function getStyleGuidelines(styleName: StyleName): string {
  const guidelines: Record<StyleName, string> = {
    monochrome: `
- Use only black (#000), white (#FFF), and gray (#525252) colors
- Typography should be oversized and dramatic for headings
- Use serif fonts for display text, sans-serif for body
- No border-radius - keep all corners sharp and geometric
- Generous whitespace, editorial layouts
- High contrast between text and background
- Use thin black borders (1-2px) for subtle separation
- Focus states should use black ring shadows`,

    cyberpunk: `
- Dark backgrounds with neon accent colors (green, cyan, magenta)
- All text in monospace font
- Grid overlays and scan-line effects for authenticity
- Glowing shadows on interactive elements
- Sharp corners or minimal border-radius (2-4px max)
- Use brackets and technical notation (>_, ./, [ ])
- Terminal-style UI elements
- High-tech, dystopian aesthetic`,

    neoBrutalism: `
- Bold, saturated colors (yellow, coral, purple)
- Thick black borders (2-4px) on all interactive elements
- Hard offset shadows (4-8px) with no blur - black only
- Large, bold typography with heavy font weights
- Playful geometric shapes as decorations
- Dotted or grid pattern backgrounds
- Intentionally "unpolished" aesthetic
- Rotated elements for visual interest`,

    saasTech: `
- Professional blue primary color for trust
- Clean, minimal design with generous whitespace
- Rounded corners (8-16px) for friendly feel
- Subtle shadows for depth (avoid harsh shadows)
- System fonts for performance
- Clear visual hierarchy
- Consistent spacing scale
- Neutral grays for secondary elements
- Gradient accents used sparingly`,

    claymorphism: `
- Soft, puffy appearance on all elements
- Dual shadows: colored glow + white highlight
- Very rounded corners (16-48px)
- Pastel color palette with purple primary
- Soft, rounded sans-serif fonts (Nunito)
- Floating 3D elements as decorations
- Light, airy backgrounds
- Playful, approachable aesthetic
- Smooth transitions and hover effects`,

    terminal: `
- Pure green (#33FF00) on black (#0A0A0A) only
- 100% monospace typography
- No border-radius - sharp terminal edges
- No shadows - flat terminal aesthetic
- ASCII-style borders and decorations
- Command-line notation ($ > | [])
- Blinking cursor animations
- Scanline or CRT effects optional
- Status indicators and progress bars
- Matrix/hacker aesthetic`,
  };

  return guidelines[styleName] || '';
}

// ============================================================================
// COMPONENT-SPECIFIC PROMPTS
// ============================================================================

export const COMPONENT_PROMPTS = {
  hero: `Create a hero section with:
- Headline with strong visual hierarchy
- Supporting subheadline
- Primary and secondary CTA buttons
- Optional badge/label above headline
- Social proof element (logos, stats, or testimonial)
- Background treatment appropriate to the style`,

  features: `Create a features grid with:
- Section title and description
- 3-6 feature cards in a responsive grid
- Icon or illustration for each feature
- Feature title and description
- Consistent spacing and alignment`,

  pricing: `Create a pricing section with:
- Section title and description
- 2-4 pricing tiers
- Highlighted "popular" or "recommended" tier
- Feature checklist for each tier
- CTA button for each tier
- Annual/monthly toggle (optional)`,

  testimonials: `Create a testimonials section with:
- Section title
- 1-3 testimonial cards
- Quote text, author name, title, and company
- Optional author avatar/photo
- Optional company logo
- Visual treatment appropriate to style`,

  cta: `Create a call-to-action section with:
- Compelling headline
- Brief supporting text
- Email input + submit button, or single CTA button
- Optional background treatment or pattern`,

  footer: `Create a footer with:
- Company logo and tagline
- Navigation links grouped by category
- Social media links
- Legal links (Privacy, Terms)
- Copyright notice
- Newsletter signup (optional)`,

  navigation: `Create a navigation header with:
- Logo/brand on the left
- Main navigation links centered or right-aligned
- CTA button on the right
- Mobile menu with hamburger toggle
- Sticky/fixed positioning
- Backdrop blur on scroll (if appropriate)`,
};

// ============================================================================
// FULL PAGE PROMPT
// ============================================================================

export function generateLandingPagePrompt(styleName: StyleName): string {
  const stylePrompt = generateStylePrompt(styleName);

  return `${stylePrompt}

<task>
Create a complete landing page with the following sections:

1. **Navigation** - Sticky header with logo, links, and CTA
2. **Hero** - Headline, subheadline, CTAs, and social proof
3. **Stats/Metrics** - 3-4 key numbers with labels
4. **Features** - 6 features in a responsive grid
5. **How It Works** - 3-step process explanation
6. **Benefits** - 4 benefit cards
7. **Testimonials** - 3 customer testimonials
8. **Pricing** - 3 pricing tiers
9. **FAQ** - 6 frequently asked questions with accordion
10. **CTA** - Final call-to-action section
11. **Footer** - Links, social media, legal

Use a fictional SaaS product called "Acme Platform" for placeholder content.
Use Tailwind CSS for styling.
Make it fully responsive (mobile, tablet, desktop).
Include hover states and focus styles for accessibility.
</task>`;
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  BASE_SYSTEM_PROMPT,
  generateStylePrompt,
  generateLandingPagePrompt,
  COMPONENT_PROMPTS,
};
