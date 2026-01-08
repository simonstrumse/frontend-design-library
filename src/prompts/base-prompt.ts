/**
 * Frontend Library - AI Prompt Templates
 *
 * These prompts are reverse-engineered from designprompts.dev and enhanced
 * with learnings from caramell.app and Supabase Platform Kit.
 *
 * Use these prompts with Claude, GPT-4, or other AI assistants to generate
 * consistent, high-quality frontend code.
 */

import { StyleName, allStyles } from '../tokens/design-tokens';

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
  const guidelines: Partial<Record<StyleName, string>> = {
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

    bauhaus: `
- Primary colors only: red, blue, yellow with black and white
- Strong black borders (2-4px) on elements
- Hard offset shadows with no blur
- Bold, geometric sans-serif typography
- Geometric shapes as design elements (circles, squares, triangles)
- Grid-based layouts
- No gradients - flat solid colors only
- Minimal decoration, functional design`,

    neumorphism: `
- Soft, extruded 3D appearance
- Dual shadows: light (white) and dark (gray) on opposite sides
- Very soft, muted color palette
- Rounded corners (12-24px)
- Elements appear pushed out or inset into surface
- Subtle monochromatic accent colors
- Soft, clean sans-serif typography
- Avoid high contrast - keep everything soft`,

    luxury: `
- Gold/champagne primary accent color
- Sophisticated serif fonts for display text
- Light, neutral backgrounds (cream, off-white)
- Subtle shadows for elegant depth
- Generous whitespace and padding
- Thin, refined borders
- Elegant transitions and animations
- Premium, high-end aesthetic`,

    artDeco: `
- Gold accents on dark backgrounds
- Geometric patterns (diamonds, chevrons, fans)
- Art Deco inspired typography
- Strong symmetry in layouts
- Decorative borders and frames
- Golden glow effects on key elements
- 1920s vintage luxury aesthetic
- Sharp geometric corners`,

    web3: `
- Orange/amber as primary accent on dark background
- Glassmorphism overlays with blur
- Grid patterns and tech overlays
- Glowing accent colors
- Modern sans-serif typography (Space Grotesk)
- Crypto/blockchain inspired iconography
- Dark, futuristic aesthetic
- Gradient borders and glows`,

    glassmorphism: `
- Frosted glass effect with backdrop blur
- Semi-transparent backgrounds
- Soft, subtle borders (1px white/10%)
- Layered depth through transparency
- Clean, modern sans-serif typography
- Soft shadows for floating effect
- Dark background to enhance glass effect
- Subtle gradient overlays`,

    sketch: `
- Hand-drawn, organic appearance
- Slightly wobbly borders and lines
- Casual, friendly typography (cursive/handwritten)
- Neutral color palette with orange accents
- Imperfect, human aesthetic
- Simple offset shadows
- Playful decorative elements
- Paper-like backgrounds`,

    industrial: `
- Raw, utilitarian design
- Bold condensed typography
- Red and yellow warning-style accents
- Exposed grid structures
- Minimal border-radius
- Muted earth tones
- Factory/warehouse aesthetic
- Functional, no-frills approach`,

    organic: `
- Nature-inspired green color palette
- Flowing, curved shapes
- Elegant serif typography
- Soft, natural shadows
- Rounded corners (24-48px)
- Botanical or natural imagery
- Warm, earthy accent colors
- Wellness/eco-friendly aesthetic`,

    maximalism: `
- Bold, vibrant color combinations
- Multiple colors used together
- Dense, layered visual elements
- Mixed typography styles
- Colorful offset shadows
- Patterns and textures
- More is more aesthetic
- High visual energy`,

    retro: `
- 70s/80s warm color palette (orange, brown, cream)
- Rounded, friendly typography
- Very rounded corners (24-32px)
- Warm gradient backgrounds
- Nostalgic, vintage aesthetic
- Soft, warm shadows
- Friendly, approachable feel
- Retro-inspired patterns`,

    vaporwave: `
- Neon pink and cyan color scheme
- Dark purple backgrounds
- Retro-futuristic typography
- Grid patterns and gradients
- Glowing neon effects
- 80s/90s digital aesthetic
- Sunset gradient colors
- Nostalgic cyber aesthetic`,

    academia: `
- Rich brown and cream color palette
- Traditional serif typography
- Scholarly, intellectual aesthetic
- Minimal border-radius
- Book-inspired design elements
- Warm, aged paper backgrounds
- Classic, timeless feel
- Refined, educational tone`,

    playfulGeometric: `
- Bright primary colors (blue, red, yellow, green)
- Bold geometric shapes
- Colorful offset shadows
- Rounded, friendly typography
- Playful animations
- Game-like aesthetic
- Fun, energetic feel
- Highly rounded corners`,

    minimalDark: `
- Ultra-minimal dark design
- Subtle gray color variations
- Maximum negative space
- Clean sans-serif typography (Inter)
- Subtle borders and shadows
- Focus on content
- Monochromatic with white accents
- Refined, quiet aesthetic`,

    professional: `
- Navy blue corporate color scheme
- Conservative, trustworthy design
- Clean sans-serif typography (IBM Plex)
- Ample whitespace
- Subtle shadows for depth
- Corporate, B2B aesthetic
- Clear visual hierarchy
- Professional, serious tone`,

    botanical: `
- Deep green color palette
- Elegant serif typography
- Floral/botanical accents
- Yellow/gold accent colors
- Soft, natural shadows
- Garden/nature inspired
- Refined, elegant aesthetic
- Wellness/beauty tone`,

    enterprise: `
- Data-focused, dense layouts
- Neutral color palette with indigo accents
- Small, functional typography
- Tight spacing
- Information-dense design
- Dashboard aesthetic
- Functional components
- Professional, serious tone`,

    modernDark: `
- Vibrant purple/pink accents on dark
- Smooth gradients
- Modern sans-serif typography
- Rounded corners (12-24px)
- Glowing accent shadows
- Tech-forward aesthetic
- Backdrop blur effects
- Contemporary dark mode`,

    newsprint: `
- Black and white newspaper aesthetic
- Serif headlines, serif body
- Multi-column layouts
- No border-radius
- No shadows - flat design
- Dense typography
- Editorial, journalistic feel
- Classic newspaper look`,

    swissMinimalist: `
- Black, white, and red only
- Helvetica-style typography
- Strong grid-based layouts
- No border-radius
- No shadows
- Maximum clarity
- International/Swiss style
- Clean, minimal aesthetic`,

    kinetic: `
- High-energy color scheme (orange, yellow, green)
- Bold, condensed typography
- Motion-inspired layouts
- Sharp corners or minimal radius
- Dynamic, energetic feel
- Sports/fitness aesthetic
- Glowing accent shadows
- Action-oriented design`,

    flatDesign: `
- Solid, flat colors (no gradients)
- No shadows - completely flat
- Simple geometric shapes
- Clean sans-serif typography
- Rounded corners (8-16px)
- High contrast colors
- Simple, clear aesthetic
- 2D, icon-like elements`,

    materialDesign: `
- Google Material Design principles
- Elevation through shadows
- 8dp grid system
- Motion and transitions
- Vibrant primary colors
- Rounded corners (4-28px)
- Paper-like surfaces
- Clear visual hierarchy`,

    boldTypography: `
- Typography as the hero element
- Oversized headlines (96-192px)
- High contrast weight combinations
- Minimal decoration
- Dark backgrounds
- Maximum impact through type
- Condensed/compressed fonts
- Dramatic, statement-making`,

    caramell: `
- Warm caramel/brown color palette
- Cream backgrounds
- Mixed serif/sans typography
- Rounded corners (12-24px)
- Glassmorphism navigation
- Soft, subtle shadows
- Warm, friendly aesthetic
- Modern SaaS feel`,

    aura: `
- Minimal dark-first design
- Subtle gray variations
- shadcn/ui compatible HSL colors
- Layered soft shadows
- Clean Inter typography
- Elegant transitions
- Refined, quiet aesthetic
- Modern component library feel`,

    wiseDesign: `
- Bright green (#9FE870) as primary brand color
- Forest green (#163300) for interactive elements
- Clean white backgrounds
- Inter for functional text, Wise Sans for display
- Clear accessible color contrast
- Rounded corners (8-24px)
- Subtle, professional shadows
- Trust indicators and clear CTAs
- Fintech/financial services aesthetic
- Global, accessible design language`,
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
