import type { BlogPostPreview } from '../../types/blog'
import BlogCard from './BlogCard'

interface BlogGridProps {
    posts: BlogPostPreview[]
    loading?: boolean
}

const BlogGrid = ({ posts, loading }: BlogGridProps) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-900/50 rounded-lg overflow-hidden animate-pulse"
                    >
                        <div className="aspect-video bg-gray-800" />
                        <div className="p-6 space-y-3">
                            <div className="h-4 bg-gray-800 rounded w-1/3" />
                            <div className="h-6 bg-gray-800 rounded w-full" />
                            <div className="h-4 bg-gray-800 rounded w-full" />
                            <div className="h-4 bg-gray-800 rounded w-2/3" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No posts found</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
            ))}
        </div>
    )
}

export default BlogGrid
