import '../styles/globals.css'
import { ThemeProvider } from 'components/theme-provider'

import { Header } from '../components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>ChainlinkBlog: God protocol</title>
                <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
                <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
                <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
                <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
                <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
                <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
                <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
                <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
                <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico' />
                <link rel='manifest' href='/favicon/manifest.json' />
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
