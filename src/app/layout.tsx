import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/templates/header';
import Footer from '@/components/templates/footer';
import QueryProvider from '@/utils/api/QueryProvider';
import NextTopLoader from 'nextjs-toploader';
const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree',
});
const yekanbakh = localFont({
    src: [
        {
            path: '../../public/fonts/yekanBakh/YekanBakh-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanBakh/YekanBakh-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanBakh/YekanBakh-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanBakh/YekanBakh-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanBakh/YekanBakh-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/yekanBakh/YekanBakh-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-yekanbakh',
});
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            dir='rtl'
            className={`${figtree.className} ${yekanbakh.className} antialiased dark`}
        >
            <body className='bg-white text-base-100 dark:bg-base-100 dark:text-base-content grid min-h-screen grid-rows-[80px_1fr_auto]'>
                <NextTopLoader showSpinner={false} />
                <QueryProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </QueryProvider>
            </body>
        </html>
    );
}

