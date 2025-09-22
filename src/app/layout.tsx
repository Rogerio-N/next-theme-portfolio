import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

import enMessages from '../../messages/en.json'
import ptMessages from '../../messages/pt-BR.json'

const inter = Inter({
    subsets: ['latin', 'latin-ext'],
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
}

export const metadata: Metadata = {
    title: 'Rogerio Nakayama QA',
    description: 'This is profesisonal QA Portfolio, presenting details about my experience, skills and personal projects. Hope we get in touch | Esse é meu portfolio profissional de QA, apresentando detalhes sobre minha experiencias, habilidades e projetos pessoais. Espero que entremos em contato'
}

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({children}: Readonly<Props>) {
    const store = await cookies()
    const locale = store.get("locale")?.value || "en"
    const messages = locale === "pt-BR" ? ptMessages : enMessages

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
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
