/**
 * Represents the configuration for Open Graph (OG) metadata for different pages in the LCARS-themed website. Each page is identified by its path and has associated OG title and description properties that provide information about the page when shared on social media platforms or displayed in search engine results.
 */
export type OGPageConfig = {
    [path: string]: {
        title: string;
        description: string;
    };
};

/**
 * Configuration for Open Graph (OG) metadata for different pages in the LCARS-themed website, defined as an object where each key represents a page path and its corresponding value contains the OG title and description properties that provide information about the page when shared on social media platforms or displayed in search engine results, enhancing the visibility and appeal of the content while maintaining thematic consistency with the LCARS design aesthetic.
 */
export const OG_PAGE_CONFIG: OGPageConfig = {
    index: {
        title: "Astro LCARS",
        description: "A LCARS-inspired design system for Astro projects, featuring a collection of components and styles to create visually stunning interfaces with ease.",
    },
}