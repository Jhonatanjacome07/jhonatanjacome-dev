import { PortableText, type PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '../../types/blog'
import { urlFor } from '../../lib/sanity/image'

interface PortableTextRendererProps {
    content: PortableTextBlock[]
}

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-8 mb-4 text-white">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-bold mt-6 mb-3 text-white">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="text-lg leading-relaxed mb-4 text-gray-300">{children}</p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-400">
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
            <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-blue-400">
                {children}
            </code>
        ),
        link: ({ children, value }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 underline transition-colors"
            >
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) return null
            return (
                <div className="my-8">
                    <img
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || 'Blog image'}
                        className="w-full rounded-lg"
                    />
                    {value.alt && (
                        <p className="text-sm text-gray-500 mt-2 text-center italic">
                            {value.alt}
                        </p>
                    )}
                </div>
            )
        },
    },
}

const PortableTextRenderer = ({ content }: PortableTextRendererProps) => {
    return <PortableText value={content} components={components} />
}

export default PortableTextRenderer
