import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { client } from '../lib/sanity/client'
import { allPostsQuery, allCategoriesQuery } from '../lib/sanity/queries'
import type { BlogPostPreview, Category } from '../types/blog'
import { getLocalizedString } from '../lib/sanity/utils'
import BlogGrid from '../components/blog/BlogGrid'
import Navbar from '../sections/Navbar'

const Blog = () => {
    const { i18n, t } = useTranslation()
    const lang = i18n.language

    const [posts, setPosts] = useState<BlogPostPreview[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const [postsData, categoriesData] = await Promise.all([
                    client.fetch(allPostsQuery),
                    client.fetch(allCategoriesQuery),
                ])
                setPosts(postsData)
                setCategories(categoriesData)
            } catch (error) {
                console.error('Error fetching blog data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const filteredPosts = selectedCategory
        ? posts.filter((post) => post.category?._id === selectedCategory)
        : posts

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        {t('blog.title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        {t('blog.description')}
                    </p>
                </div>
            </section>

            {/* Categories Filter */}
            {categories.length > 0 && (
                <section className="px-6 pb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-2 rounded-full transition-all ${selectedCategory === null
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                {t('blog.allCategories')}
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category._id}
                                    onClick={() => setSelectedCategory(category._id)}
                                    className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category._id
                                        ? 'text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                        }`}
                                    style={{
                                        backgroundColor:
                                            selectedCategory === category._id
                                                ? category.color || '#3B82F6'
                                                : undefined,
                                    }}
                                >
                                    {getLocalizedString(category.title, lang)}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    <BlogGrid posts={filteredPosts} loading={loading} />
                </div>
            </section>
        </div>
    )
}

export default Blog
