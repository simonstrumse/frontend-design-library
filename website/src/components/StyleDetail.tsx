'use client'

import Link from 'next/link'
import { ArrowLeft, Copy, Check, Sun, Moon, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import type { DesignTokens, StyleMetadata } from '@/lib/design-data'

function ColorSwatch({ name, value }: { name: string; value: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copyToClipboard}
      className="group flex flex-col items-start p-3 bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-colors"
    >
      <div
        className="w-full h-16 rounded-lg mb-2 border border-zinc-700"
        style={{ backgroundColor: value }}
      />
      <span className="text-sm font-medium text-zinc-300">{name}</span>
      <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
        {value}
        {copied ? (
          <Check className="w-3 h-3 text-green-500" />
        ) : (
          <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </span>
    </button>
  )
}

function TokenSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
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

interface StyleDetailProps {
  style: DesignTokens
  meta: StyleMetadata
  prevStyle: StyleMetadata | null
  nextStyle: StyleMetadata | null
}

export function StyleDetail({ style, meta, prevStyle, nextStyle }: StyleDetailProps) {
  const cssVariables = `
:root {
  --primary: ${style.colors.primary};
  --secondary: ${style.colors.secondary || 'inherit'};
  --background: ${style.colors.background};
  --foreground: ${style.colors.foreground};
  --muted: ${style.colors.muted || 'inherit'};
  --border: ${style.colors.border || 'transparent'};
  --font-display: ${style.typography.fontFamily.display};
  --font-body: ${style.typography.fontFamily.body};
  --radius: ${style.borderRadius[0]};
}`.trim()

  const tailwindConfig = `
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${style.colors.primary}',
        secondary: '${style.colors.secondary || ''}',
        background: '${style.colors.background}',
        foreground: '${style.colors.foreground}',
      },
      fontFamily: {
        display: ['${style.typography.fontFamily.display.split(',')[0].replace(/"/g, '')}'],
        body: ['${style.typography.fontFamily.body.split(',')[0].replace(/"/g, '')}'],
      },
      borderRadius: {
        DEFAULT: '${style.borderRadius[0]}',
      },
    },
  },
}`.trim()

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div
        className="border-b border-zinc-800"
        style={{
          background: `linear-gradient(to bottom, ${style.colors.background}22, transparent)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Styles
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">{style.name}</h1>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    meta.mode === 'dark'
                      ? 'bg-zinc-800 text-zinc-300'
                      : 'bg-zinc-200 text-zinc-700'
                  }`}
                >
                  {meta.mode === 'dark' ? <Moon className="w-3 h-3 inline mr-1" /> : <Sun className="w-3 h-3 inline mr-1" />}
                  {meta.mode}
                </span>
              </div>
              <p className="text-lg text-zinc-400 max-w-2xl mb-4">{style.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-400">
                  {meta.category}
                </span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-400">
                  {meta.type} type
                </span>
                {meta.source && (
                  <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    {meta.source}
                  </span>
                )}
              </div>
            </div>

            {/* Live preview card */}
            <div
              className="w-full md:w-80 rounded-2xl p-6 border"
              style={{
                backgroundColor: style.colors.background,
                borderColor: style.colors.border || 'transparent',
                fontFamily: style.typography.fontFamily.body,
              }}
            >
              <div
                className="text-2xl font-bold mb-2"
                style={{
                  color: style.colors.foreground,
                  fontFamily: style.typography.fontFamily.display,
                }}
              >
                Preview
              </div>
              <p
                className="text-sm mb-4"
                style={{ color: style.colors.muted || style.colors.foreground }}
              >
                This is how text looks in this style.
              </p>
              <button
                className="px-4 py-2 font-medium"
                style={{
                  backgroundColor: style.colors.primary,
                  color: style.mode === 'dark' ? style.colors.background : '#ffffff',
                  borderRadius: style.borderRadius[0],
                  boxShadow: style.shadows[0] || 'none',
                }}
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colors */}
          <TokenSection title="Colors">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(style.colors).map(([name, value]) => (
                value && <ColorSwatch key={name} name={name} value={value as string} />
              ))}
            </div>
          </TokenSection>

          {/* Typography */}
          <TokenSection title="Typography">
            <div className="space-y-4">
              <div>
                <span className="text-sm text-zinc-500 mb-1 block">Display Font</span>
                <p
                  className="text-xl"
                  style={{ fontFamily: style.typography.fontFamily.display }}
                >
                  {style.typography.fontFamily.display.split(',')[0].replace(/"/g, '')}
                </p>
              </div>
              <div>
                <span className="text-sm text-zinc-500 mb-1 block">Body Font</span>
                <p style={{ fontFamily: style.typography.fontFamily.body }}>
                  {style.typography.fontFamily.body.split(',')[0].replace(/"/g, '')}
                </p>
              </div>
              {style.typography.fontFamily.mono && (
                <div>
                  <span className="text-sm text-zinc-500 mb-1 block">Mono Font</span>
                  <p style={{ fontFamily: style.typography.fontFamily.mono }}>
                    {style.typography.fontFamily.mono.split(',')[0].replace(/"/g, '')}
                  </p>
                </div>
              )}
              <div>
                <span className="text-sm text-zinc-500 mb-2 block">Font Weights</span>
                <div className="flex flex-wrap gap-2">
                  {style.typography.fontWeights.map((weight) => (
                    <span
                      key={weight}
                      className="px-3 py-1 bg-zinc-800 rounded text-sm"
                      style={{ fontWeight: weight }}
                    >
                      {weight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TokenSection>

          {/* Border Radius */}
          <TokenSection title="Border Radius">
            <div className="flex flex-wrap gap-4">
              {style.borderRadius.map((radius, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 bg-zinc-700 mb-2"
                    style={{ borderRadius: radius }}
                  />
                  <span className="text-xs text-zinc-500 font-mono">{radius}</span>
                </div>
              ))}
            </div>
          </TokenSection>

          {/* Shadows */}
          <TokenSection title="Shadows">
            {style.shadows.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {style.shadows.map((shadow, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 bg-zinc-800 rounded-lg mb-2"
                      style={{ boxShadow: shadow }}
                    />
                    <span className="text-xs text-zinc-500 max-w-24 text-center truncate" title={shadow}>
                      Shadow {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-zinc-500">No shadows defined for this style</p>
            )}
          </TokenSection>

          {/* Spacing */}
          <TokenSection title="Spacing Scale">
            <div className="space-y-4">
              <p className="text-sm text-zinc-500">Base: {style.spacing.base}px</p>
              <div className="flex flex-wrap gap-2">
                {style.spacing.scale.map((space, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-zinc-800 rounded text-sm"
                  >
                    <div
                      className="bg-violet-500 h-3"
                      style={{ width: `${Math.min(space, 48)}px` }}
                    />
                    <span className="text-zinc-400 font-mono">{space}px</span>
                  </div>
                ))}
              </div>
            </div>
          </TokenSection>

          {/* Effects */}
          {style.effects && (
            <TokenSection title="Effects">
              <div className="space-y-3">
                {style.effects.blur && (
                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <span className="text-sm text-zinc-400">Blur</span>
                    <code className="text-sm font-mono text-zinc-300">{style.effects.blur}</code>
                  </div>
                )}
                {style.effects.backdrop && (
                  <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg">
                    <span className="text-sm text-zinc-400">Backdrop</span>
                    <code className="text-sm font-mono text-zinc-300">{style.effects.backdrop}</code>
                  </div>
                )}
              </div>
            </TokenSection>
          )}
        </div>

        {/* Code export */}
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">CSS Variables</h2>
            <CodeBlock code={cssVariables} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Tailwind Config</h2>
            <CodeBlock code={tailwindConfig} />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between pt-8 border-t border-zinc-800">
          {prevStyle ? (
            <Link
              href={`/styles/${prevStyle.id}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{prevStyle.name}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextStyle ? (
            <Link
              href={`/styles/${nextStyle.id}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <span>{nextStyle.name}</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
