import { allPosts } from 'contentlayer/generated'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
    let blogs = allPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.url}`,
        lastModified: post.date,
    }))

    let routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}
