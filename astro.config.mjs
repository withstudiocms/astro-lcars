// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
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
