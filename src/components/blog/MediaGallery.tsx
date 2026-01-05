import type { SanityImage } from '../../types/blog'
import { urlFor } from '../../lib/sanity/image'
import { getVideoEmbedUrl } from '../../lib/sanity/utils'
import { useState } from 'react'

interface MediaGalleryProps {
    images?: SanityImage[]
    videoUrl?: string
    lang: string
}

const MediaGallery = ({ images, videoUrl, lang }: MediaGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<number>(0)

    if (!images && !videoUrl) return null

    const embedUrl = videoUrl ? getVideoEmbedUrl(videoUrl) : null

    return (
        <div className="my-8 space-y-6">
            {/* Video Section */}
            {embedUrl && (
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                    <iframe
                        src={embedUrl}
                        title="Video"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}

            {/* Image Gallery */}
            {images && images.length > 0 && (
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900">
                        <img
                            src={urlFor(images[selectedImage]).width(1200).url()}
                            alt={images[selectedImage].alt?.[lang as 'es' | 'en'] || 'Gallery image'}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumbnail Grid */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-video rounded-lg overflow-hidden transition-all ${selectedImage === index
                                        ? 'ring-2 ring-blue-500 scale-105'
                                        : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={urlFor(image).width(300).url()}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MediaGallery
