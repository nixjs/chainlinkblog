import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import vi from 'date-fns/locale/vi'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

type Params = { params: { slug: string } }

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: Params) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    return { title: post?.title ?? '#' }
}

const PostLayout = ({ params }: Params) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

    if (!post) return <></>

    const Content = getMDXComponent(post.body.code)

    const { date, title, author } = post

    return (
        <article className='py-6 prose dark:prose-invert'>
            <h1 className='font-bold text-2xl md:text-3xl tracking-tight mb-4 text-color dark:text-color-dark'>{title}</h1>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2'>
                <div className='flex-none sm:flex items-center'>
                    <p className='text-sm text-gray-700 dark:text-gray-300 mb-0'>
                        {author ?? 'Chainlinker'} / <time dateTime={date}>{format(parseISO(date), 'dd-MM-yyyy', { locale: vi })}</time>
                    </p>
                </div>
                <div className='flex items-center'>
                    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' width='16' height='16' className='mr-1'>
                        <g fill='rgb(107, 114, 128)'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M16 7.6C16 9.2 11.0928 13.2 8 13.2C4.90721 13.2 0 8.8 0 7.6C0 6 4.90721 2 8 2C11.0928 2 16 6 16 7.6ZM11.2 7.6C11.2 9.36731 9.76731 10.8 8 10.8C6.23269 10.8 4.8 9.36731 4.8 7.6C4.8 5.83269 6.23269 4.4 8 4.4C9.76731 4.4 11.2 5.83269 11.2 7.6ZM8 9.2C8.88366 9.2 9.6 8.48366 9.6 7.6C9.6 6.71634 8.88366 6 8 6C7.11634 6 6.4 6.71634 6.4 7.6C6.4 8.48366 7.11634 9.2 8 9.2Z'
                                fill='rgb(107, 114, 128)'
                            ></path>
                        </g>
                    </svg>
                    <span className='text-gray-500 text-sm leading-7'>2,981 </span>
                </div>
            </div>
            <br />
            <div className='prose dark:prose-invert'>
                <Content />
            </div>
        </article>
    )
}

export default PostLayout
