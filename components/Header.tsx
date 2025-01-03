import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'

function Icon() {
    return <Image src='/images/logo.svg' width='42' height='42' alt='Chainlink is defining how the world transacts onchain.' />
}

function Logo() {
    return (
        <h1 className='mb-0'>
            <Link href='/' className='inline-flex justify-center items-center gap-4'>
                <Icon />
                <span className='font-bold'>ChainlinkBlog</span>
            </Link>
        </h1>
    )
}

export function Header() {
    return (
        <header>
            <div className='flex flex-row items-center justify-between'>
                <Logo />
                <nav className='flex items-center ml-auto text-md font-medium space-x-6'>
                    <Link
                        href='/'
                        className='font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                    >
                        Home
                    </Link>
                    <Link
                        href='/about'
                        className='font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                    >
                        About
                    </Link>
                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}
