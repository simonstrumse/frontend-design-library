'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { allStyles, styleMetadata } from '@/lib/design-data'

function CodeBlock({ code, className = '' }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`relative ${className}`}>
      <pre className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 overflow-x-auto text-sm">
        <code className="text-zinc-300">{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-zinc-400" />
        )}
      </button>
    </div>
  )
}

const componentPatterns = {
  buttons: {
    title: 'Button Patterns',
    description: 'Various button styles for different design systems',
    patterns: [
      {
        name: 'Primary Button',
        classes: 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg',
        preview: (style: typeof allStyles[string]) => ({
          backgroundColor: style.colors.primary,
          color: style.mode === 'dark' ? style.colors.background : '#ffffff',
          borderRadius: style.borderRadius[0],
        }),
      },
      {
        name: 'Neo Brutalist Button',
        classes: 'inline-flex items-center justify-center font-bold uppercase tracking-wide border-2 border-black bg-yellow-400 text-black h-10 px-4 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_#000] transition-all',
        forStyles: ['neoBrutalism', 'bauhaus'],
      },
      {
        name: 'Terminal Button',
        classes: 'inline-flex items-center justify-center font-mono text-[#33FF00] border border-[#33FF00] bg-transparent h-10 px-4 hover:bg-[#33FF00] hover:text-black',
        forStyles: ['terminal', 'cyberpunk'],
      },
      {
        name: 'Glass Button',
        classes: 'inline-flex items-center justify-center backdrop-blur-lg bg-white/10 border border-white/20 text-white h-10 px-4 rounded-lg hover:bg-white/20 transition-all',
        forStyles: ['glassmorphism', 'modernDark', 'web3'],
      },
    ],
  },
  cards: {
    title: 'Card Patterns',
    description: 'Card components for content organization',
    patterns: [
      {
        name: 'Standard Card',
        classes: 'rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow p-6',
      },
      {
        name: 'Feature Card',
        html: `<div class="flex flex-col gap-4 p-6 rounded-xl bg-zinc-800">
  <div class="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-500">
    <svg class="w-6 h-6">...</svg>
  </div>
  <h3 class="text-lg font-semibold">Feature Title</h3>
  <p class="text-zinc-400">Feature description goes here</p>
</div>`,
      },
      {
        name: 'Neo Brutalist Card',
        classes: 'border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all p-6',
        forStyles: ['neoBrutalism', 'bauhaus'],
      },
      {
        name: 'Glass Card',
        classes: 'backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-[0_0_30px_rgba(0,255,136,0.2)]',
        forStyles: ['glassmorphism', 'cyberpunk', 'modernDark'],
      },
    ],
  },
  inputs: {
    title: 'Input Patterns',
    description: 'Form input styles',
    patterns: [
      {
        name: 'Standard Input',
        classes: 'flex h-10 w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      },
      {
        name: 'Neo Brutalist Input',
        classes: 'flex h-10 w-full border-2 border-black bg-white px-3 py-2 text-sm font-medium placeholder:text-zinc-500 focus:shadow-[4px_4px_0px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all',
      },
      {
        name: 'Terminal Input',
        classes: 'flex h-10 w-full border border-[#33FF00] bg-transparent text-[#33FF00] font-mono px-3 py-2 text-sm placeholder:text-[#33FF00]/50',
      },
    ],
  },
  badges: {
    title: 'Badge Patterns',
    description: 'Status and label badges',
    patterns: [
      {
        name: 'Default Badge',
        classes: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-zinc-800 text-zinc-300',
      },
      {
        name: 'Primary Badge',
        classes: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-violet-500/10 text-violet-400',
      },
      {
        name: 'Success Badge',
        classes: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-400',
      },
      {
        name: 'Neo Brutalist Badge',
        classes: 'inline-flex items-center border-2 border-black px-2.5 py-0.5 text-xs font-bold uppercase bg-yellow-400 text-black',
      },
    ],
  },
  navigation: {
    title: 'Navigation Patterns',
    description: 'Header and navigation components',
    patterns: [
      {
        name: 'Sticky Header',
        html: `<header class="sticky top-0 z-50 w-full border-b bg-zinc-950/95 backdrop-blur">
  <div class="container mx-auto px-4 flex h-16 items-center justify-between">
    <a href="/" class="font-bold text-xl">Logo</a>
    <nav class="hidden md:flex items-center gap-6">
      <a href="#" class="text-sm text-zinc-400 hover:text-white">Features</a>
      <a href="#" class="text-sm text-zinc-400 hover:text-white">Pricing</a>
      <a href="#" class="text-sm text-zinc-400 hover:text-white">About</a>
    </nav>
    <button class="px-4 py-2 bg-violet-500 text-white rounded-lg">Sign Up</button>
  </div>
</header>`,
      },
    ],
  },
  sections: {
    title: 'Section Patterns',
    description: 'Page section layouts',
    patterns: [
      {
        name: 'Hero Section',
        html: `<section class="relative overflow-hidden py-20 lg:py-32">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-violet-500/10 text-violet-400 mb-6">
        New Release
      </span>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Build faster with our design system
      </h1>
      <p class="text-xl text-zinc-400 mb-8">
        A comprehensive collection of design tokens and component patterns for your next project.
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="px-6 py-3 bg-violet-500 text-white rounded-lg font-medium">
          Get Started
        </button>
        <button class="px-6 py-3 border border-zinc-700 text-white rounded-lg font-medium">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>`,
      },
      {
        name: 'Features Grid',
        html: `<section class="py-20 lg:py-32">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl font-bold">Features</h2>
      <p class="text-lg text-zinc-400 mt-4">Everything you need to build modern interfaces</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Feature cards go here -->
    </div>
  </div>
</section>`,
      },
      {
        name: 'Stats Section',
        html: `<section class="py-16 bg-zinc-900">
  <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
    <div class="text-center">
      <div class="text-4xl md:text-5xl font-bold">33+</div>
      <div class="text-zinc-400 mt-2">Design Styles</div>
    </div>
    <div class="text-center">
      <div class="text-4xl md:text-5xl font-bold">100+</div>
      <div class="text-zinc-400 mt-2">Components</div>
    </div>
    <div class="text-center">
      <div class="text-4xl md:text-5xl font-bold">4</div>
      <div class="text-zinc-400 mt-2">Templates</div>
    </div>
    <div class="text-center">
      <div class="text-4xl md:text-5xl font-bold">Free</div>
      <div class="text-zinc-400 mt-2">Open Source</div>
    </div>
  </div>
</section>`,
      },
    ],
  },
}

type PatternCategory = keyof typeof componentPatterns

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<PatternCategory>('buttons')
  const [selectedStyle, setSelectedStyle] = useState('minimalDark')

  const currentPattern = componentPatterns[selectedCategory]
  const currentStyle = allStyles[selectedStyle]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Component Patterns
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Reusable component patterns with Tailwind CSS classes. Copy and paste into your project.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                Components
              </h3>
              <nav className="space-y-1">
                {(Object.keys(componentPatterns) as PatternCategory[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === key
                        ? 'bg-violet-500/10 text-violet-400'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {componentPatterns[key].title}
                  </button>
                ))}
              </nav>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                  Preview Style
                </h3>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {styleMetadata.map((meta) => (
                    <option key={meta.id} value={meta.id}>
                      {meta.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{currentPattern.title}</h2>
              <p className="text-zinc-400">{currentPattern.description}</p>
            </div>

            <div className="space-y-8">
              {currentPattern.patterns.map((pattern, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
                >
                  <div className="p-4 border-b border-zinc-800">
                    <h3 className="font-semibold">{pattern.name}</h3>
                    {'forStyles' in pattern && pattern.forStyles && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {pattern.forStyles.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-zinc-400"
                          >
                            {styleMetadata.find((m) => m.id === s)?.name || s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Preview */}
                  <div
                    className="p-8 flex items-center justify-center min-h-32"
                    style={{
                      backgroundColor: currentStyle?.colors.background || '#09090b',
                    }}
                  >
                    {'html' in pattern && pattern.html ? (
                      <div
                        className="max-w-2xl w-full text-left"
                        dangerouslySetInnerHTML={{ __html: pattern.html as string }}
                      />
                    ) : 'preview' in pattern && pattern.preview ? (
                      <button
                        className={'classes' in pattern ? pattern.classes : ''}
                        style={pattern.preview(currentStyle)}
                      >
                        Button
                      </button>
                    ) : (
                      <div className={'classes' in pattern ? pattern.classes : ''}>
                        {selectedCategory === 'badges' ? 'Badge' :
                         selectedCategory === 'buttons' ? 'Button' :
                         selectedCategory === 'inputs' ? (
                          <input type="text" placeholder="Placeholder..." className="bg-transparent w-full outline-none" />
                        ) : selectedCategory === 'cards' ? (
                          <div>
                            <h4 className="font-semibold mb-2">Card Title</h4>
                            <p className="text-sm opacity-70">Card description goes here.</p>
                          </div>
                        ) : 'Content'}
                      </div>
                    )}
                  </div>

                  {/* Code */}
                  <div className="border-t border-zinc-800">
                    <CodeBlock
                      code={'html' in pattern && pattern.html ? String(pattern.html) : ('classes' in pattern ? String(pattern.classes || '') : '')}
                      className="rounded-none border-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
