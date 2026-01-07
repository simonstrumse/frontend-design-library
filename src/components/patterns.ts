/**
 * Frontend Library - Component Patterns
 *
 * Reusable component patterns extracted from:
 * - designprompts.dev templates
 * - caramell.app landing pages
 * - Supabase Platform Kit
 * - aura.build components
 */

// ============================================================================
// BUTTON PATTERNS
// ============================================================================

export const buttonPatterns = {
  // Primary button - main CTA
  primary: {
    base: 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    sizes: {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg',
    },
    variants: {
      solid: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'text-primary hover:bg-primary/10',
      link: 'text-primary underline-offset-4 hover:underline',
    },
  },

  // Neo Brutalism button
  neoBrutalist: {
    base: 'inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all border-2 border-black',
    hover: 'hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_#000]',
    active: 'active:translate-x-0 active:translate-y-0 active:shadow-none',
    colors: {
      yellow: 'bg-[#FFD93D] text-black',
      coral: 'bg-[#FF6B6B] text-black',
      purple: 'bg-[#C4B5FD] text-black',
      white: 'bg-white text-black',
    },
  },

  // Terminal button
  terminal: {
    base: 'inline-flex items-center justify-center font-mono text-[#33FF00] border border-[#33FF00] bg-transparent',
    hover: 'hover:bg-[#33FF00] hover:text-black',
    bracket: '[ {text} ]', // Terminal style with brackets
  },

  // Claymorphism button
  clay: {
    base: 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all',
    shadow: 'shadow-[8px_8px_16px_rgba(139,92,246,0.2),-4px_-4px_8px_rgba(255,255,255,0.5)]',
    hover: 'hover:shadow-[12px_12px_24px_rgba(139,92,246,0.3),-8px_-8px_16px_rgba(255,255,255,0.4)]',
  },
};

// ============================================================================
// CARD PATTERNS
// ============================================================================

export const cardPatterns = {
  // Standard card
  standard: {
    base: 'rounded-lg border bg-card text-card-foreground',
    shadow: 'shadow-sm',
    hover: 'hover:shadow-md transition-shadow',
    padding: 'p-6',
  },

  // Feature card
  feature: {
    base: 'flex flex-col gap-4 p-6 rounded-xl',
    icon: 'w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary',
    title: 'text-lg font-semibold',
    description: 'text-muted-foreground',
  },

  // Pricing card
  pricing: {
    base: 'flex flex-col rounded-2xl border bg-card p-8',
    popular: 'ring-2 ring-primary relative',
    popularBadge: 'absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium',
    price: 'text-4xl font-bold',
    period: 'text-muted-foreground',
    features: 'space-y-3 mt-8',
    featureItem: 'flex items-center gap-3',
    checkIcon: 'w-5 h-5 text-green-500',
    cta: 'mt-8',
  },

  // Testimonial card
  testimonial: {
    base: 'flex flex-col gap-4 p-6 rounded-xl bg-muted/50',
    quote: 'text-lg italic',
    author: 'flex items-center gap-3 mt-4',
    avatar: 'w-10 h-10 rounded-full',
    name: 'font-medium',
    title: 'text-sm text-muted-foreground',
  },

  // Neo Brutalist card
  neoBrutalist: {
    base: 'border-2 border-black bg-white',
    shadow: 'shadow-[4px_4px_0px_0px_#000]',
    hover: 'hover:shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all',
  },

  // Glass card (for cyberpunk/modern dark)
  glass: {
    base: 'backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl',
    glow: 'shadow-[0_0_30px_rgba(0,255,136,0.2)]',
  },
};

// ============================================================================
// SECTION PATTERNS
// ============================================================================

export const sectionPatterns = {
  // Hero section
  hero: {
    container: 'relative overflow-hidden',
    content: 'container mx-auto px-4 py-20 lg:py-32',
    layout: 'flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between gap-12',
    badge: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary',
    headline: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
    subheadline: 'text-xl text-muted-foreground max-w-2xl',
    ctas: 'flex flex-col sm:flex-row gap-4',
    socialProof: 'flex items-center gap-4 mt-8',
  },

  // Features grid
  features: {
    container: 'py-20 lg:py-32',
    header: 'text-center max-w-3xl mx-auto mb-16',
    title: 'text-3xl md:text-4xl font-bold',
    description: 'text-lg text-muted-foreground mt-4',
    grid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
  },

  // Stats section
  stats: {
    container: 'py-16 bg-muted/50',
    grid: 'container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8',
    stat: 'text-center',
    value: 'text-4xl md:text-5xl font-bold',
    label: 'text-muted-foreground mt-2',
  },

  // Pricing section
  pricing: {
    container: 'py-20 lg:py-32',
    header: 'text-center max-w-3xl mx-auto mb-16',
    toggle: 'flex items-center justify-center gap-4 mb-12',
    grid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto',
  },

  // FAQ section
  faq: {
    container: 'py-20 lg:py-32',
    header: 'text-center max-w-3xl mx-auto mb-16',
    accordion: 'max-w-3xl mx-auto divide-y',
    item: 'py-6',
    question: 'flex items-center justify-between w-full text-left font-medium',
    answer: 'mt-4 text-muted-foreground',
  },

  // CTA section
  cta: {
    container: 'py-20 lg:py-32 bg-primary text-primary-foreground',
    content: 'container mx-auto px-4 text-center max-w-3xl',
    title: 'text-3xl md:text-4xl font-bold',
    description: 'text-lg opacity-90 mt-4',
    form: 'flex flex-col sm:flex-row gap-4 mt-8 max-w-md mx-auto',
    input: 'flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60',
    button: 'px-6 py-3 rounded-lg bg-white text-primary font-medium',
  },
};

