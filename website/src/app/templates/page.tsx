'use client'

import { useState } from 'react'
import { ExternalLink, Download, Eye, Code, X } from 'lucide-react'

interface Template {
  id: string
  name: string
  description: string
  style: string
  category: string
  features: string[]
  preview: string
  colors: {
    primary: string
    secondary: string
    background: string
  }
}

const templates: Template[] = [
  {
    id: 'dexo-ugc',
    name: 'Dexo Media',
    description: 'Modern UGC agency landing page with glassmorphism nav, GSAP animations, and bento grid features.',
    style: 'Modern Dark',
    category: 'Agency',
    features: ['Glassmorphism', 'GSAP Animations', 'Custom Cursor', 'Bento Grid', 'Marquee'],
    preview: '/templates/template-1-dexo-ugc.html',
    colors: {
      primary: '#B9F2FF',
      secondary: '#0a0a0a',
      background: '#0a0a0a',
    },
  },
  {
    id: 'velour-fashion',
    name: 'Velour Fashion',
    description: 'Luxury e-commerce template with Three.js WebGL background and horizontal scroll gallery.',
    style: 'Luxury',
    category: 'E-commerce',
    features: ['Three.js WebGL', 'Horizontal Scroll', 'GSAP ScrollTrigger', 'B&W to Color Hover'],
    preview: '/templates/template-2-velour-fashion.html',
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      background: '#ffffff',
    },
  },
  {
    id: 'lowkey-coffee',
    name: 'Lowkey Coffee',
    description: 'Playful Neo Brutalist brand site with floating stickers, morphing blobs, and hard shadows.',
    style: 'Neo Brutalism',
    category: 'Brand',
    features: ['Floating Stickers', 'Morphing Blobs', 'Hard Shadows', 'Multi-color Sections'],
    preview: '/templates/template-3-lowkey-coffee.html',
    colors: {
      primary: '#8B4513',
      secondary: '#FFD93D',
      background: '#FFFDF5',
    },
  },
  {
    id: 'hyper-brutalist',
    name: 'Hyper Brutalist',
    description: 'Bold maximalist template with layered elements, rotating badges, and dramatic typography.',
    style: 'Neo Brutalism',
    category: 'Portfolio',
    features: ['Rotating Elements', 'Bold Typography', 'Layered Design', 'High Contrast'],
    preview: '/templates/template-4-hyper-brutalist.html',
    colors: {
      primary: '#FF3D00',
      secondary: '#FFEA00',
      background: '#0D0D0D',
    },
  },
]

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(templates.map((t) => t.category))]

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter((t) => t.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Landing Page Templates
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mb-8">
            Complete HTML templates with modern animations and effects. Ready to customize for your project.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                  selectedCategory === cat
                    ? 'bg-violet-500 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all"
            >
              {/* Preview */}
              <div
                className="aspect-video relative overflow-hidden"
                style={{ backgroundColor: template.colors.background }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Stylized preview */}
                  <div className="w-4/5 h-4/5 rounded-lg border opacity-60" style={{ borderColor: template.colors.primary }}>
                    <div
                      className="h-2 m-2 rounded"
                      style={{ backgroundColor: template.colors.primary, width: '30%' }}
                    />
                    <div className="flex gap-2 mx-2 mt-4">
                      <div
                        className="flex-1 h-16 rounded"
                        style={{ backgroundColor: template.colors.primary + '33' }}
                      />
                      <div
                        className="flex-1 h-16 rounded"
                        style={{ backgroundColor: template.colors.primary + '33' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setSelectedTemplate(template)
                      setViewMode('preview')
                    }}
                    className="px-4 py-2 bg-white text-black rounded-lg font-medium flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <a
                    href={`https://github.com/your-repo/frontend-design-library/blob/main/caramell-templates/template-${templates.indexOf(template) + 1}-${template.id}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-800 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700"
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                  <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">
                    {template.category}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-4">{template.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-violet-500/10 text-violet-400 rounded text-xs">
                    {template.style}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-zinc-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-semibold">{selectedTemplate.name}</h3>
                <p className="text-sm text-zinc-400">{selectedTemplate.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-zinc-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      viewMode === 'preview' ? 'bg-zinc-700 text-white' : 'text-zinc-400'
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      viewMode === 'code' ? 'bg-zinc-700 text-white' : 'text-zinc-400'
                    }`}
                  >
                    Info
                  </button>
                </div>
                <a
                  href={selectedTemplate.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              {viewMode === 'preview' ? (
                <div className="h-full min-h-[600px] bg-white">
                  <iframe
                    src={selectedTemplate.preview}
                    className="w-full h-full min-h-[600px]"
                    title={selectedTemplate.name}
                  />
                </div>
              ) : (
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Template Details</h4>
                      <dl className="space-y-3">
                        <div>
                          <dt className="text-sm text-zinc-500">Style</dt>
                          <dd className="font-medium">{selectedTemplate.style}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-zinc-500">Category</dt>
                          <dd className="font-medium">{selectedTemplate.category}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-zinc-500">Description</dt>
                          <dd className="text-zinc-300">{selectedTemplate.description}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Features</h4>
                      <ul className="space-y-2">
                        {selectedTemplate.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold mt-8 mb-4">Color Palette</h4>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-12 h-12 rounded-lg border border-zinc-700"
                            style={{ backgroundColor: selectedTemplate.colors.primary }}
                          />
                          <span className="text-xs text-zinc-500 mt-1">Primary</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div
                            className="w-12 h-12 rounded-lg border border-zinc-700"
                            style={{ backgroundColor: selectedTemplate.colors.secondary }}
                          />
                          <span className="text-xs text-zinc-500 mt-1">Secondary</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div
                            className="w-12 h-12 rounded-lg border border-zinc-700"
                            style={{ backgroundColor: selectedTemplate.colors.background }}
                          />
                          <span className="text-xs text-zinc-500 mt-1">Background</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
