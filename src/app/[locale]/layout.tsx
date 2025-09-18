import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { routing } from '@/i18n/routing'
import '../globals.css'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from 'next'

const inter = Inter({
    subsets: ['latin', 'latin-ext'],
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
}

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const { locale } = await params
    const translator = await getTranslations({ locale, namespace: 'Metadata' })

    return {
        title: translator('title'),
        description: translator('description'),
    }
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider>
                    <ThemeProvider enableSystem={true} defaultTheme="system">
                        {children}
                        <SpeedInsights />
                        <Analytics />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
