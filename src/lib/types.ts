import type { LcarsColorway } from "@withstudiocms/lcars-stylus/astro/types.ts";

/**
 * Represents a navigation item in the LCARS-themed website. Each item has a text label, a hyperlink reference, a unique key for identification, and a color from the LCARS color palette.
 */
export type NavData = {
    text: string;
    href: string;
    key: string;
    color?: LcarsColorway;
};

/**
 * Represents the configuration for Open Graph (OG) metadata for different pages in the LCARS-themed website. Each page is identified by its path and has associated OG title and description properties that provide information about the page when shared on social media platforms or displayed in search engine results.
 */
export type OGPageConfig = {
    [path: string]: {
        title: string;
        description: string;
    };
};