// Utility functions for Sanity data

/**
 * Get localized string based on current language
 */
export function getLocalizedString(
  obj: { es?: string; en?: string } | undefined,
  lang: string
): string {
  if (!obj) return ''
  return obj[lang as 'es' | 'en'] || obj.es || obj.en || ''
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string, lang: string = 'es'): string {
  const date = new Date(dateString)
  const locale = lang === 'es' ? 'es-ES' : 'en-US'
  
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Get video embed URL from various platforms
 */
export function getVideoEmbedUrl(url: string): string | null {
  // YouTube
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const youtubeMatch = url.match(youtubeRegex)
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }

  // Vimeo
  const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/
  const vimeoMatch = url.match(vimeoRegex)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  return null
}

/**
 * Get platform icon name for external links
 */
export function getPlatformIcon(platform: string): string {
  const icons: Record<string, string> = {
    youtube: 'mdi:youtube',
    github: 'mdi:github',
    codepen: 'mdi:codepen',
    huggingface: 'simple-icons:huggingface',
    colab: 'simple-icons:googlecolab',
    other: 'mdi:link-variant',
  }
  return icons[platform] || icons.other
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
