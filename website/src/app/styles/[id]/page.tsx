import { getStyleById, getMetadataById, styleMetadata } from '@/lib/design-data'
import { StyleDetail } from '@/components/StyleDetail'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function StyleDetailPage({ params }: PageProps) {
  const { id } = await params
  const style = getStyleById(id)
  const meta = getMetadataById(id)

  if (!style || !meta) {
    notFound()
  }

  // Get adjacent styles for navigation
  const currentIndex = styleMetadata.findIndex((m) => m.id === id)
  const prevStyle = currentIndex > 0 ? styleMetadata[currentIndex - 1] : null
  const nextStyle = currentIndex < styleMetadata.length - 1 ? styleMetadata[currentIndex + 1] : null

  return (
    <StyleDetail
      style={style}
      meta={meta}
      prevStyle={prevStyle}
      nextStyle={nextStyle}
    />
  )
}

// Generate static paths for all styles
export function generateStaticParams() {
  return styleMetadata.map((style) => ({
    id: style.id,
  }))
}
