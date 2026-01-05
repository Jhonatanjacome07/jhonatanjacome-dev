import { Link } from 'react-router-dom'
import type { BlogPostPreview } from '../../types/blog'
import { urlFor } from '../../lib/sanity/image'
import { getLocalizedString, formatDate, truncateText } from '../../lib/sanity/utils'
import { useTranslation } from 'react-i18next'

interface BlogCardProps {
    post: BlogPostPreview
}

const BlogCard = ({ post }: BlogCardProps) => {
    const { i18n, t } = useTranslation()
    const lang = i18n.language

    const title = getLocalizedString(post.title, lang)
    const excerpt = getLocalizedString(post.excerpt, lang)
    const categoryTitle = post.category ? getLocalizedString(post.category.title, lang) : ''

    return (
        <Link
            to={`/blog/${post.slug.current}`}
            className="group block bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-900 transition-all duration-300 hover:scale-[1.02]"
        >
            {/* Image */}
            {post.mainImage && (
                <div className="aspect-video overflow-hidden bg-gray-800">
                    <img
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center gap-3 mb-3 text-sm">
                    {post.category && (
                        <span
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                                backgroundColor: post.category.color || '#3B82F6',
                                color: '#fff',
                            }}
                        >
                            {categoryTitle}
                        </span>
                    )}
                    <span className="text-gray-500">
                        {formatDate(post.publishedAt, lang)}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {title}
                </h3>

                {/* Excerpt */}
                {excerpt && (
                    <p className="text-gray-400 line-clamp-3 mb-4">
                        {truncateText(excerpt, 120)}
                    </p>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Read More */}
                <div className="mt-4 flex items-center text-blue-500 group-hover:text-blue-400 transition-colors">
                    <span className="text-sm font-medium">{t('blog.readMore')}</span>
                    <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
