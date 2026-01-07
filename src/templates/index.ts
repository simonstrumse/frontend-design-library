/**
 * Frontend Library - Landing Page Templates
 *
 * Complete, renderable landing page templates extracted from:
 * - caramell.app showcase
 * - aura.build templates
 * - designprompts.dev examples
 *
 * Each template includes:
 * - Complete HTML/JSX structure
 * - All required Tailwind classes
 * - Section breakdown (hero, features, pricing, etc.)
 * - Responsive design patterns
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// ============================================================================
// TEMPLATE TYPES
// ============================================================================

export interface LandingPageTemplate {
  name: string;
  description: string;
  source: 'caramell' | 'aura' | 'designprompts' | 'custom';
  style: string; // Design style (e.g., 'neoBrutalism', 'saasTech', etc.)
  category: 'agency' | 'ecommerce' | 'saas' | 'portfolio' | 'product' | 'brand';
  features: string[];
  sections: TemplateSection[];
  tailwindConfig?: Record<string, unknown>;
  cssVariables?: Record<string, string>;
  fonts?: string[];
  filePath?: string;
}

export interface TemplateSection {
  name: 'hero' | 'features' | 'pricing' | 'testimonials' | 'cta' | 'footer' | 'navigation' | 'stats' | 'faq' | 'howItWorks' | 'benefits' | 'products' | 'about' | 'marquee' | 'gallery' | string;
  html: string;
  description?: string;
}

// ============================================================================
// CARAMELL TEMPLATES
// ============================================================================

/**
 * Dexo Media - Dark UGC Agency Template
 *
 * A sleek, glassmorphic dark theme perfect for creative agencies,
 * marketing companies, and UGC studios. Features custom cursor,
 * GSAP animations, and a floating glassmorphism navigation.
 */
