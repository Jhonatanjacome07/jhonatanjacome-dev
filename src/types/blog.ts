// TypeScript types for blog data

export interface LocalizedString {
  es?: string
  en?: string
}

export interface LocalizedText {
  es?: string
  en?: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: LocalizedString
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanityFile {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface ExternalLink {
  platform: 'youtube' | 'github' | 'codepen' | 'huggingface' | 'colab' | 'other'
  url: string
  label?: LocalizedString
}

export interface Category {
  _id: string
  title: LocalizedString
  slug: {
    current: string
  }
  description?: LocalizedText
  color?: string
}

export interface PortableTextBlock {
  _type: 'block'
  _key: string
  style?: string
  children: Array<{
    _type: 'span'
    _key: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    href?: string
  }>
}

export type LocalizedPortableText = {
  es?: PortableTextBlock[]
  en?: PortableTextBlock[]
}

export interface BlogPost {
  _id: string
  title: LocalizedString
  slug: {
    current: string
  }
  mainImage?: SanityImage
  gallery?: SanityImage[]
  videoFile?: SanityFile
  videoUrl?: string
  excerpt?: LocalizedText
  content: LocalizedPortableText
  externalLinks?: ExternalLink[]
  category?: Category
  tags?: string[]
  publishedAt: string
  featured?: boolean
}

export interface BlogPostPreview {
  _id: string
  title: LocalizedString
  slug: {
    current: string
  }
  mainImage?: SanityImage
  excerpt?: LocalizedText
  category?: Category
  tags?: string[]
  publishedAt: string
  featured?: boolean
}
