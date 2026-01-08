'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Sun, Moon, Filter } from 'lucide-react'
import { styleMetadata, allStyles, getAllCategories } from '@/lib/design-data'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [selectedMode, setSelectedMode] = useState<'all' | 'light' | 'dark'>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = useMemo(() => getAllCategories(), [])

  const filteredStyles = useMemo(() => {
    return styleMetadata.filter((meta) => {
      const matchesSearch = meta.name.toLowerCase().includes(search.toLowerCase()) ||
        allStyles[meta.id]?.description.toLowerCase().includes(search.toLowerCase())
      const matchesMode = selectedMode === 'all' || meta.mode === selectedMode
      const matchesCategory = selectedCategory === 'all' || meta.category === selectedCategory
      return matchesSearch && matchesMode && matchesCategory
    })
  }, [search, selectedMode, selectedCategory])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Design System Browser
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mb-8">
            Explore 33 curated design styles with complete tokens, component patterns, and ready-to-use templates.
          </p>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search styles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center bg-zinc-800 rounded-xl p-1">
                <button
                  onClick={() => setSelectedMode('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedMode === 'all' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedMode('light')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                    selectedMode === 'light' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => setSelectedMode('dark')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                    selectedMode === 'dark' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-violet-500 text-white'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
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

      {/* Styles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-zinc-400">
            {filteredStyles.length} style{filteredStyles.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStyles.map((meta) => {
            const style = allStyles[meta.id]
            if (!style) return null

            return (
              <Link
                key={meta.id}
                href={`/styles/${meta.id}`}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all hover:shadow-xl hover:shadow-violet-500/5"
              >
                {/* Color preview */}
                <div
                  className="h-32 relative"
                  style={{ backgroundColor: style.colors.background }}
                >
                  <div className="absolute inset-4 flex gap-2">
                    <div
                      className="flex-1 rounded-lg"
                      style={{
                        backgroundColor: style.colors.primary,
                        boxShadow: style.shadows[0] || 'none',
                        borderRadius: style.borderRadius[0] || '8px',
                      }}
                    />
                    {style.colors.secondary && (
                      <div
                        className="w-12 rounded-lg"
                        style={{
                          backgroundColor: style.colors.secondary,
                          borderRadius: style.borderRadius[0] || '8px',
                        }}
                      />
                    )}
                    {style.colors.accent && (
                      <div
                        className="w-12 rounded-lg"
                        style={{
                          backgroundColor: style.colors.accent,
                          borderRadius: style.borderRadius[0] || '8px',
                        }}
                      />
                    )}
                  </div>
                  {/* Mode badge */}
                  <div className="absolute top-2 right-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        meta.mode === 'dark'
                          ? 'bg-zinc-800 text-zinc-300'
                          : 'bg-white text-zinc-700'
                      }`}
                    >
                      {meta.mode === 'dark' ? <Moon className="w-3 h-3 inline mr-1" /> : <Sun className="w-3 h-3 inline mr-1" />}
                      {meta.mode}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-violet-400 transition-colors">
                      {meta.name}
                    </h3>
                    <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">
                      {meta.type}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 line-clamp-2 mb-3">
                    {style.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">
                      {meta.category}
                    </span>
                    {meta.source && (
                      <span className="px-2 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs">
                        {meta.source}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {filteredStyles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-lg">No styles found matching your criteria</p>
            <button
              onClick={() => {
                setSearch('')
                setSelectedMode('all')
                setSelectedCategory('all')
              }}
              className="mt-4 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