export const dexoMediaTemplate: LandingPageTemplate = {
  name: 'Dexo Media',
  description: 'Modern UGC agency template with glassmorphism effects, custom cursor, and scroll animations. Dark theme with cyan accent.',
  source: 'caramell',
  style: 'modernDark',
  category: 'agency',
  features: [
    'Custom cursor with mix-blend-mode',
    'Glassmorphism navigation',
    'GSAP scroll animations',
    'Animated CTA button with rotating gradient',
    'Stats section with animated counters',
    'Marquee text effect',
    'Bento grid service cards',
  ],
  fonts: ['Instrument Serif'],
  tailwindConfig: {
    colors: {
      'dexo-bg': '#0a0a0a',
      'dexo-surface': '#111111',
      'dexo-border': 'rgba(255, 255, 255, 0.1)',
      'dexo-accent': '#B9F2FF',
    },
    fontFamily: {
      instrument: ['Instrument Serif', 'serif'],
    },
  },
  cssVariables: {
    '--background': '#0a0a0a',
    '--foreground': '#ffffff',
    '--accent': '#B9F2FF',
    '--surface': '#111111',
    '--border': 'rgba(255, 255, 255, 0.1)',
  },
  filePath: 'caramell-templates/template-1-dexo-ugc.html',
  sections: [
    {
      name: 'navigation',
      description: 'Floating glassmorphism navbar with logo, links, and CTA',
      html: `<nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
  <div class="glass rounded-full px-6 py-3 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <svg class="w-6 h-6 text-dexo-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <span class="font-bold tracking-tighter text-xl">DEXO</span>
    </div>
    <div class="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
      <a href="#" class="hover:text-dexo-accent transition-colors">Work</a>
      <a href="#" class="hover:text-dexo-accent transition-colors">Services</a>
      <a href="#" class="hover:text-dexo-accent transition-colors">About</a>
    </div>
    <a href="#call" class="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-sm font-medium">
      Book a Call
    </a>
  </div>
</nav>`,
    },
    {
      name: 'hero',
      description: 'Full-screen hero with large serif headline, subtext, dual CTAs, and hero image',
      html: `<section class="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative overflow-hidden">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-dexo-accent blur-[120px] rounded-full"></div>
  </div>
  <div class="text-center max-w-5xl z-10">
    <h1 class="text-6xl md:text-9xl font-instrument leading-[0.9] tracking-tight mb-8">
      <span class="block">UGC content that</span>
      <span class="italic text-dexo-accent">actually</span> converts
    </h1>
    <p class="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
      We bridge the gap between raw creativity and performance marketing.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-dexo-accent transition-all">
        Start Your Campaign
      </button>
      <button class="px-10 py-5 border border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
        View Case Studies
      </button>
    </div>
  </div>
</section>`,
    },
    {
      name: 'stats',
      description: '3-column stats section with large numbers and labels',
      html: `<section class="py-32 px-6 bg-dexo-surface border-y border-dexo-border">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    <div class="stat-item">
      <div class="text-5xl font-instrument text-dexo-accent mb-2">4.2M+</div>
      <div class="text-white/40 uppercase tracking-widest text-sm">Total Views Generated</div>
    </div>
    <div class="stat-item">
      <div class="text-5xl font-instrument text-dexo-accent mb-2">240%</div>
      <div class="text-white/40 uppercase tracking-widest text-sm">Average ROAS Increase</div>
    </div>
    <div class="stat-item">
      <div class="text-5xl font-instrument text-dexo-accent mb-2">500+</div>
      <div class="text-white/40 uppercase tracking-widest text-sm">Creator Network Size</div>
    </div>
  </div>
</section>`,
    },
    {
      name: 'features',
      description: 'Bento grid layout with service cards featuring background images',
      html: `<section class="py-32 px-6">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <h2 class="text-5xl md:text-7xl font-instrument max-w-xl leading-tight">
        Our <span class="italic">diamond-standard</span> process
      </h2>
      <p class="text-white/50 max-w-xs">
        We handle the heavy lifting while you watch the metrics climb.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div class="md:col-span-8 h-[400px] glass rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group">
        <h3 class="text-3xl font-instrument mb-3 relative z-10">Strategic Sourcing</h3>
        <p class="text-white/60 relative z-10">We find creators who embody your brand's soul.</p>
      </div>
      <div class="md:col-span-4 h-[400px] glass rounded-3xl p-10 flex flex-col justify-end">
        <h3 class="text-2xl font-instrument mb-3">Viral Scripting</h3>
        <p class="text-white/60 text-sm">Hooks that stop the scroll.</p>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      name: 'marquee',
      description: 'Infinite scrolling text marquee',
      html: `<section class="py-20 overflow-hidden border-y border-dexo-border">
  <div class="marquee-track text-6xl md:text-8xl font-instrument whitespace-nowrap">
    <span class="text-white/20">DEXO MEDIA</span>
    <span class="text-dexo-accent">UGC MASTERY</span>
    <span class="text-white/20">DEXO MEDIA</span>
    <span class="text-dexo-accent">UGC MASTERY</span>
  </div>
</section>`,
    },
    {
      name: 'cta',
      description: 'Large CTA section with glassmorphism card',
      html: `<section class="py-40 px-6 relative">
  <div class="max-w-4xl mx-auto glass rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-dexo-accent/10 blur-[100px] rounded-full"></div>
    <div class="relative z-10">
      <h2 class="text-5xl md:text-8xl font-instrument mb-8 leading-none">
        Ready to <span class="italic">scale</span> your brand?
      </h2>
      <p class="text-xl text-white/60 mb-12 max-w-xl mx-auto">
        Join the elite 1% of brands using data-driven UGC to dominate social commerce.
      </p>
      <button class="px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-dexo-accent transition-all">
        Book Your Free Strategy Call
      </button>
    </div>
  </div>
</section>`,
    },
    {
      name: 'footer',
      description: 'Minimal footer with logo, social links, and large decorative brand name',
      html: `<footer class="pt-20 pb-10 px-6 border-t border-dexo-border">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-start mb-20">
      <div class="flex items-center gap-2 mb-8 md:mb-0">
        <span class="font-bold tracking-tighter text-2xl">DEXO</span>
      </div>
      <div class="flex gap-8 text-sm">
        <a href="#" class="hover:text-dexo-accent transition-colors">Instagram</a>
        <a href="#" class="hover:text-dexo-accent transition-colors">LinkedIn</a>
        <a href="#" class="hover:text-dexo-accent transition-colors">Twitter</a>
      </div>
    </div>
    <div class="mt-20">
      <h3 class="text-[20vw] font-instrument text-white/5 leading-none text-center">DEXO</h3>
    </div>
  </div>
</footer>`,
    },
  ],
};

/**
 * Velour Fashion - Luxury Fashion E-commerce Template
 *
 * High-end fashion brand template with WebGL shader background,
 * horizontal scroll gallery, and sophisticated animations.
 * Dark theme with monochromatic imagery.
 */
export const velourFashionTemplate: LandingPageTemplate = {
  name: 'Velour Fashion',
  description: 'Luxury digital fashion template with Three.js shader background, horizontal scroll runway gallery, and sophisticated GSAP animations.',
  source: 'caramell',
  style: 'luxury',
  category: 'ecommerce',
  features: [
    'Three.js animated shader background',
    'Custom cursor with mix-blend-mode',
    'Horizontal scroll gallery (GSAP ScrollTrigger)',
    'Grayscale-to-color image hover effects',
    'System info display (coordinates)',
    'Mix-blend-mode navigation',
    'Product grid with hover animations',
  ],
  fonts: ['Montserrat', 'Inter'],
  tailwindConfig: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
  cssVariables: {
    '--background': '#050505',
    '--foreground': '#ffffff',
    '--muted': 'rgba(255, 255, 255, 0.4)',
  },
  filePath: 'caramell-templates/template-2-velour-fashion.html',
  sections: [
    {
      name: 'navigation',
      description: 'Fixed mix-blend-mode navigation with logo, links, and cart',
      html: `<nav class="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center mix-blend-difference text-white z-50">
  <div class="text-2xl font-mont font-black tracking-tighter uppercase">
    Velour<span class="text-xs align-top opacity-70">®</span>
  </div>
  <div class="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] uppercase font-medium">
    <a href="#" class="hover:text-gray-300 transition-colors relative group">
      Collections
      <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
    <a href="#" class="hover:text-gray-300 transition-colors relative group">
      Runway
      <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
  </div>
  <button class="px-6 py-2 border border-white/30 rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all">
    Cart (0)
  </button>
</nav>`,
    },
    {
      name: 'hero',
      description: 'Full-screen hero with massive brand name and WebGL background',
      html: `<section class="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
  <div class="relative z-10 text-center">
    <p class="text-xs tracking-[0.4em] uppercase mb-4 text-white/50">Digital Haute Couture</p>
    <h1 class="text-[15vw] md:text-[12vw] font-mont font-black leading-[0.85] tracking-tighter uppercase">
      VELOUR
    </h1>
    <p class="max-w-md mx-auto mt-6 text-white/60 font-light text-sm md:text-base leading-relaxed">
      Where algorithmic precision meets organic chaos. Redefining the boundaries of wearable reality.
    </p>
    <button class="mt-10 px-10 py-4 border border-white/40 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
      Enter The Void
    </button>
  </div>
  <div class="absolute bottom-8 left-8 font-mono text-[10px] text-white/30 space-y-1">
    <div>LAT: 40.7128° N</div>
    <div>SYS: ONLINE</div>
  </div>
</section>`,
    },
    {
      name: 'gallery',
      description: 'Horizontal scrolling runway gallery with grayscale hover effect',
      html: `<section class="relative h-screen bg-white text-black overflow-hidden">
  <div class="absolute top-8 left-8 z-20">
    <h2 class="text-xs tracking-[0.3em] uppercase font-medium">THE RUNWAY</h2>
    <p class="text-xs text-black/50 mt-2 max-w-xs">
      Scroll to explore the sequence.
    </p>
  </div>
  <div class="runway-container flex h-full items-center pt-20">
    <div class="panel h-[70vh] flex items-center justify-center px-8">
      <div class="relative group">
        <div class="w-[300px] md:w-[400px] h-[450px] md:h-[550px] bg-black/5 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
               alt="Runway Look"
               class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
        </div>
        <div class="absolute -bottom-8 left-0 text-[10px] tracking-widest uppercase text-black/40">
          001 // VOID WALKER
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      name: 'products',
      description: '3-column product grid with grayscale hover animations',
      html: `<section class="py-32 px-4 md:px-8 bg-black border-t border-white/10">
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-end mb-16">
      <h2 class="text-4xl md:text-6xl font-mont font-black tracking-tight">Curated Objects</h2>
      <span class="text-xs tracking-widest text-white/40 uppercase">Season 04 / 2024</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="group">
        <div class="aspect-[3/4] bg-white/5 overflow-hidden mb-4">
          <img src="image.jpg" alt="Product"
               class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
        </div>
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-medium">Shell Jkt</h3>
            <p class="text-white/40 text-sm">$1,200</p>
          </div>
          <button class="text-xs tracking-widest uppercase border-b border-white/30 hover:border-white transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      name: 'footer',
      description: 'Light footer with 4-column layout and newsletter signup',
      html: `<footer class="relative pt-40 pb-12 px-6 bg-white text-black overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      <div>
        <h4 class="text-xs tracking-widest uppercase mb-4 font-medium">Editorials</h4>
        <ul class="space-y-2 text-sm text-black/60">
          <li><a href="#" class="hover:text-black transition-colors">Runway 24</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs tracking-widest uppercase mb-4 font-medium">Newsletter</h4>
        <input type="email" placeholder="Email"
               class="w-full bg-transparent border-b border-black/30 py-2 text-sm focus:outline-none focus:border-black">
      </div>
    </div>
    <div class="flex justify-between items-center pt-8 border-t border-black/10">
      <div class="text-2xl font-mont font-black tracking-tighter uppercase">VELOUR</div>
      <div class="text-[10px] text-black/40">© 2024 Velour Inc.</div>
    </div>
  </div>
</footer>`,
    },
  ],
};

/**
 * Lowkey Coffee - Playful Brand Template
 *
 * Fun, colorful coffee brand template with brutalist elements,
 * floating stickers, morphing blobs, and playful animations.
 * Multi-colored sections with bold typography.
 */
export const lowkeyCoffeeTemplate: LandingPageTemplate = {
  name: 'Lowkey Coffee',
  description: 'Playful coffee brand template with neo-brutalist elements, floating stickers, morphing blobs, and colorful multi-section layout.',
  source: 'caramell',
  style: 'neoBrutalism',
  category: 'brand',
  features: [
    'Floating animated stickers',
    'Morphing blob animations',
    'Marquee text scrolling',
    'Product cards with hover lift + rotate',
    'Bold drop-shadow text effects',
    'Multi-colored section backgrounds',
    'Brutalist borders (4px solid black)',
    'Hard shadows on testimonials',
  ],
  fonts: ['Baloo 2', 'Space Mono'],
  tailwindConfig: {
    colors: {
      'lowkey-brown': '#8B4513',
      'lowkey-cream': '#FFF8DC',
      'lowkey-red': '#FF4500',
      'lowkey-teal': '#20B2AA',
      'lowkey-purple': '#9370DB',
      'lowkey-green': '#90EE90',
      'lowkey-yellow': '#FFD700',
    },
    fontFamily: {
      display: ['Baloo 2', 'cursive'],
      mono: ['Space Mono', 'monospace'],
    },
  },
  cssVariables: {
    '--background': '#8B4513',
    '--foreground': '#000000',
    '--accent': '#FF4500',
    '--secondary': '#20B2AA',
  },
  filePath: 'caramell-templates/template-3-lowkey-coffee.html',
  sections: [
    {
      name: 'navigation',
      description: 'Fixed circular buttons for menu and cart',
      html: `<header class="fixed top-4 left-0 w-full z-50 px-4 pointer-events-none">
  <div class="max-w-7xl mx-auto flex justify-between items-start">
    <div class="pointer-events-auto">
      <button class="w-16 h-16 bg-lowkey-brown text-lowkey-cream rounded-full flex items-center justify-center font-bold border-4 border-lowkey-cream shadow-xl hover:scale-110 transition-transform text-sm">
        MENU
      </button>
    </div>
    <div class="pointer-events-auto">
      <button class="bg-lowkey-red text-white px-6 py-3 rounded-full font-bold border-4 border-white shadow-xl hover:scale-105 transition-transform">
        CART (0)
      </button>
    </div>
  </div>
</header>`,
    },
    {
      name: 'hero',
      description: 'Bold hero with drop-shadow text and floating sticker',
      html: `<section class="w-full min-h-screen bg-lowkey-brown flex flex-col justify-center items-center relative overflow-hidden pt-20">
  <div class="text-center relative z-10 px-4">
    <p class="text-lowkey-yellow text-sm tracking-[0.3em] uppercase mb-4 font-mono">
      Exceptional Coffee Roasted in Earth
    </p>
    <h1 class="text-[15vw] md:text-[10vw] font-display font-extrabold leading-[0.85]">
      <span class="text-black drop-shadow-[4px_4px_0_rgba(255,255,255,0.3)]">lowkey</span>
      <br>
      <span class="text-lowkey-cream drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">coffee</span>
    </h1>
  </div>
  <div class="absolute bottom-20 right-8 md:right-20 sticker">
    <div class="w-32 h-32 md:w-40 md:h-40 bg-lowkey-red rounded-full flex flex-col items-center justify-center text-white border-4 border-dashed border-white/50 shadow-xl rotate-12">
      <span class="text-xs tracking-wide">FRESH</span>
      <span class="font-bold text-lg">ROAST</span>
      <span class="text-xs tracking-wide">DAILY!</span>
    </div>
  </div>
</section>`,
    },
    {
      name: 'products',
      description: 'Product grid with brutalist cards and hover animations',
      html: `<section class="w-full bg-lowkey-teal py-20 relative">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center gap-4 mb-12">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-black">SHOP THE DROPS</h2>
      <span class="px-4 py-1 bg-black text-white text-xs rounded-full font-mono">Small Batch Only</span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="product-card bg-lowkey-cream rounded-3xl p-6 border-4 border-black">
        <div class="relative">
          <span class="absolute top-2 left-2 bg-lowkey-red text-white text-xs px-3 py-1 rounded-full font-bold">NEW!</span>
          <div class="aspect-square bg-lowkey-brown/10 rounded-2xl flex items-center justify-center mb-4">
            <img src="coffee.jpg" alt="Coffee" class="w-3/4 h-3/4 object-contain drop-shadow-lg">
          </div>
        </div>
        <h3 class="text-2xl font-bold text-black">Holiday Blend</h3>
        <p class="text-black/60 text-sm mb-4 font-mono">Notes of Cocoa, Berry, Magic</p>
        <button class="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-lowkey-brown transition-colors">
          ADD TO CART — $22
        </button>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      name: 'marquee',
      description: 'Colorful marquee text section',
      html: `<section class="w-full bg-lowkey-purple py-8 overflow-hidden border-y-4 border-black">
  <div class="marquee-track flex gap-16 text-black font-bold text-xl whitespace-nowrap">
    <span>LOWKEY IS SENSITIVE</span>
    <span>—</span>
    <span>TACTILE</span>
    <span>—</span>
    <span>TRANSCENDENTAL</span>
    <span>—</span>
    <span>NOT JUST A COMMODITY</span>
    <span>—</span>
    <span>IT'S A SENSATION</span>
  </div>
</section>`,
    },
    {
      name: 'about',
      description: 'Centered about text on purple background',
      html: `<section class="w-full bg-lowkey-purple py-32 px-6">
  <div class="max-w-3xl mx-auto text-center">
    <p class="text-2xl md:text-3xl text-black leading-relaxed font-medium">
      Lowkey requires careful handling. It's delicate, tactful, and sometimes even transcendental. We pay homage to the vast number of hands that plant, tend, process, import, roast, and brew this coffee before it finds its way into your cup.
    </p>
    <div class="mt-12">
      <span class="inline-block px-8 py-3 bg-black text-white rounded-full font-bold">
        In Our World
      </span>
    </div>
  </div>
</section>`,
    },
    {
      name: 'testimonials',
      description: '2-column testimonials with brutalist hard shadows',
      html: `<section class="w-full bg-[#DAE8E3] py-20 px-6 border-t-4 border-black">
  <div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white rounded-3xl p-8 border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)]">
        <div class="flex gap-1 mb-4 text-lowkey-yellow text-2xl">★★★★★</div>
        <p class="text-black mb-4 font-medium">
          "Questioning how coffee could taste fruity? Try the Yirgacheffe. It's like juice. But coffee."
        </p>
        <p class="text-black/60 font-mono text-sm">— Linda K.</p>
      </div>
      <div class="bg-white rounded-3xl p-8 border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)]">
        <div class="flex gap-1 mb-4 text-lowkey-yellow text-2xl">★★★★★</div>
        <p class="text-black mb-4 font-medium">
          "Finally found a roast that doesn't taste like burnt tires. Lowkey is high-key the best."
        </p>
        <p class="text-black/60 font-mono text-sm">— Greg D.</p>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      name: 'footer',
      description: 'Green footer with 3-column layout and morphing blob',
      html: `<footer class="w-full bg-lowkey-green pt-20 pb-10 px-6 border-t-4 border-black relative">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      <div>
        <h4 class="text-sm font-mono uppercase tracking-widest mb-4 text-black/60">Location</h4>
        <p class="text-black font-bold text-lg">123 River Street</p>
        <p class="text-black font-bold text-lg">Troy, New York 12180</p>
      </div>
      <div class="text-center">
        <h3 class="text-4xl font-display font-extrabold text-black">Lowkey Coffee</h3>
      </div>
      <div class="md:text-right">
        <h4 class="text-sm font-mono uppercase tracking-widest mb-4 text-black/60">Contact</h4>
        <p class="text-black font-bold">hello@lowkey.coffee</p>
      </div>
    </div>
    <div class="flex justify-between items-center pt-8 border-t-2 border-black/20">
      <p class="text-black/60 text-sm font-mono">© 2025 LOWKEY COFFEE LLC.</p>
      <p class="text-black/60 text-sm font-mono">SEED IS PLANTED.</p>
    </div>
  </div>
  <div class="absolute -top-20 right-10 w-40 h-40 bg-lowkey-yellow blob opacity-50"></div>
</footer>`,
    },
  ],
};

// ============================================================================
// TEMPLATE COLLECTION
// ============================================================================

export const templates: LandingPageTemplate[] = [
  dexoMediaTemplate,
  velourFashionTemplate,
  lowkeyCoffeeTemplate,
];

// ============================================================================
// TEMPLATE HELPERS
// ============================================================================

/**
 * Get all templates for a specific design style
 */
export function getTemplatesByStyle(style: string): LandingPageTemplate[] {
  return templates.filter(t => t.style === style);
}

/**
 * Get all templates from a specific source
 */
export function getTemplatesBySource(source: LandingPageTemplate['source']): LandingPageTemplate[] {
  return templates.filter(t => t.source === source);
}

/**
 * Get all templates in a specific category
 */
export function getTemplatesByCategory(category: LandingPageTemplate['category']): LandingPageTemplate[] {
  return templates.filter(t => t.category === category);
}

/**
 * Get a specific section from all templates
 */
export function getSectionExamples(sectionName: TemplateSection['name']): TemplateSection[] {
  return templates.flatMap(t => t.sections.filter(s => s.name === sectionName));
}

/**
 * Get template by name
 */
export function getTemplateByName(name: string): LandingPageTemplate | undefined {
  return templates.find(t => t.name.toLowerCase() === name.toLowerCase());
}

/**
 * List all available templates with metadata
 */
export function listTemplates() {
  return templates.map(t => ({
    name: t.name,
    style: t.style,
    source: t.source,
    category: t.category,
    features: t.features,
    sectionCount: t.sections.length,
  }));
}

export default templates;
