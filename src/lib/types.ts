import type { LcarsColorway } from "./colors";

/**
 * Represents a navigation item in the LCARS-themed website. Each item has a text label, a hyperlink reference, a unique key for identification, and a color from the LCARS color palette.
 */
export type NavData = {
    text: string;
    href: string;
    key: string;
    color?: LcarsColorway;
};

export type OGPageConfig = {
    [path: string]: {
        title: string;
        description: string;
    };
};