import Link from 'next/link'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import vi from 'date-fns/locale/vi'
import compareDesc from 'date-fns/compareDesc'
import { allPosts, Post } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

function PostCard(post: Post) {
    const Content = getMDXComponent(post.body.code)

    const { title, author, date, url, summary } = post

    return (
        <div className='prose dark:prose-invert bg-card-light dark:bg-card-dark p-4 my-4 rounded-md'>
            <h2 className='mb-1 text-xl'>
                <Link href={url} className='font-bold no-underline'>
                    {title}
                </Link>
            </h2>
            <p className='text-sm text-color-s dark:text-color-s-dark mb-0'>
                {author ?? 'Chainlinker'} / <time dateTime={date}>{format(parseISO(date), 'dd-MM-yyyy', { locale: vi })}</time>
            </p>
            <div className='mt-3 text-md text-color-p dark:text-color-p-dark'>{summary}</div>
        </div>
    )
}

export default function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <div className='pt-6'>
            <h3 className='font-bold text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black dark:text-white'>Tất cả bài viết:</h3>
            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}
