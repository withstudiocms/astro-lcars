import { OGImageRoute } from "astro-og-canvas";
import { OG_PAGE_CONFIG } from "../../lib/og-config";
export const prerender = true;

export const { GET, getStaticPaths } = await OGImageRoute({
    param: 'route',
    pages: OG_PAGE_CONFIG,
    getImageOptions: (_path, page) => ({
        title: page.title,
        description: page.description,
        fonts: [
            "./src/assets/fonts/LCARSGTJ3.woff2"
        ],
        font: {
            title: {
                size: 60,
                lineHeight: 1.3,
                families: ["LCARSGTJ3"],
                weight: "Bold",
                color: [255, 255, 255],
            },
            description: {
                size: 40,
                lineHeight: 1.6,
                families: ["LCARSGTJ3"],
                weight: "Normal",
                color: [200, 200, 200],
            },
        },
        bgImage: {
            path: "./src/assets/og-bg.png",
            fit: "fill",
        },
        padding: 100,
        quality: 100,
    })
})