// ============================================================================
// NAVIGATION PATTERNS
// ============================================================================

export const navigationPatterns = {
  // Standard header
  header: {
    container: 'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
    inner: 'container mx-auto px-4 flex h-16 items-center justify-between',
    logo: 'font-bold text-xl',
    nav: 'hidden md:flex items-center gap-6',
    navLink: 'text-sm font-medium text-muted-foreground hover:text-foreground transition-colors',
    ctas: 'flex items-center gap-4',
    mobileMenu: 'md:hidden',
    hamburger: 'w-6 h-6',
  },

  // Mobile navigation
  mobileNav: {
    overlay: 'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden',
    panel: 'fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6',
    close: 'absolute top-4 right-4',
    links: 'flex flex-col gap-4 mt-8',
    link: 'text-lg font-medium',
  },

  // Footer
  footer: {
    container: 'border-t bg-muted/30',
    inner: 'container mx-auto px-4 py-16',
    grid: 'grid md:grid-cols-2 lg:grid-cols-5 gap-8',
    brand: 'lg:col-span-2',
    logo: 'font-bold text-xl',
    tagline: 'text-muted-foreground mt-2',
    social: 'flex gap-4 mt-4',
    socialIcon: 'w-5 h-5 text-muted-foreground hover:text-foreground transition-colors',
    column: 'space-y-4',
    columnTitle: 'font-semibold',
    columnLinks: 'space-y-2',
    columnLink: 'text-sm text-muted-foreground hover:text-foreground transition-colors',
    bottom: 'border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4',
    copyright: 'text-sm text-muted-foreground',
    legal: 'flex gap-4',
    legalLink: 'text-sm text-muted-foreground hover:text-foreground',
  },
};

// ============================================================================
// INPUT PATTERNS
// ============================================================================

export const inputPatterns = {
  // Standard input
  standard: {
    base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  },

  // Neo Brutalist input
  neoBrutalist: {
    base: 'h-12 w-full border-2 border-black bg-white px-4 text-base focus:outline-none focus:shadow-[4px_4px_0px_0px_#000]',
  },

  // Terminal input
  terminal: {
    base: 'h-10 w-full bg-transparent border border-[#33FF00] text-[#33FF00] font-mono px-3 placeholder:text-[#33FF00]/50 focus:outline-none focus:bg-[#33FF00]/10',
    prefix: '$ ', // Command line prefix
  },

  // Claymorphism input
  clay: {
    base: 'h-12 w-full rounded-2xl bg-white/80 px-4 text-base border-none shadow-[inset_4px_4px_8px_rgba(139,92,246,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] focus:outline-none focus:shadow-[inset_6px_6px_12px_rgba(139,92,246,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.95)]',
  },
};

// ============================================================================
// BADGE PATTERNS
// ============================================================================

export const badgePatterns = {
  // Standard badge
  standard: {
    base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
    variants: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      outline: 'border border-current',
      success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
      warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
      error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    },
  },

  // Neo Brutalist badge
  neoBrutalist: {
    base: 'inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wide border-2 border-black',
    shadow: 'shadow-[2px_2px_0px_0px_#000]',
  },

  // Terminal badge
  terminal: {
    base: 'inline-flex items-center font-mono text-xs text-[#33FF00]',
    format: '[ {text} ]',
  },
};

// ============================================================================
// ANIMATION PATTERNS
// ============================================================================

export const animationPatterns = {
  // Fade in
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
    transition: 'transition-opacity duration-300',
  },

  // Slide up
  slideUp: {
    initial: 'opacity-0 translate-y-4',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-500',
  },

  // Scale
  scale: {
    initial: 'scale-95 opacity-0',
    animate: 'scale-100 opacity-100',
    transition: 'transition-all duration-300',
  },

  // Stagger children (for grids)
  stagger: {
    container: 'stagger-container',
    child: 'stagger-child',
    delays: ['delay-0', 'delay-75', 'delay-150', 'delay-200', 'delay-300'],
  },

  // Hover effects
  hover: {
    lift: 'hover:-translate-y-1 transition-transform',
    grow: 'hover:scale-105 transition-transform',
    glow: 'hover:shadow-lg transition-shadow',
    brightness: 'hover:brightness-110 transition-all',
  },

  // Loading states
  loading: {
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    bounce: 'animate-bounce',
    skeleton: 'bg-muted animate-pulse rounded',
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  buttonPatterns,
  cardPatterns,
  sectionPatterns,
  navigationPatterns,
  inputPatterns,
  badgePatterns,
  animationPatterns,
};
