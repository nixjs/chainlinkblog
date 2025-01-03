import { baseUrl } from 'app/sitemap'
import { allPosts } from 'contentlayer/generated'
import compareDesc from 'date-fns/compareDesc'

export async function GET() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    const itemsXml = posts
        .map(
            ({ date, title, url, summary }) =>
                `<item>
          <title>${title}</title>
          <link>${baseUrl}/blog/${url}</link>
          <description>${summary || ''}</description>
          <pubDate>${new Date(date).toUTCString()}</pubDate>
        </item>`
        )
        .join('\n')

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

    return new Response(rssFeed, {
        headers: {
            'Content-Type': 'text/xml',
        },
    })
}
