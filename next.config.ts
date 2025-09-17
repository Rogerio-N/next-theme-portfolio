import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { Header } from 'next/dist/lib/load-custom-routes'

const nextConfig: NextConfig = {
    /* config options here */
    headers: async (): Promise<Header[]> => {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ]
    },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
