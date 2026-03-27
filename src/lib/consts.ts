import type { NavigationItem } from "@withstudiocms/lcars-stylus/astro/types.ts";

/**
 * The URL of the source code repository for the LCARS-themed website, pointing to the GitHub repository "withstudiocms/astro-lcars" where the project's source code is hosted, allowing users to access the codebase, contribute to the project, or explore the implementation details of the LCARS design system.
 */
export const SOURCE_URL = "https://github.com/withstudiocms/astro-lcars";

/**
 * License information for the LCARS-themed website, indicating that the content is MIT Licensed and providing attribution to the company "Astro LCARS - withStudioCMS" as the creator and maintainer of the project, ensuring that users are aware of the licensing terms and the source of the content they are using or contributing to.
 * 
 * @example
 * ```json
 * {
 *   "preamble": "MIT Licensed",
 *   "company": "Astro LCARS - withStudioCMS"
 * }
 * ```
 * 
 * Will render as:
 * 
 * MIT Licensed {currentYear} Astro LCARS - withStudioCMS.
 */
export const LICENSE = {
    preamble: "MIT Licensed",
    company: "Astro LCARS - withStudioCMS",
}

/**
 * Navigation data for the LCARS-themed website, defined as an array of NavData objects that represent the different navigation items, including their text labels, hyperlink references, unique keys for identification, and optional colors from the LCARS color palette to provide visual distinction and thematic consistency throughout the design.
 */
export const NAV: NavigationItem[] = [
    { text: "Home", href: "/", key: "home" },
    { text: "Layouts", href: "/layouts", key: "layouts", color: "pale-canary" },
    { text: "Colors", href: "/colors", key: "colors" },
    { text: "Text Box", href: "/text-box", key: "text-box" },
    { text: "Element", href: "/element", key: "element", color: "pale-canary" },
    { text: "Inputs", href: "/inputs", key: "inputs" },
    { text: "Data Tables", href: "/data-tables", key: "data-tables", color: "pale-canary" },
    { text: "Custom SVGs", href: "/svgs", key: "svgs" },
    { text: "Audio", href: "/audio", key: "audio", color: "pale-canary" },
    { text: "Voyager Layout", href: "/voy", key: "voy" },
];