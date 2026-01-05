// GROQ queries for fetching blog data

// Get all published posts, ordered by date
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  category->{
    _id,
    title,
    slug,
    color
  },
  tags,
  publishedAt,
  featured
}`

// Get featured posts
export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  category->{
    _id,
    title,
    slug,
    color
  },
  publishedAt
}`

// Get single post by slug
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  gallery,
  videoFile,
  videoUrl,
  excerpt,
  content,
  externalLinks,
  category->{
    _id,
    title,
    slug,
    color
  },
  tags,
  publishedAt,
  featured
}`

// Get posts by category
export const postsByCategoryQuery = `*[_type == "post" && category._ref == $categoryId] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  category->{
    _id,
    title,
    slug,
    color
  },
  tags,
  publishedAt
}`

// Get all categories
export const allCategoriesQuery = `*[_type == "category"] | order(title.es asc) {
  _id,
  title,
  slug,
  description,
  color
}`

// Get related posts (same category, exclude current post)
export const relatedPostsQuery = `*[_type == "post" && category._ref == $categoryId && _id != $postId] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt
}`
