import '../styles/globals.css'
import { ThemeProvider } from 'components/theme-provider'

import { Header } from '../components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>ChainlinkBlog: God protocol</title>
                <link rel='icon' type='image/x-icon' href='/favicon.png' />
            </head>
            <body className='antialiased min-h-screen body-white dark:body-dark text-slate-900 dark:text-slate-50'>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <div className='max-w-2xl mx-auto py-10 px-4'>
                        <Header />
                        <main>{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
