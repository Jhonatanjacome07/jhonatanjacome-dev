import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { client } from '../lib/sanity/client'
import { postBySlugQuery, relatedPostsQuery } from '../lib/sanity/queries'
import type { BlogPost, BlogPostPreview } from '../types/blog'
import { getLocalizedString, formatDate, getPlatformIcon } from '../lib/sanity/utils'
import { urlFor } from '../lib/sanity/image'
import { Icon } from '@iconify/react'
import Navbar from '../sections/Navbar'
import PortableTextRenderer from '../components/blog/PortableTextRenderer'
import MediaGallery from '../components/blog/MediaGallery'
import BlogCard from '../components/blog/BlogCard'

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const { i18n, t } = useTranslation()
    const lang = i18n.language

    const [post, setPost] = useState<BlogPost | null>(null)
    const [relatedPosts, setRelatedPosts] = useState<BlogPostPreview[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return

            setLoading(true)
            try {
                const postData = await client.fetch(postBySlugQuery, { slug })
                setPost(postData)

                if (postData?.category?._id) {
                    const related = await client.fetch(relatedPostsQuery, {
                        categoryId: postData.category._id,
                        postId: postData._id,
                    })
                    setRelatedPosts(related)
                }
            } catch (error) {
                console.error('Error fetching post:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500" />
            </div>
        )
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                    <Link to="/blog" className="text-blue-500 hover:text-blue-400">
                        ← Back to blog
                    </Link>
                </div>
            </div>
        )
    }

    const title = getLocalizedString(post.title, lang)
    const content = post.content[lang as 'es' | 'en'] || post.content.es || []
    const categoryTitle = post.category ? getLocalizedString(post.category.title, lang) : ''

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        {t('blog.backToBlog')}
                    </Link>

                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-6">
                        {post.category && (
                            <span
                                className="px-4 py-1.5 rounded-full text-sm font-medium"
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        {title}
                    </h1>

                    {/* Main Image */}
                    {post.mainImage && (
                        <div className="aspect-video rounded-lg overflow-hidden mb-8">
                            <img
                                src={urlFor(post.mainImage).width(1200).url()}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none mb-12">
                        <PortableTextRenderer content={content} />
                    </div>

                    {/* Media Gallery */}
                    <MediaGallery
                        images={post.gallery}
                        videoUrl={post.videoUrl}
                        lang={lang}
                    />

                    {/* External Links */}
                    {post.externalLinks && post.externalLinks.length > 0 && (
                        <div className="my-12 p-6 bg-gray-900/50 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">
                                {t('blog.externalLinks')}
                            </h3>
                            <div className="space-y-3">
                                {post.externalLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                                    >
                                        <Icon
                                            icon={getPlatformIcon(link.platform)}
                                            className="w-6 h-6 text-blue-500"
                                        />
                                        <span className="flex-1 group-hover:text-blue-400 transition-colors">
                                            {getLocalizedString(link.label, lang) || link.url}
                                        </span>
                                        <Icon
                                            icon="mdi:open-in-new"
                                            className="w-5 h-5 text-gray-500"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-12">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="max-w-7xl mx-auto px-6 mt-20">
                        <h2 className="text-3xl font-bold mb-8">
                            {t('blog.relatedPosts')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost._id} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </div>
    )
}

export default BlogPostPage
