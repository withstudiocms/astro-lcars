// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

const site = process.env.NODE_ENV === 'production'
    ? process.env.DOKPLOY_DEPLOY_URL || 'https://astro-lcars.cloud'
    : 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
    site,
    security: {
        allowedDomains: [
            { hostname: '*.astro-lcars.cloud' },
            { hostname: 'astro-lcars.cloud' },
            ...(process.env.NODE_ENV === 'production' ? [] : [{ hostname: 'localhost' }])
        ]
    },
    fonts: [{
        // https://gtjlcars.de/LCARSindex/LCARSFONTS.htm
        provider: fontProviders.local(),
        name: "LCARSGTJ3",
        cssVariable: "--font-lcarsgtj3",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        display: 'swap',
        options: {
            variants: [{
                src: ['./src/assets/fonts/LCARSGTJ3.woff2'],
                weight: "100 900",
                style: 'normal',
                display: 'swap'
            }]
        }
    }]
});
