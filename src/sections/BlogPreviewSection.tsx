import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { client } from '../lib/sanity/client'
import { featuredPostsQuery } from '../lib/sanity/queries'
import type { BlogPostPreview } from '../types/blog'
import BlogCard from '../components/blog/BlogCard'

const BlogPreviewSection = () => {
    const { t } = useTranslation()
    const [posts, setPosts] = useState<BlogPostPreview[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(featuredPostsQuery)
                setPosts(data)
            } catch (error) {
                console.error('Error fetching featured posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (!loading && posts.length === 0) return null

    return (
        <section id="blog" className="relative min-h-screen py-20 px-6 bg-black z-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {t('blog.latestPosts')}
                        </h2>
                        <p className="text-gray-400 text-lg">
                            {t('blog.latestPostsDescription')}
                        </p>
                    </div>
                    <Link
                        to="/blog"
                        className="hidden md:flex items-center gap-2 px-6 py-3 bg-gold hover:bg-white text-black rounded-lg transition-colors font-medium"
                    >
                        {t('blog.viewAll')}
                        <svg
                            className="w-5 h-5"
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
                    </Link>
                </div>

                {/* Posts Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-gray-900/50 rounded-lg overflow-hidden animate-pulse"
                            >
                                <div className="aspect-video bg-gray-800" />
                                <div className="p-6 space-y-3">
                                    <div className="h-4 bg-gray-800 rounded w-1/3" />
                                    <div className="h-6 bg-gray-800 rounded w-full" />
                                    <div className="h-4 bg-gray-800 rounded w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </div>
                )}

                {/* Mobile View All Button */}
                <div className="mt-8 md:hidden text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-white text-black rounded-lg transition-colors font-medium"
                    >
                        {t('blog.viewAll')}
                        <svg
                            className="w-5 h-5"
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
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BlogPreviewSection
